import { Routes, Route } from "react-router-dom";
import { PrivateRoute } from "./Components/auth/PrivateRouter";
import Admin from "./Components/DashBoard/Admin";
import Login from "./Components/LoginPage/Login";
import PostAdmin from "./Components/PostPage/PostAdmin";

function App() {
  return (
    <>
      <div className="bg-white">
        <Routes>
          <Route exact path="/" element={<Login />} />

          <Route
            exact
            path="body"
            element={
              <PrivateRoute>
                <Admin />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="post"
            element={
              <PrivateRoute>
                <PostAdmin />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
