import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FLASHMIND — Neon Mind Map" },
      { name: "description", content: "A neon, glassmorphic mind map with starfield, particles and flashing connections." },
      { property: "og:title", content: "FLASHMIND — Neon Mind Map" },
      { property: "og:description", content: "A neon, glassmorphic mind map with starfield, particles and flashing connections." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <iframe
      src="/flashmind.html"
      title="FLASHMIND"
      className="fixed inset-0 h-screen w-screen border-0 bg-background"
    />
  );
}
