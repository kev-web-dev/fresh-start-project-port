import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import bodyHtml from "./-body.html?raw";

const TITLE = "STREET FOODS – Taste the Streets of the Philippines!";
const DESC =
  "Discover Filipino street foods, local vendors and food destinations around Bayawan City, Negros Oriental.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    if (document.getElementById("street-foods-script")) return;
    const s = document.createElement("script");
    s.id = "street-foods-script";
    s.src = "/js/script.js";
    document.body.appendChild(s);
  }, []);
  return <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />;
}
