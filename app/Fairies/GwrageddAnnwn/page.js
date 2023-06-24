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
          The Enchanting Gwragedd Annwn: Water Fairies of Wales
        </h1>
        <p className="mt-6 text-xl leading-8">
          The Gwragedd Annwn, or the water fairies, hold a captivating presence
          in Welsh mythology. They symbolize the ancient Celts' profound
          connection with nature and the mystique that shrouds water bodies in
          the Welsh landscape.
        </p>
        <div className="mt-10 max-w-2xl">
          <p>
            Known for their beauty and gentle nature, the Gwragedd Annwn are
            believed to dwell in the lakes of Wales. Their stories blend
            elements of beauty, mystery, and the enigmatic quality of the
            natural world.
          </p>
          <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-400">
            <li className="flex gap-x-3">
              <CubeIcon
                className="mt-1 h-5 w-5 flex-none text-emerald-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-300">
                  Ethereal Beauty.
                </strong>{" "}
                The Gwragedd Annwn are often portrayed as beautiful maidens,
                symbolizing the enchanting allure of the natural world.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CubeIcon
                className="mt-1 h-5 w-5 flex-none text-emerald-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-300">
                  Lake Dwellers.
                </strong>{" "}
                These water fairies are said to inhabit the lakes of Wales,
                adding a layer of mystique to these natural features.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CubeIcon
                className="mt-1 h-5 w-5 flex-none text-emerald-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-300">
                  Tales of Interaction.
                </strong>{" "}
                Legends often tell of human interaction with the Gwragedd Annwn,
                offering fascinating insights into the Celts' understanding of
                the natural and the supernatural.
              </span>
            </li>
          </ul>
          <p className="mt-8">
            Journey with us into the mesmerizing tales of the Gwragedd Annwn, as
            we delve into the depths of these ancient myths and explore their
            cultural and historical significance.
          </p>
          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-300">
            Echoes of Enchantment: The Gwragedd Annwn
          </h2>
          <p className="mt-6">
            The myths surrounding the Gwragedd Annwn echo across the centuries,
            offering a glimpse into a time when humans held a deep reverence for
            the natural world and its unseen inhabitants. Their stories form a
            significant part of Welsh folklore and reflect a culture steeped in
            myth and legend.
          </p>
          <figure className="mt-10 border-l border-emerald-600 pl-9">
            <blockquote className="font-semibold text-gray-300">
              <p>
                “The Gwragedd Annwn are not just tales for the bedtime, but
                legends that provide a fascinating insight into our ancestors'
                relationship with the natural world.”
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
                  Dr. Brynjar Hafod
                </strong>{" "}
                – Welsh Folklore Expert
              </div>
            </figcaption>
          </figure>
          <p className="mt-10">
            Let's embark on this enchanting journey into the folklore of the
            Gwragedd Annwn, unraveling their mythical allure and discovering the
            world as our ancestors perceived it.
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
            The enchanting realm of the Gwragedd Annwn, a peek into the mythical
            past.
          </figcaption>
        </figure>
      </div>
      <div className=" px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-3xl text-base leading-7 text-gray-400">
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl">
            A Dive into the Tales of the Gwragedd Annwn
          </h1>
          <p className="mt-6 text-xl leading-8">
            The Gwragedd Annwn, known for their mesmerizing beauty and
            enchanting allure, are more than mere characters in ancient tales.
            They serve as a bridge between humans and the mystical world of
            nature, with legends filled with wonder, caution, and wisdom.
          </p>
          <div className="mt-10 max-w-2xl">
            <p className="mt-6">
              The Gwragedd Annwn are often depicted as beautiful maidens who
              interact with humans, sometimes marrying them. These marriages,
              however, always come with conditions tied to the supernatural
              world, often ending in tragedy when these conditions are broken.
              Such narratives provide a fascinating exploration of the delicate
              balance between the human and the mystical.
            </p>
            <p className="mt-8">
              One of the most famous stories involves a Gwragedd Annwn named
              Nelferch. According to the legend, Prince Elphin discovered her
              while fishing. Nelferch, possessing the gift of prophecy, later
              saved Elphin from imprisonment by foretelling his future. The
              story reveals the Celts' belief in supernatural abilities and the
              fateful interactions between humans and the fairy world.
            </p>
            <p className="mt-8">
              The Gwragedd Annwn are believed to reside in the beautiful, serene
              lakes of Wales, further strengthening the Celtic connection to
              nature. The lakes, often considered gateways to the otherworld,
              symbolize a realm beyond ordinary human experience.
            </p>
            <p className="mt-8">
              Whether you see the Gwragedd Annwn as symbols of nature's mystical
              allure or as cautionary figures warning against the disruption of
              supernatural boundaries, their stories hold a captivating charm.
              Unravel these ancient tales and immerse yourself in a world filled
              with beauty, wisdom, and enchantment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
