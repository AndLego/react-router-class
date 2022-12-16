import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { blogData } from "../utils/blogData";

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const blog = blogData.find((post) => post.slug === slug);

  const handleBack = () => {
    navigate("/blog");
  };

  return (
    <>
      <h2>{blog.title}</h2>
      <button onClick={handleBack}>Back</button>
      <p>{blog.author}</p>
      <p>{blog.content}</p>
    </>
  );
};

export default BlogPost;
