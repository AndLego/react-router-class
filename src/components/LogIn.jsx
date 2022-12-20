import React from "react";
import { useAuth } from "../utils/auth";

const LogIn = () => {
  const username = React.useRef("");
  const { login } = useAuth();

  const handleForm = (e) => {
    e.preventDefault();
    login({username: username.current.value});
  };

  return (
    <>
      <h1>Login</h1>

      <form action="" onSubmit={handleForm}>
        <label htmlFor="">Username</label>
        <input type="text" ref={username} />
        <button>Log In</button>
      </form>
    </>
  );
};

export default LogIn;
