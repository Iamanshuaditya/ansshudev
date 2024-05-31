import Avatar from "@/components/Avatar";
import Bounded from "@/components/Bounded";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import { Content, ImageFieldImage } from "@prismicio/client";

const Biography = ({}): JSX.Element => {
  const image: ImageFieldImage = {
    url: "https://avatars.githubusercontent.com/u/87059568?s=400&u=5947b19055e80fe6623b46ee637a429d167dcccf&v=4",
    alt: "Anshu Aditya",
    dimensions: {
      width: 400,
      height: 400,
    },
    copyright: null,
    id: "unique-id",
    edit: {
      x: 0,
      y: 0,
      zoom: 1,
      background: "transparent",
    },
  };

  return (
    <Bounded>
      <div className="grid gap-x-8 gap-y-6 md:grid-cols-[2fr,1fr]">
        <Heading size="xl" className="col-start-1">
          Anshu Aditya
        </Heading>

        <div className=" prose prose-xl prose-slate prose-invert col-start-1 grid opacity-80">
          <span>
            {" "}
            Oh, hello there 👋{" "}
            <div>
              👨‍🎓 I’m <span className="font-bold opacity-100">Anshu Aditya</span>
              , a 18 year-old high school student.{" "}
            </div>
            <div>
              ⚒️ I mainly work with{" "}
              <span className="font-bold opacity-100">
                Nextjs,Typescript,Threejs
              </span>{" "}
              and <span className="font-bold opacity-100">solidity</span> on a
              daily basis.{" "}
            </div>
            🏡 Currently living in the{" "}
            <span className="font-bold opacity-100">Jhakhand</span> in India.
          </span>
          <br />
          <div>
            {/* Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus,
            hic iusto magni culpa exercitationem aperiam explicabo modi vel
            soluta maxime. Labore, accusantium quae? Nam laborum, reprehenderit
            consequatur est voluptatum magnam? */}
          </div>
        </div>
        <Button linkField={"/"} label={"Resume"} />

        <Avatar
          image={image}
          className="row-start-1 max-w-sm md:col-start-2 md:row-end-3"
        />
      </div>
    </Bounded>
  );
};

export default Biography;
