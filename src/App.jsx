import { HashRouter, Routes, Route } from "react-router-dom";
import {
  Menu,
  Home,
  ProfilePage,
  BlogPage,
  BlogPost,
} from "./components/index";
import "./App.css";

function App() {
  return (
    <>
      <HashRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/blog" element={<BlogPage />}>
            <Route path=":slug" element={<BlogPost />} />
          </Route>

          <Route path="/profile" element={<ProfilePage />} />
          <Route path="*" element={<p>Not Found</p>} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
