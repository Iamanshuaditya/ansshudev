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

        <div className="prose prose-xl prose-slate prose-invert col-start-1">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio aperiam
          quisquam magni, vel cum omnis sed tempora nemo. Eligendi quos
          asperiores perferendis modi assumenda voluptas inventore dolorum
          recusandae numquam beatae.
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
