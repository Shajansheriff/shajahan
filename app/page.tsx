import type { Metadata } from "next";
import Link from "next/link";
import { BlogPosts } from "app/components/posts";

export const metadata: Metadata = {
  title: "Shajahan (Sha) | Senior Software Engineer in Toronto",
  description:
    "Shajahan (Sha) is a Senior Software Engineer in Toronto, Canada. Building FinTech and SaaS products with React, Next.js, TypeScript, and a focus on UI, DX, and practical AI/LLM automation.",
  keywords: [
    "Senior Software Engineer",
    "Toronto",
    "Canada",
    "React",
    "Next.js",
    "TypeScript",
    "Design Systems",
    "Developer Experience",
    "FinTech",
    "SaaS",
  ],
  openGraph: {
    title: "Shajahan (Sha) | Senior Software Engineer in Toronto",
    description:
      "Senior Software Engineer in Toronto building FinTech/SaaS with React, Next.js, TypeScript, and a focus on UI, DX, and practical AI/LLM automation.",
    url: "/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shajahan (Sha) | Senior Software Engineer in Toronto",
    description:
      "Senior Software Engineer in Toronto building FinTech/SaaS with React, Next.js, TypeScript, and a focus on UI, DX, and practical AI/LLM automation.",
  },
};

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Hey there, I’m Shajahan
      </h1>

      <div className="mb-8 space-y-4 text-neutral-800 dark:text-neutral-200">
        <p>
          You can call me Sha, it’s easier to say and saves us both a bit of
          sweat. I’m your friendly neighborhood software engineer who loves
          building applications that AI agents are trying to replace (but never
          quite will).
        </p>

        <p>
          Right now I’m nerding out on the AI/LLM frontier. I like to pretend
          I’ve got it all figured out, but honestly I’m mostly just grinding
          alongside Claude and Cursor to ship things that matter. Full
          disclosure: this whole website is built and maintained by a Claude
          agent.
        </p>

        <p>
          Previously, I spent my time breaking (and eventually fixing) things at
          startups you may or may not have heard of. One more thing: I also
          write about my adventures in code on my blog (links below).
        </p>

        <p>
          <Link
            href="/about"
            className="underline decoration-neutral-400 underline-offset-4 transition-all hover:decoration-neutral-800 dark:decoration-neutral-600 dark:hover:decoration-neutral-200"
          >
            Want the full story? →
          </Link>
        </p>
      </div>

      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
