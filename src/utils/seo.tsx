import { useEffect } from "react";

interface SeoOptions {
  title?: string;
  description?: string;
}

export function useSeo({ title, description }: SeoOptions) {
  useEffect(() => {
    const prevTitle = document.title;
    const prevDescription = document.querySelector("meta[name=description]")?.getAttribute("content");

    if (title) document.title = title;
    if (description) {
      const existing = document.querySelector("meta[name=description]");
      if (existing) {
        existing.setAttribute("content", description);
      } else {
        const desc = document.createElement("meta");
        desc.setAttribute("name", "description");
        desc.setAttribute("content", description);
        document.head.appendChild(desc);
      }
    }

    return () => {
      document.title = prevTitle || "";
      if (typeof prevDescription === "string") {
        const desc = document.querySelector("meta[name=description]");
        if (desc) desc.setAttribute("content", prevDescription);
      }
    };
  }, [title, description]);
}
