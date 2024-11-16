import { Routes, Route, Navigate } from "react-router-dom";
import { useLocalStorage } from "@uidotdev/usehooks";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";

export const config = {
  backendEndpoint: "https://blogging-web-app-bqfz.onrender.com/v1",
};

function App() {
  const [token] = useLocalStorage("token", null);

  const ProtectRoute = ({ children }) => {
    if (!token) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectRoute>
            <Home />
          </ProtectRoute>
        }
      ></Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
