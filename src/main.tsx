import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from "./Pages/SingUp.tsx";
import Login from "./Pages/Login.tsx";
import Content from "./Pages/Content/Content.tsx";
import { Fav } from "./Pages/favourite/fav.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "sign-up",
    element: <SignUp />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "home",
    element: <Content />,
  },
  {
    path: "fav",
    element: <Fav />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
