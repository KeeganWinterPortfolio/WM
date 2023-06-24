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
          The Myth of Ceffyl Dŵr, the Water Horse
        </h1>
        <p className="mt-6 text-xl leading-8">
          The Ceffyl Dŵr, a captivating creature from Welsh folklore, is a water
          spirit appearing in the form of a horse. With tales passed down
          through generations, this spectral entity is as enchanting as it is
          enigmatic.
        </p>
        <div className="mt-10 max-w-2xl">
          <p>
            A shape-shifter, known to take various forms and sizes, the Ceffyl
            Dŵr's ethereal presence is often linked with bodies of water such as
            waterfalls, rivers, and ponds. Its story is an exploration of the
            mystical, the uncanny, and the supernatural.
          </p>
          <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-400">
            <li className="flex gap-x-3">
              <CubeIcon
                className="mt-1 h-5 w-5 flex-none text-emerald-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-300">
                  Shapeshifting Presence.
                </strong>{" "}
                The Ceffyl Dŵr is known for its ability to change its form and
                size, sometimes appearing as a large horse, at other times
                taking the shape of a tiny pony.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CubeIcon
                className="mt-1 h-5 w-5 flex-none text-emerald-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-300">
                  Benevolent or Malevolent.
                </strong>{" "}
                The creature's demeanor varies across stories. In some tales, it
                appears mischievous, leading travelers astray, while in others,
                it is benign and helpful.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CubeIcon
                className="mt-1 h-5 w-5 flex-none text-emerald-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-300">
                  Symbol of Nature's Mysteries.
                </strong>{" "}
                The Ceffyl Dŵr is often seen as a representation of the
                unpredictable and mystical aspects of nature and water.
              </span>
            </li>
          </ul>
          <p className="mt-8">
            As we delve into the legend of the Ceffyl Dŵr, we are plunged into
            the cultural depths and imaginative richness of ancient Wales. The
            creature’s tale provides a fascinating insight into the belief in
            the supernatural, highlighting a world where nature and mythology
            are intrinsically intertwined.
          </p>
          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-300">
            A Spectral Steed's Journey Through Legend and Lore
          </h2>
          <p className="mt-6">
            Tales of the Ceffyl Dŵr weave a fascinating narrative, illuminating
            the deep-seated beliefs and fears of our ancestors. As you tread the
            path of these ancient stories, you are not just uncovering a fable,
            but an integral part of the rich tapestry that is Welsh folklore.
          </p>
          <figure className="mt-10 border-l border-emerald-600 pl-9">
            <blockquote className="font-semibold text-gray-300">
              <p>
                “The Ceffyl Dŵr is not simply a creature, it's an embodiment of
                the untamed and enigmatic elements of the natural world.”
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
                  Prof. Mairwen Thomas
                </strong>{" "}
                – Folklore Specialist
              </div>
            </figcaption>
          </figure>
          <p className="mt-10">
            Join us on a journey through time and myth as we delve into the tale
            of the Ceffyl Dŵr, its cultural significance, and its enduring
            impact on Welsh folklore.
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
            The enigmatic journey of the Ceffyl Dŵr, a myth brought to life.
          </figcaption>
        </figure>
      </div>
      <div className=" px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-3xl text-base leading-7 text-gray-400">
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl">
            A Deeper Dive into the Legend of Ceffyl Dŵr
          </h1>
          <p className="mt-6 text-xl leading-8">
            The tale of the Ceffyl Dŵr is not just a fable; it is a testament to
            the deep respect our ancestors held for the mysteries of the natural
            world, and the power they attributed to its unpredictable elements.
          </p>
          <div className="mt-10 max-w-2xl">
            <p className="mt-6">
              The Ceffyl Dŵr's ability to shift its form and size reflects the
              ever-changing and elusive nature of water. It was a way for our
              ancestors to personify the capricious nature of this element,
              giving a face to the intangible and often unfathomable forces of
              nature.
            </p>
            <p className="mt-8">
              The spirit horse's personality varies widely from tale to tale. In
              some, it's a playful, harmless creature; in others, it's a
              malicious entity. These contrasting portrayals serve as a reminder
              of the dual nature of water — as a life-sustainer and a potential
              destroyer.
            </p>
            <p className="mt-8">
              The Ceffyl Dŵr's ability to disappear into water or evaporate into
              mist suggests an understanding of the water cycle, a concept which
              our ancestors may have grasped intuitively, if not scientifically.
              Through the myth of the Ceffyl Dŵr, they might have been making
              sense of the complex processes of nature that they observed but
              couldn't fully comprehend.
            </p>
            <p className="mt-8">
              Whether you view the Ceffyl Dŵr as a personification of water's
              unpredictability or an embodiment of its life-giving and
              life-taking properties, the legend offers a fascinating insight
              into the psyche of our ancestors. It's a tale that continues to
              captivate us today, reminding us of the reverence we ought to hold
              for the forces of nature that govern our lives.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
