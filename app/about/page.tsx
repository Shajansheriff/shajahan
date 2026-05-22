import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Shajahan (Sha) is a Senior Software Engineer in Toronto, Canada with a decade of experience. Founding engineer building FinTech/SaaS with React, Next.js, TypeScript, and practical AI/LLM automation with a strong focus on UI and DX.",
};

function DownloadIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

type Skill = {
  name: string;
  url: string;
};

function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="underline decoration-neutral-400 underline-offset-4 transition-all hover:decoration-neutral-800 dark:decoration-neutral-600 dark:hover:decoration-neutral-200"
    >
      {children}
    </a>
  );
}

const skills: Record<string, Skill[]> = {
  Frontend: [
    { name: "React.js", url: "https://react.dev" },
    { name: "Next.js", url: "https://nextjs.org" },
    { name: "React Native", url: "https://reactnative.dev" },
    { name: "TypeScript", url: "https://www.typescriptlang.org" },
    { name: "Ember.js", url: "https://emberjs.com" },
  ],
  Backend: [
    { name: "Node.js", url: "https://nodejs.org" },
    { name: "Fastify", url: "https://fastify.dev" },
    { name: "Hono", url: "https://hono.dev" },
    { name: "PostgreSQL", url: "https://www.postgresql.org" },
    { name: "AWS", url: "https://aws.amazon.com" },
    { name: "Python", url: "https://www.python.org" },
  ],
  Testing: [
    { name: "Vitest", url: "https://vitest.dev" },
    { name: "Jest", url: "https://jestjs.io" },
    { name: "Playwright", url: "https://playwright.dev" },
    { name: "Cypress", url: "https://www.cypress.io" },
    { name: "Testing Library", url: "https://testing-library.com" },
  ],
  Tools: [
    { name: "Cursor", url: "https://cursor.com" },
    { name: "Claude", url: "https://anthropic.com" },
    { name: "Figma", url: "https://www.figma.com" },
    { name: "GitHub Actions", url: "https://github.com/features/actions" },
  ],
};

export default function AboutPage() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">About</h1>

      <div className="space-y-4 text-neutral-800 dark:text-neutral-200">
        <p>
          If you landed here from the home page, hi again! I’m Shajahan, but you
          can call me Sha. I’ve been building software for about a decade now, yes,
          from the era of "Too many Stack Overflow tabs," wondering why on earth
          the CSS won't center, and treating unit tests like a love language. Of
          course, these days I’m mostly trying to leave that "love" to the AI
          agents so I can focus on the big picture. I’m learning. Please clap.
        </p>

        <p>
          Currently, I'm building at{" "}
          <ExternalLink href="https://fundthrough.com">FundThrough</ExternalLink>.
          We're developing automated underwriting systems that chew through messy, real-world documents to
          streamline risk assessment. The goal is pretty simple: take the
          complex, repetitive parts humans shouldn’t have to do and make them
          disappear into the background. It’s high-stakes work, but it’s
          incredibly satisfying to see automation actually work in the wild.
        </p>

        <p>
          Before this, I was a founding engineer at{" "}
          <ExternalLink href="https://www.rocketlane.com">Rocketlane</ExternalLink>.
          I got to build the whole thing from the ground up alongside the founders, taking the
          product from Day Zero to million-dollar revenue. Zero-to-one is
          chaotic in the best way; you ship fast, learn faster, and your work
          shows up in the product immediately. I’m still waiting for the day my
          ESOPs turn my "become a billionaire" dreams into reality, but until
          then, I’ll keep doing what I love: building applications that solve
          real business problems and deliver actual customer delight.
        </p>

        <p>
          At the end of the day, I genuinely care about UI and DX. If a product
          looks simple and feels effortless, it’s usually because someone
          obsessed over it for way too long. You can thank those obsessive
          people. Their hard work is the "reinforcement learning" that helps your
          LLM sidekick actually be useful today. Great AI starts with a great
          core.
        </p>

        <p className="italic text-neutral-600 dark:text-neutral-400">
          I’ll leave you with one final note: Can I invert a binary tree on a
          whiteboard? Probably not. Can I build a SaaS platform from zero to
          multi-million dollar revenue? Done it. Multiple times. Peace out.
        </p>
      </div>

      {/* <a
        href="/Shajahan_Resume_2026.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex items-center gap-2 rounded-lg bg-neutral-900 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
      >
        <DownloadIcon />
        Download Resume
      </a> */}

      <div className="mt-12">
        <h2 className="mb-6 text-xl font-medium tracking-tight">
          Technologies I Work With
        </h2>

        <div className="space-y-6">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h3 className="mb-3 text-sm font-medium uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <a
                    key={skill.name}
                    href={skill.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-neutral-100 px-3 py-1 text-sm text-neutral-700 transition-colors hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700"
                  >
                    {skill.name}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12">
        <h2 className="mb-4 text-xl font-medium tracking-tight">
          Get in Touch
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400">
          <a
            href="mailto:shajansheriff@gmail.com"
            className="underline decoration-neutral-400 underline-offset-2 transition-all hover:text-neutral-800 dark:decoration-neutral-600 dark:hover:text-neutral-200"
          >
            shajansheriff@gmail.com
          </a>
          <span className="mx-2">·</span>
          Toronto, Canada
        </p>
      </div>
    </section>
  );
}
