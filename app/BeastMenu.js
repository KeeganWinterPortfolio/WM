import react from "react";
import Image from "next/image";
import MainImageWMMedium from "../public/images/MainImageWMMedium.png";

const posts = [
  {
    id: 1,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde.",
    imageUrl: MainImageWMMedium,
  },
  {
    id: 1,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde.",
    imageUrl: MainImageWMMedium,
  },
  // More posts...
];

export default function BeastMenu() {
  return (
    <div className="w-44 mr-2 pt-6">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-300 sm:text-4xl">
            Dragons
          </h2>
          <p className="mt-2 text-lg leading-8 text-neutral-400">
            Illo sint voluptas. Error voluptates culpa eligendi.
          </p>
        </div>
        <div className="mx-auto mt-6 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 pb-6">
          {posts.map((post) => (
            <article
              key={post.id}
              className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-emerald-950 pb-3 border-2 border-emerald-950"
            >
              <Image
                src={post.imageUrl}
                width={1000}
                height={300}
                alt=""
                className="w-full"
              />

              <h3 className="mt-3 mx-2 text-lg font-semibold leading-6 text-black">
                <span className="absolute inset-0" />
                {post.title}
              </h3>
              <p className="mt-3 mx-2 text-black">{post.description}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
