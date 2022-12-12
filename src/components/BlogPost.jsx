import React from "react";
import { useParams } from "react-router-dom";
import { blogData } from "../utils/blogData";

const BlogPost = () => {
  const { slug } = useParams();

  const blog = blogData.find((post) => post.slug === slug);

  return (
    <>
      <h2>{blog.title}</h2>
      <p>{blog.author}</p>
      <p>{blog.content}</p>
    </>
  );
};

export default BlogPost;
