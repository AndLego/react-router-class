import React from "react";
import { Link } from "react-router-dom";
import { blogData } from "../utils/blogData.js";

const BlogPage = () => {
  return (
    <>
      <h1>BlogPage</h1>
      <ul>
        {blogData.map((post, i) => (
          <li key={i}>
            <Link to={`/blog/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default BlogPage;
