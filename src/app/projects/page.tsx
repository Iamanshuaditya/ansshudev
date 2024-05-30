"use client";
import React from "react";
import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import ContentList from "./Contentlist";

function BlogPostIndex() {
  return (
    <>
      <Bounded>
        <Heading size="xl" className="mb-8">
          Projects
        </Heading>
        <div className="prose prose-xl prose-invert mb-10">
          These are some Best projects i worked on
        </div>

        <ContentList />
      </Bounded>
    </>
  );
}

export default BlogPostIndex;
