import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../utils/auth.jsx";
import { useAPI } from "../utils/blogAPI.jsx";
import CreatePost from "./CreatePost.jsx";

const BlogPage = () => {
  const [update, setUpdate] = React.useState(false);
  const { user } = useAuth();
  const { blogData } = useAPI();

  React.useEffect(() => {}, [update]);

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

      {user?.role.write && (
        <CreatePost user={user.name} setUpdate={setUpdate} update={update} />
      )}
    </>
  );
};

export default BlogPage;
