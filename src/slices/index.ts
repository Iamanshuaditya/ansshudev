
import dynamic from "next/dynamic";

export const components = {
  biography: dynamic(() => import("./Biography")),
  hero: dynamic(() => import("./Hero")),
  image: dynamic(() => import("./Image")),
  tech_list: dynamic(() => import("./TechList")),
  text_block: dynamic(() => import("./TextBlock")),
};
