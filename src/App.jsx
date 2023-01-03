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
import { AuthProvider, AuthRoute } from "./utils/auth";
import { BlogAPIProvider } from "./utils/blogAPI";

function App() {
  return (
    <>
      <HashRouter>
        <AuthProvider>
          <BlogAPIProvider>
            <Menu />

            <Routes>
              <Route path="/" element={<Home />} />

              <Route path="/blog" element={<BlogPage />}>
                <Route path=":slug" element={<BlogPost />} />
              </Route>

              {/* protegiendo la ruta profile */}
              <Route
                path="/profile"
                element={
                  <AuthRoute>
                    <ProfilePage />
                  </AuthRoute>
                }
              />
              <Route path="/login" element={<LogIn />} />

              <Route
                path="/logout"
                element={
                  <AuthRoute>
                    <LogOut />
                  </AuthRoute>
                }
              />

              <Route path="*" element={<p>Not Found</p>} />
            </Routes>
          </BlogAPIProvider>
        </AuthProvider>
      </HashRouter>
    </>
  );
}

export default App;
