import { HashRouter, Routes, Route } from "react-router-dom";
import {
  Menu,
  Home,
  ProfilePage,
  BlogPage,
  BlogPost,
  LogIn,
  LogOut,
} from "./components/index";
import "./App.css";
import { AuthProvider } from "./utils/auth";

function App() {
  return (
    <>
      <HashRouter>
        <AuthProvider>
          <Menu />

          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/blog" element={<BlogPage />}>
              <Route path=":slug" element={<BlogPost />} />
            </Route>

            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/logout" element={<LogOut />} />
            <Route path="*" element={<p>Not Found</p>} />
          </Routes>
        </AuthProvider>
      </HashRouter>
    </>
  );
}

export default App;
