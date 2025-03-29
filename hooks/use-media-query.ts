"use client";

import { useState, useEffect } from "react";

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // Avoid running on the server
    if (typeof window !== "undefined") {
      const media = window.matchMedia(query);

      // Initial check
      setMatches(media.matches);

      // Add listener for changes
      const listener = () => setMatches(media.matches);
      media.addEventListener("change", listener);

      // Clean up
      return () => media.removeEventListener("change", listener);
    }

    // Default to false on server
    return () => {};
  }, [query]);

  return matches;
}
