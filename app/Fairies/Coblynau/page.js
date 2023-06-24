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
          The Coblynau: The Mine Fairies of Welsh Mythology
        </h1>
        <p className="mt-6 text-xl leading-8">
          Dwelling in the darkness of Welsh mines, the Coblynau are curious
          beings of Welsh folklore. Also known as "mine fairies," these
          industrious spirits are said to have been the unseen companions of
          miners, often heard but rarely seen.
        </p>
        <div className="mt-10 max-w-2xl">
          <p>
            Famed for their mischievous but generally benign nature, the
            Coblynau were believed to guide miners towards rich veins of metal
            or warn them of impending dangers. Their tales are deeply woven into
            the cultural fabric of Wales, echoing the region's rich mining
            history.
          </p>
          <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-400">
            <li className="flex gap-x-3">
              <CubeIcon
                className="mt-1 h-5 w-5 flex-none text-emerald-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-300">
                  Mystical Miners.
                </strong>{" "}
                The Coblynau are often depicted as being small, gnome-like
                creatures dressed in mining gear, reflecting the day-to-day
                lives and aspirations of the mining communities that spoke of
                them.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CubeIcon
                className="mt-1 h-5 w-5 flex-none text-emerald-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-300">
                  Spirit Guides.
                </strong>{" "}
                They were believed to perform all kinds of mining activities
                deep within the mines, often foretelling or leading miners to
                rich deposits.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CubeIcon
                className="mt-1 h-5 w-5 flex-none text-emerald-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-300">
                  Protective Presences.
                </strong>{" "}
                According to folklore, the Coblynau were also known to cause
                mischief if disrespected, but more often, they acted as
                protectors, giving warning knocks before cave-ins.
              </span>
            </li>
          </ul>
          <p className="mt-8">
            As you explore the lore of the Coblynau, you unravel the rich
            cultural and historical tapestry of Wales. The legends of these mine
            fairies provide intriguing insights into the beliefs, hopes, and
            fears of the mining communities of ancient Wales.
          </p>
          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-300">
            A Glimpse into the Underworld of Welsh Folklore
          </h2>
          <p className="mt-6">
            The stories of the Coblynau offer a fascinating peek into the
            underworld of Welsh folklore. These creatures may be small in size,
            but their presence in the myths and tales of Wales is profound,
            reflecting the central role that mining played in the region's
            history.
          </p>
          <figure className="mt-10 border-l border-emerald-600 pl-9">
            <blockquote className="font-semibold text-gray-300">
              <p>
                “The Coblynau, though elusive and mysterious, carry the
                heartbeat of Wales' rich mining heritage. Their tales speak
                volumes about the hopes and fears that once echoed in the
                region's mines.”
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
                  Prof. Rhys Davies
                </strong>{" "}
                – Folklore Specialist
              </div>
            </figcaption>
          </figure>
          <p className="mt-10">
            Join us as we unearth the tales of the Coblynau, exploring their
            cultural significance and their enduring place in the fascinating
            world of Welsh mythology.
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
            The Coblynau: Echoes from the mining past of Wales.
          </figcaption>
        </figure>
      </div>
      <div className=" px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-3xl text-base leading-7 text-gray-400">
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl">
            A Deeper Exploration of the Coblynau
          </h1>
          <p className="mt-6 text-xl leading-8">
            In the lore of the Coblynau, we find a fascinating blend of
            mythology and social history. Their stories offer us a glimpse into
            the worldview of the miners of ancient Wales, revealing their hopes,
            fears, and the ways in which they made sense of their perilous work
            environment.
          </p>
          <div className="mt-10 max-w-2xl">
            <p className="mt-6">
              These gnome-like beings were believed to be tireless miners, their
              echoing knocks a common sound in the labyrinthine mine tunnels.
              But these sounds were not just mere echoes; to the miners, they
              served as guides to bountiful veins of minerals or as warnings of
              looming cave-ins. Through the Coblynau, we see a manifestation of
              the miners' longing for fortune and their fear of the ever-present
              dangers that lurked in the mines.
            </p>
            <p className="mt-8">
              The Coblynau were not just creatures of lore; they were a part of
              the miners' daily lives. They were respected and often placated
              with small offerings to ensure safety and prosperity. This belief
              system demonstrates the close relationship between man, myth, and
              nature, a cornerstone of Celtic spirituality.
            </p>
            <p className="mt-8">
              The Coblynau's enduring presence in Welsh folklore also speaks to
              the vital role of mining in shaping the region's identity. Their
              stories echo the joys, struggles, and resilience of the people who
              braved the mines every day, offering us a window into a bygone
              era.
            </p>
            <p className="mt-8">
              The tales of the Coblynau, although rooted in the past, still hold
              relevance today. They remind us of our intrinsic connection with
              the earth, the blend of fear and respect it inspires, and the
              folklore born from that dynamic. They tell us a story of hope,
              resilience, and the human instinct to find meaning amidst
              uncertainty.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
