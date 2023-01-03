import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const AuthContext = React.createContext();

const roles = {
  admin: {
    write: true,
    read: true,
    delete: true,
  },
  editor: {
    write: true,
    read: true,
    delete: false,
  },
  visitor: {
    write: false,
    read: true,
    delete: false,
  },
};

const users = [
  {
    name: "Andres",
    role: roles.admin,
  },
  {
    name: "Felipe",
    role: roles.editor,
  },
];

function AuthProvider({ children }) {
  const [user, setUser] = React.useState(null);
  const navigate = useNavigate();

  const login = (username) => {
    //revisar si el usuario existe o lo crea como visitante
    const rol = users.find((usu) => usu.name === username);
    rol !== undefined
      ? setUser(rol)
      : setUser({ name: username, role: roles.visitor });
    navigate("/profile");
  };

  const logout = () => {
    setUser(null);
    navigate("/");
  };

  const auth = { user, login, logout };

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

//hook para evitar importar context en cada pagina que se necesite
function useAuth() {
  const auth = React.useContext(AuthContext);
  return auth;
}

//funcion que redirecciona al login  si no hay usuario registrado
function AuthRoute(props) {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return props.children;
}

export { AuthProvider, useAuth, AuthRoute, users };
