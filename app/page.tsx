import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <p className="mb-4">
        I'm a big believer that great software is felt before it's understood.
        They flow. They guide. They disappear into the background and let users
        get things done. That belief shapes how I build products and how I think
        about engineering. I'm Shajahan, a Senior Software Engineer, UX and DX
        enthusiast who loves crafting beautiful, functional web applications.
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
