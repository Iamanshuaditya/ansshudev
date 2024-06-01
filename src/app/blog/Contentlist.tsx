// pages/page.tsx
import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { MoveUpRight } from "lucide-react";
import { useRouter } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

export default function ContentList() {
  const component = useRef(null);
  const itemsRef = useRef<Array<HTMLLIElement | null>>([]);
  const router = useRouter();

  const revealRef = useRef<HTMLDivElement>(null);
  const [currentItem, setCurrentItem] = useState<null | number>(null);
  const [hovering, setHovering] = useState(false);
  const lastMousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    let ctx = gsap.context(() => {
      itemsRef.current.forEach((item, index) => {
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

      return () => ctx.revert();
    }, component);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const mousePos = { x: e.clientX, y: e.clientY + window.scrollY };
      const speed = Math.sqrt(Math.pow(mousePos.x - lastMousePos.current.x, 2));

      let ctx = gsap.context(() => {
        if (currentItem !== null) {
          const maxY = window.scrollY + window.innerHeight - 350;
          const maxX = window.innerWidth - 250;

          gsap.to(revealRef.current, {
            x: gsap.utils.clamp(0, maxX, mousePos.x - 110),
            y: gsap.utils.clamp(0, maxY, mousePos.y - 160),
            rotation: speed * (mousePos.x > lastMousePos.current.x ? 1 : -1),
            ease: "back.out(2)",
            duration: 1.3,
          });
          gsap.to(revealRef.current, {
            opacity: hovering ? 1 : 0,
            ease: "power3.out",
            duration: 0.4,
          });
        }
        lastMousePos.current = mousePos;
      }, component);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [hovering, currentItem]);

  const items = [
    {
      title: "Mastering JavaScript Animations",
      link: "mastering-javascript-animations",
      sub: "Js Animation",
      githubLink: "https://github.com/Iamanshuaditya/qid-web",
    },
    {
      title: "Innovative CSS Techniques for Modern Web Design",
      link: "innovative-css-techniques",
      sub: "Css",
      githubLink: "https://github.com/Iamanshuaditya/copod-ui",
    },
  ];

  const handleItemClick = (link: string) => {
    router.push(`/blog/${link}`);
  };

  return (
    <>
      <ul ref={component} className="relative grid border-b border-b-slate-100">
        {items.map((item, index) => (
          <li key={index} className="list-item">
            <div
              className="flex cursor-pointer flex-col justify-between border-t border-t-slate-100 py-10 text-slate-200 md:flex-row"
              onClick={() => handleItemClick(item.link)}
            >
              <div className="flex flex-col">
                <span className="text-3xl font-bold">{item.title}</span>
                <div className="flex gap-3 text-yellow-400">
                  <span className="text-lg font-bold">{item.sub}</span>
                </div>
              </div>
              <span className="ml-auto flex items-center gap-6 text-xl font-medium md:ml-0">
                Read more <MoveUpRight />
              </span>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
