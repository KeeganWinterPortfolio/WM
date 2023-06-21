import react from "react";
import Image from "next/image";
import MainImageWMMedium from "../public/images/MainImageWMMedium.png";

const posts = [
  {
    id: 1,
    title: "Title Of Dragon Article",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde.",
    imageUrl: MainImageWMMedium,
  },
  {
    id: 1,
    title: "Title Of Dragon Article",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde.",
    imageUrl: MainImageWMMedium,
  },
  // More posts...
];

export default function FairyMenu() {
  return (
    <div className="w-full mx-4 pt-6">
      <div className="mx-auto">
        <div className="mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-300 sm:text-4xl">
            Dragons
          </h2>
          <p className="mt-2 mb-3 text-lg leading-8 text-neutral-400">
            Illo sint voluptas. Error voluptates culpa eligendi.
          </p>
        </div>
        <div className="mx-auto space-y-6 pb-6">
          {posts.map((post) => (
            <article
              key={post.id}
              className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-emerald-950 pb-3 border-emerald-700 border-2 "
            >
              <Image
                src={post.imageUrl}
                width={1000}
                height={300}
                alt=""
                className="w-full rounded-2xl"
              />

              <h3 className="mt-3 mx-2 text-lg font-semibold leading-6 text-emerald-500">
                <span className="absolute inset-0" />
                {post.title}
              </h3>
              <p className="mt-3 mx-2 text-emerald-600">{post.description}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
