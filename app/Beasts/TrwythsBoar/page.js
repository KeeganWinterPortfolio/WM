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
          The Myth of Twrch Trwyth
        </h1>
        <p className="mt-6 text-xl leading-8">
          Twrch Trwyth, a formidable creature from Welsh mythology, is a boar of
          monstrous proportions and fierce nature. This legendary beast's tales
          are deeply rooted in the Mabinogion, one of the earliest prose
          literature of Britain.
        </p>
        <div className="mt-10 max-w-2xl">
          <p>
            Known for its enchanting tusks and bristles made of precious metals,
            the boar's presence in the tales symbolizes both the wealth and
            dangers that lie in the untamed wilderness. Its story is a complex
            blend of adventure, heroism, and the inexplicable powers of the
            mythical world.
          </p>
          <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-400">
            <li className="flex gap-x-3">
              <CubeIcon
                className="mt-1 h-5 w-5 flex-none text-emerald-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-300">
                  Legendary Presence.
                </strong>{" "}
                Twrch Trwyth is not merely a beast. It is a king transformed
                into a monstrous boar, leading to captivating tales of
                transformation and redemption.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CubeIcon
                className="mt-1 h-5 w-5 flex-none text-emerald-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-300">
                  Heroic Pursuit.
                </strong>{" "}
                The story of King Arthur's pursuit of Twrch Trwyth across
                Ireland, Wales, and Cornwall, is a highlight of Celtic heroic
                mythology.
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
                From a symbol of untamed nature to a representation of
                formidable challenges, the beast's narrative holds multiple
                interpretations.
              </span>
            </li>
          </ul>
          <p className="mt-8">
            As you delve deeper into the legend of Twrch Trwyth, you uncover the
            cultural richness and mythological wealth of ancient Wales. The
            beast's saga provides valuable insights into Celtic legends,
            animistic beliefs, and the fascination with metamorphoses.
          </p>
          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-300">
            A Beast's Journey Through Legend and Time
          </h2>
          <p className="mt-6">
            Twrch Trwyth's tales from the Mabinogion stand the test of time,
            painting a vivid picture of the ancient world's mythological
            landscape. As you follow the boar's tracks, you are not just
            exploring a story, but a vibrant part of Welsh cultural heritage.
          </p>
          <figure className="mt-10 border-l border-emerald-600 pl-9">
            <blockquote className="font-semibold text-gray-300">
              <p>
                “Twrch Trwyth is more than a beast, more than a myth. It’s a
                fascinating exploration into the depths of our ancestral
                imagination.”
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
                  Dr. Aneirin Hughes
                </strong>{" "}
                – Mythology Researcher
              </div>
            </figcaption>
          </figure>
          <p className="mt-10">
            Join us on a journey through time and myth as we explore the tale of
            Twrch Trwyth, its cultural significance, and its impact on Welsh
            mythology.
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
            The journey of Twrch Trwyth, a myth brought to life.
          </figcaption>
        </figure>
      </div>
      <div className=" px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-3xl text-base leading-7 text-gray-400">
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl">
            A Deeper Dive into the Legend of Twrch Trwyth
          </h1>
          <p className="mt-6 text-xl leading-8">
            The tale of Twrch Trwyth is more than just a legend; it's a
            narrative tapestry woven with threads of courage, transformation,
            and symbolic interpretation. This story invites us to delve deeper
            into the psyche of our ancestors, to explore their unique
            interpretation of the world around them.
          </p>
          <div className="mt-10 max-w-2xl">
            <p className="mt-6">
              One of the most compelling elements of Twrch Trwyth's story is the
              mystery surrounding his origins. Legend has it that he was
              originally a king, cursed to roam the earth in the form of a wild
              boar. This transformation stands as a testament to the ancient
              Celtic belief in metamorphosis and the thin line separating the
              human from the animal world.
            </p>
            <p className="mt-8">
              The most prominent chapter in Twrch Trwyth's saga involves his
              epic confrontation with King Arthur. In this part of the
              Mabinogion, Arthur and his knights embark on a perilous journey
              across the landscapes of Ireland, Wales, and Cornwall. They
              relentlessly track the beast, their pursuit becoming a test of
              courage, wisdom, and strength. As Prof. Branwen Evans, a scholar
              in Celtic Studies, says, “The pursuit of Twrch Trwyth embodies the
              quintessential Celtic hero's journey – a tale of valor, challenge,
              and relentless pursuit of a seemingly unattainable goal.”
            </p>
            <p className="mt-8">
              Throughout the story, Twrch Trwyth's narrative is filled with
              symbolic interpretations. His bristles, made of precious metals,
              may represent the untamed bounty of nature. His transformative
              journey may depict the fluidity of form in Celtic mythology. Twrch
              Trwyth is a character of many faces: he's a cursed king, a symbol
              of untamed nature, and a formidable adversary. These
              interpretations offer glimpses into the world as our ancestors saw
              it.
            </p>
            <p className="mt-8">
              Whether you perceive Twrch Trwyth as a symbol of the wild,
              untamed, and unpredictable world or an embodiment of the
              relentless pursuit of seemingly unattainable goals, his story
              holds a captivating and timeless place within Welsh mythology. So
              delve into this tale of transformation and courage, for it
              continues to inspire and enlighten us today.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
