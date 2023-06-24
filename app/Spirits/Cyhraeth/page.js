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
          The Legend of Cyhyraeth: The Banshee of Wales
        </h1>
        <p className="mt-6 text-xl leading-8">
          The Cyhyraeth, often paralleled with the Irish Banshee, is a spectral
          figure deeply rooted in Welsh mythology. Said to be a harbinger of
          death, the mournful sounds made by the Cyhyraeth serve as an eerie
          forewarning of an impending demise.
        </p>
        <div className="mt-10 max-w-2xl">
          <p>
            Described as an apparition or a disembodied voice, the Cyhyraeth's
            mournful groans echo through the silent Welsh nights, inciting fear
            and awe among those who hear it. Its narrative presents a
            fascinating blend of dread, death, and the intangible realm of the
            supernatural.
          </p>
          <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-400">
            <li className="flex gap-x-3">
              <CubeIcon
                className="mt-1 h-5 w-5 flex-none text-emerald-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-300">
                  Death's Herald.
                </strong>{" "}
                The Cyhyraeth is seen as a death omen, its presence invariably
                associated with an upcoming death.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CubeIcon
                className="mt-1 h-5 w-5 flex-none text-emerald-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-300">
                  Morbid Echo.
                </strong>{" "}
                Its mournful wails, heard predominantly along the coast, are
                said to be forewarnings for sailors or people with seafaring
                connections.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CubeIcon
                className="mt-1 h-5 w-5 flex-none text-emerald-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-300">
                  Symbolic Representation.
                </strong>{" "}
                Symbolizing the inseparable connection between life and death,
                the legend of the Cyhyraeth holds profound existential
                significance.
              </span>
            </li>
          </ul>
          <p className="mt-8">
            As we explore the legend of Cyhyraeth, we delve into the rich
            tapestry of Welsh mythology and cultural heritage. The spectral
            figure's tales provide valuable insights into the ancient Welsh
            worldview and their understanding of life, death, and what might lie
            beyond.
          </p>
          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-300">
            The Cyhyraeth: A Mournful Echo from Wales' Past
          </h2>
          <p className="mt-6">
            The Cyhyraeth's tales stand as timeless reminders of Wales' rich
            mythological heritage. To follow the mournful cries of the Cyhyraeth
            is to delve into the heart of Welsh culture and its ancient
            understanding of life's greatest mystery: death.
          </p>
          <figure className="mt-10 border-l border-emerald-600 pl-9">
            <blockquote className="font-semibold text-gray-300">
              <p>
                “The Cyhyraeth is not just a legend. It is a symbolic narrative
                that reflects our ancestors' attitudes toward life, death, and
                the mystery of existence.”
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
                  Dr. Myfanwy Davies
                </strong>{" "}
                – Folklore Expert
              </div>
            </figcaption>
          </figure>
          <p className="mt-10">
            Join us as we navigate the echoes of the Cyhyraeth, exploring its
            cultural significance and its impact on Welsh mythology.
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
            The echoing wails of Cyhyraeth, a haunting reminder of mortality.
          </figcaption>
        </figure>
      </div>
      <div className=" px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-3xl text-base leading-7 text-gray-400">
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl">
            A Deeper Dive into the Legend of the Cyhyraeth
          </h1>
          <p className="mt-6 text-xl leading-8">
            The story of the Cyhyraeth is a chilling tale that delves into the
            deepest fears and mysteries of human existence. This spectral
            figure, though feared, is a symbolic representation of death's
            natural place in the cycle of life.
          </p>
          <div className="mt-10 max-w-2xl">
            <p className="mt-6">
              The Cyhyraeth is much more than a portent of death. Its spectral
              nature, mournful cries, and the dread it incites reflect our
              ancestors' understanding of life, death, and the afterlife. It
              serves as a reminder of mortality's inevitability and the mystery
              surrounding our existence.
            </p>
            <p className="mt-8">
              Often described as an elderly, gaunt woman, the Cyhyraeth is said
              to roam the Welsh coastlines, her mournful cries carried by the
              winds. To sailors and those with seafaring connections, the sound
              of the Cyhyraeth was an ominous sign, foretelling storms,
              disasters, or death. This association with the sea reflects the
              Celts' respect and fear for nature's unpredictable and formidable
              power.
            </p>
            <p className="mt-8">
              Despite its eerie reputation, the Cyhyraeth also plays a crucial
              role in understanding Celtic attitudes towards death. The phantom
              is not a figure of evil but one of inevitability. It represents
              the natural cycle of life and death, reminding us of our own
              mortality.
            </p>
            <p className="mt-8">
              Whether you perceive the Cyhyraeth as a symbol of our collective
              fear of death or as a figure embodying the natural cycle of life,
              its story remains a captivating piece of Welsh mythology. The
              spectral figure of the Cyhyraeth offers a unique glimpse into the
              mind of our ancestors and their interpretations of life's greatest
              mystery. As such, it continues to capture our imagination and
              inspire us to further explore our existence's enigmatic nature.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
