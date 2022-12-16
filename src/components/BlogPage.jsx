import React from "react";
import { Link, Outlet } from "react-router-dom";
import { blogData } from "../utils/blogData.js";

const BlogPage = () => {
  return (
    <>
      <h1>BlogPage</h1>

      <Outlet />

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
