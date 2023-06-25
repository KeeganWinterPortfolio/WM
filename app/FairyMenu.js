import react from "react";
import Image from "next/image";
import ExtendedMenuMineFairy from "../public/images/ExtendedMenuMineFairy.png";
import ExtendedMenuWaterFairy from "../public/images/ExtendedMenuWaterFairy.png";
import Link from "next/link";

const posts = [
  {
    id: 1,
    title: "Gwragedd Annwn",
    href: "/Fairies/GwrageddAnnwn",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.",
    imageUrl: ExtendedMenuWaterFairy,
    date: "June 24, 2023",
    datetime: "2023-06-24",
    category: { title: "Fairies", href: "/Fairies/GwrageddAnnwn" },
    author: {
      name: "Keegan",
      role: "Article Author",
      href: "/Fairies/GwrageddAnnwn",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 2,
    title: "Coblynau",
    href: "/Fairies/Coblynau",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.",
    imageUrl: ExtendedMenuMineFairy,
    date: "June 24, 2023",
    datetime: "2023-06-24",
    category: { title: "Fairies", href: "/Fairies/Coblynau" },
    author: {
      name: "Keegan",
      role: "Article Author",
      href: "/Fairies/Coblynau",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  // More posts...
];

export default function FairyMenu() {
  return (
    <div className="py-10 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-300 sm:text-4xl">
            Fairies
          </h2>
          <p className="mt-2 text-lg leading-8 text-neutral-300">
            Learn about the rich history of fairies in welsh myth.
          </p>
          <Link href="/Fairies">
            <button className="rounded-lg mt-3 w-full px-3 py-1 bg-emerald-500 hover:bg-emerald-400 text-black text-center font-bold">
              Browse Articles
            </button>
          </Link>
          <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
            {posts.map((post) => (
              <article
                key={post.id}
                className="relative isolate flex flex-col gap-8 lg:flex-row"
              >
                <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                  <Image
                    width={500}
                    height={500}
                    src={post.imageUrl}
                    alt=""
                    className="absolute border-2 border-neutral-700 inset-0 h-full w-full rounded-2xl bg-neutral-50 object-cover"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-neutral-900/10" />
                </div>
                <div>
                  <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime={post.datetime} className="text-neutral-300">
                      {post.date}
                    </time>
                    <a
                      href={post.category.href}
                      className="relative z-10 rounded-full bg-emerald-500 px-3 py-1.5 font-bold hover:bg-emerald-400 text-black"
                    >
                      {post.category.title}
                    </a>
                  </div>
                  <div className="group relative max-w-xl">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-neutral-300">
                      <a href={post.href}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </a>
                    </h3>
                    <p className="mt-5 text-sm leading-6 text-neutral-400">
                      {post.description}
                    </p>
                  </div>
                  <div className="mt-6 flex flex-col border-t border-neutral-500 pt-6">
                    <div className="relative flex items-center gap-x-4">
                      <img
                        src={post.author.imageUrl}
                        alt=""
                        className="h-10 w-10 rounded-full bg-neutral-50"
                      />
                      <div className="text-sm leading-6">
                        <p className="font-semibold text-neutral-300">
                          <a href={post.author.href}>
                            <span className="absolute inset-0" />
                            {post.author.name}
                          </a>
                        </p>
                        <p className="text-neutral-400">{post.author.role}</p>
                      </div>
                    </div>
                    <Link href={post.href}>
                      <button className="rounded-lg mt-3 w-full px-3 py-1 bg-emerald-500 hover:bg-emerald-400 text-black text-center font-bold">
                        Go To Article
                      </button>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
