"use client";

import { useState, useRef } from "react";
import { MessageSquare, Info } from "lucide-react";
import { submitContactForm } from "@/app/actions/contact";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);

    const loadingToastId = toast.loading("Processing your message...", {
      position: "top-right",
      autoClose: false,
      closeButton: false,
    });

    try {
      const formData = new FormData(formRef.current!);
      const result = await submitContactForm(formData);

      if (result?.success) {
        toast.update(loadingToastId, {
          render: result.message || "Message sent successfully!",
          type: "success",
          isLoading: false,
          autoClose: 5000,
          closeButton: true,
        });
        formRef.current?.reset();

        if (result.message?.includes("limit")) {
          setTimeout(() => {
            toast.info("Thank you for your message!", {
              position: "top-right",
              autoClose: 3000,
            });
          }, 1500);
        }
      } else {
        toast.update(loadingToastId, {
          render: result?.message || "Failed to send message",
          type: "error",
          isLoading: false,
          autoClose: 5000,
          closeButton: true,
        });
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast.update(loadingToastId, {
        render: "An unexpected error occurred",
        type: "error",
        isLoading: false,
        autoClose: 5000,
        closeButton: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-8 shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl">
      <h3 className="text-2xl font-bold mb-6 text-slate-800 dark:text-white flex items-center">
        <MessageSquare className="w-6 h-6 mr-2 text-primary" />
        Send Me a Message
      </h3>
      {/* Added message limit notice */}
      <div className="mt-4 text-sm text-slate-500 dark:text-slate-400 flex items-center justify-end">
        <div className="group relative inline-flex items-center">
          <Info className="w-4 h-4 mr-1" />
          <span className="cursor-pointer hover:underline">Message limits</span>
          <div className="absolute bottom-full mb-2 hidden group-hover:block w-64 p-2 text-sm bg-white dark:bg-slate-800 rounded shadow-lg border border-slate-200 dark:border-slate-700 z-10">
            You can send up to 2 messages. If exceeded, you'll need to wait 5
            minutes before sending another message. Thank you for your patient!
            😊
          </div>
        </div>
      </div>

      <form ref={formRef} onSubmit={handleSubmit}>
        {/* Form fields remain the same */}
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
          >
            Your Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-white dark:bg-slate-800 text-slate-800 dark:text-white"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
          >
            Your Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-white dark:bg-slate-800 text-slate-800 dark:text-white"
            placeholder="sample@gmail.com"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-white dark:bg-slate-800 text-slate-800 dark:text-white"
            placeholder="Project Inquiry"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
          >
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-white dark:bg-slate-800 text-slate-800 dark:text-white"
            placeholder="Your message here..."
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-primary/20 disabled:opacity-70"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}
