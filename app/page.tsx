import Link from "next/link";
import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Hey, I'm Shajahan
      </h1>

      <div className="mb-8 space-y-4 text-neutral-800 dark:text-neutral-200">
        <p>
          Software engineer who thinks the best code is the kind nobody notices.
          If users are thinking about your UI, you've already lost.
        </p>

        <p>
          I build things that work, ship fast, and don't make future-me cry when
          reading the codebase six months later.
        </p>

        <p>
          Currently nerding out on AI/LLM stuff. Previously broke things (and
          fixed them) at startups you may or may not have heard of.
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
