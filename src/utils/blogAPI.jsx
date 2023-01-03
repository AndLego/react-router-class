import React from "react";

const APIContext = React.createContext();

const BlogAPIProvider = ({ children }) => {
  const blogData = [
    {
      title: "¿Que es React?",
      slug: "que-es-react",
      content: "React es el mejor Framework de JavaScript, que lindo React",
      author: "Andrés Rodríguez",
    },
    {
      title: "¿Que es Angular?",
      slug: "que-es-angular",
      content: "Angular esta bien, que lindo React XD",
      author: "Carlos Rodríguez",
    },
    {
      title: "¿Que es Svelte?",
      slug: "que-es-svelte",
      content: "Svelte es el mejor Framework de JavaScript, que lindo Svelte",
      author: "Felipe Rodríguez",
    },
  ];

  const addPost = (title, slug, content, author, id) => {
    const existingPost = blogData.find(post => post.slug === slug)
    const newPost = {
      title: title,
      slug: slug,
      content: content,
      author: author,
      id: id,
    };
    
    if(existingPost){
      console.log("ya existe un post con ese nombre")
      return
    }

    blogData.push(newPost);
    console.log("post created");
  };

  const deletePost = (id) => {
    const post = blogData.findIndex((post) => post.id === id);
    if (post !== -1) {
      blogData.splice(post, 1);
    }
    console.log("post deleted");
  };

  const data = { blogData, addPost, deletePost };

  return <APIContext.Provider value={data}>{children}</APIContext.Provider>;
};

function useAPI() {
  const data = React.useContext(APIContext);
  return data;
}

export { BlogAPIProvider, useAPI };
