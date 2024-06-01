"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { FaGithub, FaLink } from "react-icons/fa";
import { runConfetti } from "./confetti";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ContentList() {
  const component = useRef(null);
  const itemsRef = useRef<Array<HTMLLIElement | null>>([]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0);

  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig,
  );

  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig,
  );

  const handleMouseMove = (event: any) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth);
  };

  useEffect(() => {
    const items = itemsRef.current;

    gsap.registerPlugin(ScrollTrigger);

    items.forEach((item, index) => {
      if (item) {
        gsap.fromTo(
          item,
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1.3,
            ease: "elastic.out(1,0.3)",
            stagger: 0.2,
            scrollTrigger: {
              trigger: item,
              start: "top bottom-=100px",
              end: "bottom center",
              toggleActions: "play none none none",
            },
          },
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger: any) => trigger.kill());
    };
  }, []);

  const items = [
    {
      id: 1,
      title: "Lul-(Platform for online courses)",
      img: "/1st.png",
      teach: "Nextjs/Stripe/Prisma/Gsap/Typesript",
      link: "https://lul-phi.vercel.app",
      githubLink: "https://github.com/Iamanshuaditya/lul",
      name: "Won hackthon(1st)",
      designation: "by 30dc",
    },
    {
      id: 2,
      title: "Autowise-(Saas Landing page for automated tool)",

      teach: "Nextjs/Aceternity",
      link: "https://autowise.vercel.app/",
      githubLink: "https://github.com/Iamanshuaditya/Autowise",
      name: "Autowise",
      designation: "Saas Landing Page",
    },
    {
      id: 3,
      title: "QID Web-(Landing page of a startup )",
      img: "/2nd.png",
      teach: "Nextjs/Gsap",
      link: "https://qid-web.vercel.app/",
      githubLink: "https://github.com/Iamanshuaditya/qid-web",
      name: "Got Bounty(2nd)",
      designation: "by qid-web",
    },
    {
      id: 4,
      title: "Copod UI-{Landing page for Podcasts}",

      teach: "Nextjs/Framer/Gsap/Scss",
      link: "https://copod-ui.vercel.app/",
      githubLink: "https://github.com/Iamanshuaditya/copod-ui",
      name: "Copod UI",
      designation: "Podcasts Landing Page",
    },
  ];

  return (
    <>
      <ul ref={component} className="relative grid border-b border-b-slate-100">
        {items.map((item, index) => (
          <li
            key={index}
            className="list-item"
            ref={(el) => (itemsRef.current[index] = el)}
          >
            <a
              href="#"
              className="flex flex-col justify-between border-t border-t-slate-100 py-10 text-slate-200 md:flex-row"
            >
              <div className="flex flex-col">
                <span className="text-3xl font-bold">{item.title}</span>
                <div className="flex gap-3 text-yellow-400">
                  <span className="text-lg font-bold">{item.teach}</span>
                </div>
              </div>
              <span className="relative ml-auto flex items-center gap-6 text-xl font-medium md:ml-0">
                {item.img ? (
                  <div
                    className="group relative"
                    onMouseEnter={() => setHoveredIndex(item.id)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <Image
                      onMouseMove={handleMouseMove}
                      height={100}
                      width={100}
                      src={item.img}
                      alt={item.name}
                      className="relative !m-0 h-14 w-14 rounded-full  object-cover object-top !p-0 transition duration-500 group-hover:z-30 group-hover:scale-105"
                      onClick={runConfetti}
                    />
                    <AnimatePresence>
                      {hoveredIndex === item.id && (
                        <motion.div
                          initial={{ opacity: 0, y: 20, scale: 0.6 }}
                          animate={{
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            transition: {
                              type: "spring",
                              stiffness: 260,
                              damping: 10,
                            },
                          }}
                          exit={{ opacity: 0, y: 20, scale: 0.6 }}
                          style={{
                            translateX: translateX,
                            rotate: rotate,
                            whiteSpace: "nowrap",
                          }}
                          className="absolute -left-1/2 -top-16 z-50 flex translate-x-1/2 flex-col items-center justify-center rounded-md bg-black px-4 py-2 text-xs shadow-xl"
                        >
                          <div className="absolute inset-x-10 -bottom-px z-30 h-px w-[20%] bg-gradient-to-r from-transparent via-emerald-500 to-transparent " />
                          <div className="absolute -bottom-px left-10 z-30 h-px w-[40%] bg-gradient-to-r from-transparent via-sky-500 to-transparent " />
                          <div className="relative z-30 text-base font-bold text-white">
                            {item.name}
                          </div>
                          <div className="text-xs text-white">
                            {item.designation}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  ""
                )}
                <FaLink onClick={() => window.open(item.link, "_blank")} />
                <FaGithub
                  target="_blank"
                  onClick={() => window.open(item.githubLink, "_blank")}
                />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
