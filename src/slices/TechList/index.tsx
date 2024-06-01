"use client";

import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import React, { useLayoutEffect, useRef } from "react";
import { MdCircle } from "react-icons/md";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import { PrismicRichText } from "@prismicio/react";
import { InfiniteMovingCards } from "@/components/infinite-moving-cards";
import VideoEmbed from "./VideoPlayer";

gsap.registerPlugin(ScrollTrigger);

/**
 * Props for `TechList`.
 */
export type TechListProps = SliceComponentProps<Content.TechListSlice>;

const experienceSliceData: Content.ExperienceSlice[] = [
  {
    slice_type: "experience",
    slice_label: null,
    id: "experience-id-1",
    variation: "default",
    version: "v1",
    primary: {
      heading: "Experience",
    },
    items: [
      {
        title: "React Developer",
        time_period: "2024(January - March)",
        institution: "Chat360",
        description: [
          {
            type: "paragraph",
            text: "During my internship at Chat360, I had the exciting opportunity to contribute to the development of their UI landing page using React. It was an enriching experience where I applied my skills in design and front-end development to create a user-friendly and visually appealing interface",
            spans: [],
          },
        ],
      },
    ],
  },
];

const TechList = ({ slice }: TechListProps): JSX.Element => {
  const component = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          pin: true, // pin the trigger element while active
          start: "top bottom",
          end: "bottom top",
          scrub: 4,
        },
      });

      tl.fromTo(
        ".tech-row",
        {
          x: (index) => {
            return index % 2 === 0
              ? gsap.utils.random(600, 400)
              : gsap.utils.random(-600, -400);
          },
        },
        {
          x: (index) => {
            return index % 2 === 0
              ? gsap.utils.random(-600, -400)
              : gsap.utils.random(600, 400);
          },
          ease: "power1.inOut",
        },
      );
    }, component);
    return () => ctx.revert(); // cleanup!
  }, []);

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="wrapper overflow-hidden"
      ref={component}
    >
      <Bounded as="div">
        <Heading size="xl" className="mb-8" as="h2">
          {slice.primary.title}
        </Heading>
      </Bounded>

      {slice.items.map(({ tech_color, tech_name }, index) => (
        <div
          key={index}
          className="tech-row mb-8 flex items-center justify-center gap-4 text-slate-700"
          aria-label={tech_name || ""}
        >
          {Array.from({ length: 15 }, (_, index) => (
            <React.Fragment key={index}>
              <span
                className={
                  "tech-item text-8xl font-extrabold uppercase tracking-tighter"
                }
                style={{
                  color: index === 7 && tech_color ? tech_color : "inherit",
                }}
              >
                {tech_name}
              </span>
              <span className="text-3xl">
                <MdCircle />
              </span>
            </React.Fragment>
          ))}
        </div>
      ))}
      {experienceSliceData.map((experienceSlice, index) => (
        <Experience
          key={index}
          slice={experienceSlice}
          index={index}
          slices={[]}
          context={undefined}
        />
      ))}
      <Achivements />
    </section>
  );
};

export default TechList;

export type ExperienceProps = SliceComponentProps<Content.ExperienceSlice>;

export const Experience = ({ slice }: ExperienceProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Heading as="h2" size="lg">
        {slice.primary.heading}
      </Heading>
      {slice.items.map((item, index) => (
        <div key={index} className="ml-6 mt-8 max-w-prose md:ml-12 md:mt-16">
          <Heading as="h3" size="sm">
            {item.title}
          </Heading>

          <div className="mt-1 flex w-fit items-center gap-1 text-2xl font-semibold tracking-tight text-slate-400">
            <span>{item.time_period}</span>{" "}
            <span className="text-3xl font-extralight">/</span>{" "}
            <span>{item.institution}</span>
          </div>
          <div className="prose prose-lg prose-invert mt-4">
            <PrismicRichText field={item.description} />
          </div>
        </div>
      ))}
    </Bounded>
  );
};

const Achivements = (): JSX.Element => {
  const items = Array.from({ length: 2 }, (_, index) => ({
    href: `/${index + 1}.png`,
  }));

  return (
    <>
      <Bounded>
        <Heading as="h2" size="lg">
          Achievements
        </Heading>
      </Bounded>
      <InfiniteMovingCards
        items={items}
        direction="right"
        speed="fast"
        className="mt-6"
      />
      <div className="m-12 flex justify-center">
        <div className="w-full max-w-lg">
          <VideoEmbed />
        </div>
      </div>
    </>
  );
};
