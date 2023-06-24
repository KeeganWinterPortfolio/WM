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
          The Legend of Afanc: The Lake Monster
        </h1>
        <p className="mt-6 text-xl leading-8">
          The Afanc, a mysterious creature from Welsh mythology, is said to
          inhabit the waters of lakes and rivers. This legendary beast's tales
          are deeply woven into the cultural fabric of Wales.
        </p>
        <div className="mt-10 max-w-2xl">
          <p>
            Often described as a monstrous being, the Afanc's characteristics
            range from a giant beaver, a crocodile, to a demonic water-dwelling
            entity. Its story is a complex web of fear, respect for nature, and
            the balance between humans and their environment.
          </p>
          <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-400">
            <li className="flex gap-x-3">
              <CubeIcon
                className="mt-1 h-5 w-5 flex-none text-emerald-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-300">
                  Sinister Presence.
                </strong>{" "}
                The Afanc is not just a creature of the waters. It is a symbol
                of the unpredictable and destructive forces of nature.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CubeIcon
                className="mt-1 h-5 w-5 flex-none text-emerald-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-300">
                  Heroic Feats.
                </strong>{" "}
                Tales of brave warriors and cunning maidens trapping or slaying
                the Afanc are central to its mythology, representing the human
                struggle against uncontrollable forces.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CubeIcon
                className="mt-1 h-5 w-5 flex-none text-emerald-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-300">
                  Symbolic Interpretation.
                </strong>{" "}
                From a symbol of environmental disasters to a representation of
                the challenges faced by ancient people, the beast's narrative
                holds multiple interpretations.
              </span>
            </li>
          </ul>
          <p className="mt-8">
            As you dive into the legend of the Afanc, you uncover the cultural
            richness and mythological wealth of ancient Wales. The beast's saga
            provides valuable insights into Welsh legends, their respect and
            fear for the environment, and their understanding of the world.
          </p>
          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-300">
            A Monster's Tale Weaved Into Cultural Heritage
          </h2>
          <p className="mt-6">
            The Afanc's tales permeate the folklore of Wales, painting a vivid
            picture of the ancient world's interaction with its environment. As
            you explore the creature's myths, you are not just unraveling a
            story, but discovering a vital part of Welsh cultural heritage.
          </p>
          <figure className="mt-10 border-l border-emerald-600 pl-9">
            <blockquote className="font-semibold text-gray-300">
              <p>
                “The Afanc is more than a monster, more than a myth. It’s a
                captivating probe into our ancestors' relationship with nature.”
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
                  Dr. Rhys Davies
                </strong>{" "}
                – Mythology Researcher
              </div>
            </figcaption>
          </figure>
          <p className="mt-10">
            Join us on an expedition through time and myth as we explore the
            tale of the Afanc, its cultural significance, and its impact on
            Welsh mythology.
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
            The story of the Afanc, an ancient myth brought to life.
          </figcaption>
        </figure>
      </div>
      <div className=" px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-3xl text-base leading-7 text-gray-400">
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl">
            A Deeper Dive into the Legend of the Afanc
          </h1>
          <p className="mt-6 text-xl leading-8">
            The tale of the Afanc is not just a legendary story; it's a vivid
            illustration of ancient people's understanding and interpretation of
            the natural world. This narrative invites us to delve deeper into
            our ancestors' psyche and how they perceived their environment.
          </p>
          <div className="mt-10 max-w-2xl">
            <p className="mt-6">
              The Afanc's origins are as murky as the waters it's said to
              inhabit. Often feared and respected, it served as a reminder of
              nature's unpredictability and the inherent dangers lurking in the
              wilderness.
            </p>
            <p className="mt-8">
              Many tales highlight the heroism and cunning of individuals who
              managed to outwit or subdue the Afanc. Whether by tricking it onto
              a chain or luring it into captivity using a maiden as bait, these
              tales celebrate human ingenuity in the face of overwhelming
              challenges. As Prof. Eira Morgan, a scholar in Celtic Studies,
              states, “The tales involving the Afanc embody our ancestors'
              triumph over the fearsome unknown, their struggle to tame and
              understand the world around them.”
            </p>
            <p className="mt-8">
              The Afanc's narrative is filled with symbolic interpretations. It
              serves as an embodiment of the raw power and mystery of the
              natural world. The stories of its subjugation may also symbolize
              the human endeavor to dominate and control nature, which continues
              to this day. The Afanc is a symbol of many concepts: the untamed
              wilderness, the mystery of the deep, and the primal fear of the
              unknown.
            </p>
            <p className="mt-8">
              Regardless of how you interpret the Afanc – as a symbol of the
              unpredictable and untamed wilderness, or as an embodiment of
              humanity's struggle against the unknown – its story occupies an
              essential and captivating place within Welsh mythology. Immerse
              yourself in this tale of human ingenuity and respect for the
              natural world, for it continues to inspire and enlighten us today.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
