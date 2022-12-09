import { HashRouter, Routes, Route } from "react-router-dom";
import { Menu, Home, ProfilePage, BlogPage } from "./components/index";
import "./App.css";

function App() {
  return (
    <>
      <HashRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="*" element={<p>Not Found</p>} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
