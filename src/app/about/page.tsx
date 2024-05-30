import React from "react";
import Biography from "./Biography";
import TechList, { TechListProps } from "@/slices/TechList";
import { Content } from "@prismicio/client";

function About() {
  const mockTechListSlice: Content.TechListSlice = {
    slice_type: "tech_list",
    slice_label: null,
    id: "some-id",
    variation: "default",
    version: "v1",
    primary: {
      title: "Tech List",
    },
    items: [
      {
        tech_name: "React",
        tech_color: "#00D1F7",
      },
      {
        tech_name: "Next.js",
        tech_color: "#FFFFFF",
      },
      {
        tech_name: "GSAP",
        tech_color: "#0AE448",
      },
    ],
  };

  return (
    <div>
      <Biography />
      <TechList
        slice={mockTechListSlice}
        index={0}
        slices={[]}
        context={undefined}
      />
    </div>
  );
}

export default About;
