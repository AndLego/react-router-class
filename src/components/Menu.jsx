import { NavLink } from "react-router-dom";
import { useAuth } from "../utils/auth";
import { routes } from "./routes";

const Menu = () => {
  const { user } = useAuth();

  return (
    <nav>
      <ul>
        {routes.map((ruta) => {
          if (ruta.publicOnly && user) return null;
          if (ruta.private && !user) return null;

          return (
            <li key={ruta.id}>
              <NavLink
                key={ruta.id}
                to={ruta.to}
                style={({ isActive }) => ({
                  color: isActive ? "red" : "blue",
                })}
              >
                {ruta.text}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Menu;
