interface BlogData {
  title: string;
  slice_type: string;
  date: string;
  tags: string[];
  data: {
    slices: string[];
  };
}

const demoData: Record<string, BlogData> = {
  "mastering-javascript-animations": {
    slice_type: "tech_list",
    title: "Mastering JavaScript Animations",

    date: "Friday, December 1, 2024",
    tags: ["JavaScript", "Animation"],
    data: {
      slices: ["Working on it...."],
    },
  },
  "innovative-css-techniques": {
    slice_type: "tech_list",
    title: "Innovative CSS Techniques for Modern Web Design",
    date: "Friday, December 1, 2024",
    tags: ["CSS", "Web Design"],
    data: {
      slices: ["Working on it"],
    },
  },
};

export default demoData;
