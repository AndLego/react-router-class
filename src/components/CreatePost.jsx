import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useAPI } from "../utils/blogAPI";

const CreatePost = ({ user, update, setUpdate }) => {
  const { addPost } = useAPI();
  const titleRef = React.useRef(null);
  const contentRef = React.useRef(null);

  const handleSubmit = (e) => {
    // blogData
    e.preventDefault();

    const title = titleRef.current.value;
    const slug = title
      .replace(/[^\w\s]/gi, "")
      .split(" ")
      .join("-");
    const content = contentRef.current.value;

    addPost(title, slug, content, user, uuidv4());

    setUpdate(!update);
  };

  return (
    <form action="" autoComplete="off" onSubmit={handleSubmit}>
      <label htmlFor="title">
        Title:
        <input type="text" id="title" ref={titleRef} />
      </label>

      <label htmlFor="content">
        Content:
        <input type="text" id="content" ref={contentRef} />
      </label>
      <button>Create Post</button>
    </form>
  );
};

export default CreatePost;
