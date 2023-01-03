import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../utils/auth";
import { useAPI } from "../utils/blogAPI";

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { blogData, deletePost } = useAPI();

  const blog = blogData.find((post) => post.slug === slug);

  const handleBack = () => {
    navigate("/blog");
  };

  const handleDelete = () => {
    deletePost(blog.id)
  }

  //renderiza botones dependiendo de sus permisos en cuenta
  return (
    <>
      <h2>{blog.title}</h2>
      <button onClick={handleBack}>Back</button>
      <p>{blog.author}</p>
      <p>{blog.content}</p>
      {user?.role.write || user?.name === blog.author  ? <button>Edit Post</button> : null}
      {user?.role.delete || user?.name === blog.author ?  <button onClick={handleDelete}>Delete Post</button> : null}   
    </>
  );
};

export default BlogPost;
