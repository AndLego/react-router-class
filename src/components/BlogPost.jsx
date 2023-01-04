import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../utils/auth";
import { useAPI } from "../utils/blogAPI";
import EditForm from "./EditForm";

const BlogPost = () => {
  const [showEdit, setShowEdit] = React.useState(false);
  const { slug } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { blogData, deletePost, editPost } = useAPI();

  const blog = blogData.find((post) => post.slug === slug);

  const handleBack = () => {
    navigate("/blog");
  };

  const handleDelete = () => {
    deletePost(blog.id);
    navigate("/blog");
  };

  const handleEdit = () => {
    navigate(`/blog/${slug}/edit`)
  };

  //renderiza botones dependiendo de sus permisos en cuenta
  return (
    <>
      <h2>{blog.title}</h2>
      <button onClick={handleBack}>Back</button>
      <p>{blog.author}</p>
      <p>{blog.content}</p>

      {user?.role.write || user?.name === blog.author ? (
        <button onClick={handleEdit}>Edit</button>
      ) : null}

      {/* {showEdit && <EditForm post={blog}/>} */}

      {user?.role.delete || user?.name === blog.author ? (
        <button onClick={handleDelete}>Delete Post</button>
      ) : null}
    </>
  );
};

export default BlogPost;
