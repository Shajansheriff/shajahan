import Link from "next/link";
import { getBlogPosts } from "app/blog/utils";

export function BlogPosts() {
  let allBlogs = getBlogPosts();

  return (
    <div>
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/blog/${post.slug}`}
          >
            <ol className="list-disc pl-4 w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
              <li className="text-neutral-700 dark:text-neutral-100 tracking-tight ">
                {post.metadata.title}
              </li>
            </ol>
          </Link>
        ))}
    </div>
  );
}
