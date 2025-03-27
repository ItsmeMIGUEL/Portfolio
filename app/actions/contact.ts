"use server";

import { db } from "@/lib/firebase";
import { ref, push, get, serverTimestamp } from "firebase/database";

export async function submitContactForm(formData: FormData) {
  try {
    const data = Object.fromEntries(formData.entries());

    // Validate required fields
    if (!data.name || !data.email || !data.message) {
      return { success: false, message: "Please fill in all required fields." };
    }

    const messagesRef = ref(db, "messages");

    // Fetch all messages from Firebase
    const snapshot = await get(messagesRef);

    if (snapshot.exists()) {
      const messages = Object.values(snapshot.val()) as Array<{
        email: string;
        createdAt: number;
      }>;
      const userMessages = messages.filter((msg) => msg.email === data.email);

      if (userMessages.length > 0) {
        const lastMessage = userMessages[userMessages.length - 1] as {
          createdAt: number;
        };
        const lastTimestamp = lastMessage.createdAt;

        const now = Date.now();
        const timeElapsed = now - lastTimestamp;
        const cooldown = 5 * 60 * 1000; // 3 minutes in milliseconds

        if (timeElapsed < cooldown) {
          const remainingTimeInSeconds = Math.ceil(
            (cooldown - timeElapsed) / 1000
          );
          const minutes = Math.floor(remainingTimeInSeconds / 60);
          const seconds = remainingTimeInSeconds % 60;

          // Format the time string
          const timeString =
            minutes > 0
              ? `${minutes}m ${seconds.toString().padStart(2, "0")}s`
              : `${seconds}s`;

          return {
            success: false,
            message: `Please wait ${timeString} before sending another message.`,
          };
        }
      }
    }

    // Get current date and time in 12-hour format
    const now = new Date();
    const formattedDate = now.toISOString().split("T")[0]; // "YYYY-MM-DD"
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const amPm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12; // Convert 0 (midnight) and 12 (noon) properly
    const formattedTime = `${hours}:${minutes} ${amPm}`; // "hh:mm AM/PM"

    // Add message to Firebase
    const newMessageRef = push(messagesRef, {
      name: data.name.toString(),
      email: data.email.toString(),
      subject: data.subject?.toString() || "No Subject",
      message: data.message.toString(),
      createdAt: now.getTime(), // Store timestamp as number
      date: formattedDate, // e.g., "2025-03-27"
      time: formattedTime, // e.g., "2:30 PM"
    });

    return { success: true, message: "Message sent successfully!" };
  } catch (error) {
    console.error("Firebase error:", error);
    return { success: false, message: "Error sending message." };
  }
}
