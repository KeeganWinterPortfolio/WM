import MainImageWMLarge from "../../../public/images/MainImageWMLarge.png";
import Image from "next/image";
import { CubeIcon, InformationCircleIcon } from "@heroicons/react/20/solid";
import { Cinzel } from "next/font/google";

const cinzel = Cinzel({ subsets: ["latin"], weight: ["800"] });

export default function Home() {
  return (
    <div className=" px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-400">
        <p className="text-base font-semibold leading-7 text-emerald-600">
          Discover
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl">
          The Tale of Angelystor, the Angel of Death
        </h1>
        <p className="mt-6 text-xl leading-8">
          Angelystor, an enigmatic figure from Welsh mythology, is known as the
          Angel of Death. This spectral character's tales form a significant
          part of the folklore of Llangernyw, a small village in North Wales.
        </p>
        <div className="mt-10 max-w-2xl">
          <p>
            Known for his eerie and foreboding presence, Angelystor announces
            the names of those from the parish who would die in the coming year.
            His story is a stark reminder of mortality and the supernatural
            elements that pervade Welsh folklore.
          </p>
          <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-400">
            <li className="flex gap-x-3">
              <CubeIcon
                className="mt-1 h-5 w-5 flex-none text-emerald-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-300">
                  Prophetic Announcements.
                </strong>{" "}
                Angelystor's chilling practice of foretelling deaths manifests
                the Celtic fascination with prophecies and omens.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CubeIcon
                className="mt-1 h-5 w-5 flex-none text-emerald-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-300">
                  Connection to the Yew Tree.
                </strong>{" "}
                The Angelystor myth is deeply connected with the Llangernyw Yew,
                a tree over 4000 years old. This association reveals the Celtic
                reverence for nature and its spiritual symbolism.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CubeIcon
                className="mt-1 h-5 w-5 flex-none text-emerald-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-300">
                  Timeless Symbolism.
                </strong>{" "}
                As the Angel of Death, Angelystor embodies the cycle of life and
                death, a universal theme in mythologies worldwide.
              </span>
            </li>
          </ul>
          <p className="mt-8">
            As we delve into the legend of Angelystor, we unravel the rich
            tapestry of Welsh folklore, its intriguing beliefs, and its
            deep-seated connection to the natural world. The angel's narrative
            serves as a window into understanding our ancestors' relationship
            with life, death, and the supernatural.
          </p>
          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-300">
            The Whispering Voice of Death
          </h2>
          <p className="mt-6">
            The tale of Angelystor, haunting yet fascinating, lingers in the
            cultural consciousness of Wales. Its exploration invites us not only
            to the charm of folklore but also to our shared human quest to
            understand the mysteries of life and death.
          </p>
          <figure className="mt-10 border-l border-emerald-600 pl-9">
            <blockquote className="font-semibold text-gray-300">
              <p>
                “Angelystor is not just a mythical figure. He’s a chilling
                reminder of our mortality, a voice whispering the inevitable
                cycle of life and death.”
              </p>
            </blockquote>
            <figcaption className="mt-6 flex gap-x-4">
              <img
                className="h-6 w-6 flex-none rounded-full bg-gray-50"
                src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <div className="text-sm leading-6">
                <strong className="font-semibold text-gray-300">
                  Prof. Gwyneth Davies
                </strong>{" "}
                – Welsh Folklore Scholar
              </div>
            </figcaption>
          </figure>
          <p className="mt-10">
            Venture with us into the lore of Angelystor, unraveling its cultural
            resonance, spiritual significance, and impact on Welsh folklore.
          </p>
        </div>
        <figure className="mt-16">
          <Image
            width={1000}
            height={500}
            className="aspect-video rounded-xl bg-gray-50 object-cover"
            src={MainImageWMLarge}
            alt=""
          />
          <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-400">
            <InformationCircleIcon
              className="mt-0.5 h-5 w-5 flex-none text-gray-300"
              aria-hidden="true"
            />
            The legend of Angelystor, an echo from the past.
          </figcaption>
        </figure>
      </div>
      <div className=" px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-3xl text-base leading-7 text-gray-400">
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl">
            A Deeper Dive into the Legend of Angelystor
          </h1>
          <p className="mt-6 text-xl leading-8">
            The legend of Angelystor is a complex narrative that intricately
            weaves themes of life, death, and prophecy. This story invites us to
            delve deeper into our ancestors' perceptions of mortality and the
            supernatural.
          </p>
          <div className="mt-10 max-w-2xl">
            <p className="mt-6">
              The Angelystor myth begins in the humble setting of Llangernyw,
              with the ancient yew tree acting as the spectral character's
              earthly platform. Each year on Halloween, Angelystor is said to
              announce from within the hollow trunk of this tree the names of
              the parish members who will die in the coming year. This practice
              of prophetic announcements presents a fascinating insight into the
              Celtic fascination with omens and the supernatural.
            </p>
            <p className="mt-8">
              The association of Angelystor with the Llangernyw Yew further
              underscores the deep respect for nature within Celtic tradition.
              The yew tree, believed to be one of the oldest living things in
              Wales, acts as a silent witness to time, embodying the cycle of
              life and death, much like Angelystor himself.
            </p>

            <p className="mt-8">
              The chilling tale of Angelystor brings to light the omnipresence
              of death within Celtic folklore. Far from being seen as a mere
              end, death is considered a significant transition, an integral
              part of the life cycle. Angelystor, as the harbringer of this
              transition, is as much feared as he is respected.
            </p>
            <p className="mt-8">
              Angelystor is a spectral figure that represents the inevitability
              of death, the cycle of life, and the deep-rooted Celtic respect
              for prophecy and the supernatural. Whether you see him as a grim
              forecaster of death or an entity symbolizing the eternal cycle of
              life and death, his tale holds a chilling and timeless place in
              Welsh folklore. As you delve deeper into this spectral tale,
              you’ll find a mirror reflecting age-old beliefs and fears that
              continue to shape our understanding of life, death, and what lies
              beyond.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
