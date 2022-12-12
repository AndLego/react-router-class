import { NavLink } from "react-router-dom";
import { routes } from "./routes";

const Menu = () => {
  return (
    <nav>
      <ul>
        {routes.map((ruta) => (
          <li key={ruta.id}>
            <NavLink
              key={ruta.id}
              to={ruta.to}
              style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
            >
              {ruta.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
