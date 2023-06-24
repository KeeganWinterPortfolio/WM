import MainImageWMLarge from "../../../public/images/MainImageWMLarge.png";
import Image from "next/image";
import { CubeIcon, InformationCircleIcon } from "@heroicons/react/20/solid";
import { Cinzel } from "next/font/google";

const cinzel = Cinzel({ subsets: ["latin"], weight: ["800"] });

export default function Home() {
  return (
    <div className=" px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-400">
        <p className="text-base font-semibold leading-7 text-red-600">
          Discover
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl">
          The Legend of Draig Goch
        </h1>
        <p className="mt-6 text-xl leading-8">
          Draig Goch, the mighty Red Dragon, is one of the most iconic figures
          in Welsh mythology. The dragon's tale, deeply embedded in the history
          and cultural identity of Wales, has been passed down through
          generations.
        </p>
        <div className="mt-10 max-w-2xl">
          <p>
            Known for its fiery breath and fierce nature, the Red Dragon is a
            symbol of the nation's spirit and courage. Its story is a compelling
            mix of prophecy, historical struggle, and the enduring resilience of
            the Welsh people.
          </p>
          <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-400">
            <li className="flex gap-x-3">
              <CubeIcon
                className="mt-1 h-5 w-5 flex-none text-red-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-300">
                  Prophecy and Symbolism.
                </strong>{" "}
                The tale of the Red Dragon begins with an ancient prophecy and
                over time it has grown to represent the spirit and resilience of
                the Welsh nation.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CubeIcon
                className="mt-1 h-5 w-5 flex-none text-red-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-300">
                  A National Emblem.
                </strong>{" "}
                Featured prominently on the Welsh flag, the Red Dragon has
                become one of the most recognized national symbols in the world.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CubeIcon
                className="mt-1 h-5 w-5 flex-none text-red-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-300">
                  An Evolving Legend.
                </strong>{" "}
                From a symbol of battle to a representation of national pride,
                the Red Dragon's narrative continues to evolve, reflecting the
                history and spirit of Wales.
              </span>
            </li>
          </ul>
          <p className="mt-8">
            As you delve deeper into the legend of the Red Dragon, you uncover
            the historical richness and mythological complexity of Wales. The
            dragon's tale provides valuable insights into Welsh identity,
            nationalism, and the enduring power of symbolism.
          </p>
          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-300">
            The Red Dragon's Journey Through Legend and Time
          </h2>
          <p className="mt-6">
            The tale of Draig Goch remains relevant today, vividly encapsulating
            the spirit of the Welsh nation. As you follow the dragon's flight,
            you are not just exploring a story, but a vibrant part of Welsh
            cultural heritage.
          </p>
          <figure className="mt-10 border-l border-red-600 pl-9">
            <blockquote className="font-semibold text-gray-300">
              <p>
                “The Red Dragon is more than a myth, more than a symbol. It’s a
                testament to the enduring spirit of the Welsh people.”
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
                  Dr. Rhys Williams
                </strong>{" "}
                – Welsh Historian
              </div>
            </figcaption>
          </figure>
          <p className="mt-10">
            Join us on a journey through time and myth as we explore the tale of
            the Red Dragon, its cultural significance, and its impact on Welsh
            history and identity.
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
            The journey of Draig Goch, a legend brought to life.
          </figcaption>
        </figure>
      </div>
      <div className=" px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-3xl text-base leading-7 text-gray-400">
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl">
            A Deeper Dive into the Legend of the Red Dragon
          </h1>
          <p className="mt-6 text-xl leading-8">
            The tale of Draig Goch is a tapestry of history and mythology woven
            with threads of national identity, resilience, and prophecy. This
            legendary creature invites us to delve deeper into the collective
            psyche of the Welsh people and their vibrant history.
          </p>
          <div className="mt-10 max-w-2xl">
            <p className="mt-6">
              The Red Dragon first appears in the ancient Welsh tale of Lludd
              and Llefelys, where it battles a White Dragon, causing havoc
              across the land. The Red Dragon's victory, prophesied by the
              wizard Merlin, is seen as a metaphor for the eventual triumph of
              the Welsh people over their invaders.
            </p>
            <p className="mt-8">
              Over time, the Red Dragon became a symbol of Welsh identity and
              resistance, particularly during conflicts with England. Its
              imagery was used in battle standards and was eventually adopted as
              the central figure of the national flag, a role it continues to
              hold today.
            </p>
            <p className="mt-8">
              The Red Dragon's narrative is filled with powerful symbolism. Its
              fiery breath represents the passion and spirit of the Welsh
              people, while its battle-hardened exterior stands as a testament
              to the nation's resilience. The Red Dragon is a figure of many
              roles: it's a prophecy, a symbol of resistance, and a powerful
              embodiment of Welsh identity.
            </p>
            <p className="mt-8">
              Whether you see the Red Dragon as a symbol of Welsh pride and
              resistance or an embodiment of ancient prophecies, its story holds
              a captivating and enduring place within Welsh culture. So delve
              into this tale of resilience and victory, for it continues to
              inspire and enlighten us today.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
