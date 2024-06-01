import demoData from "./demoData";

import Heading from "@/components/Heading";
import Bounded from "@/components/Bounded";
import { DateField } from "@prismicio/client";

export default function Blog({ params }: { params: { slug: string } }) {
  const page = demoData[params.slug] as {
    title: string;
    date: string;
    tags: string[];
    data: {
      slices: any[];
    };
  };
  return (
    <div>
      <ContentBody page={page} />
    </div>
  );
}

function ContentBody({
  page,
}: {
  page: {
    title: string;
    date: string;
    tags: string[];
    data: {
      slices: any[];
    };
  };
}) {
  return (
    <Bounded as="article">
      <div className="rounded-2xl border-2 border-slate-800 bg-slate-900 px-4 py-10 md:px-8 md:py-20">
        <Heading as="h1">{page.title}</Heading>
        <div className="flex gap-4 text-yellow-400">
          {page.tags.map((tag, index) => (
            <span key={index} className="text-xl font-bold">
              {tag}
            </span>
          ))}
        </div>
        <p className="mt-8 border-b border-slate-600 text-xl font-medium text-slate-300">
          {page.date}
        </p>
        <div className="prose prose-lg prose-invert mt-12 w-full max-w-none md:mt-20">
          <div>{page.data.slices}</div>
        </div>
      </div>
    </Bounded>
  );
}
