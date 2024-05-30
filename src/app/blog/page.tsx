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
          Blogs
        </Heading>
        <div className="prose prose-xl prose-invert mb-10">
          I write about what Ive learned so others can benefit.
        </div>

        <ContentList />
      </Bounded>
    </>
  );
}

export default BlogPostIndex;
