import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Senior Software Engineer with 9+ years of experience. Founding engineer, AI/LLM enthusiast, and advocate for exceptional UI and developer experience.",
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
          I'm a Senior Software Engineer with 9+ years under my belt, and right
          now I'm really into <strong>AI and LLM-powered workflows</strong>. At
          FundThrough, We've been building automated underwriting systems with
          AI/LLM that can chew through complex documents and handle risk
          assessment, basically turning hours of manual work into something that
          just happens.
        </p>

        <p>
          Before that, I was a{" "}
          <strong>founding engineer at Rocketlane</strong>, where I got to build
          the whole thing from the ground up with the founders. That zero-to-one
          experience taught me a lot about moving fast without cutting corners.
          I've worked across FinTech, SaaS, and a bit of everything in between.
        </p>

        <p>
          Close to my heart, I genuinely care about <strong>UI and DX</strong>.
          Whether it's the buttons a user clicks or the code a teammate reads, I
          think great software should feel effortless. Good APIs, smart
          abstractions, solid docs. That's how you build things that last.
        </p>

        <p className="italic text-neutral-600 dark:text-neutral-400">
          Can I invert a binary tree on a whiteboard? Probably not. Can I build
          a SaaS platform from zero to multi-million dollar revenue? Done it.
        </p>
      </div>

      <a
        href="/Shajahan_Resume_2026.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex items-center gap-2 rounded-lg bg-neutral-900 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
      >
        <DownloadIcon />
        Download Resume
      </a>

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
