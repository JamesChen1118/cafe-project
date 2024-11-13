import { createBrowserRouter } from "react-router-dom";
import MainLayout from "@/components/Layout/layout";
import { Home, Login, Register, Map, Member, NotFound } from "@/pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "map",
        element: <Map />,
      },
      {
        path: "member",
        element: <Member />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
