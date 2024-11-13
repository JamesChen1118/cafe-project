import { createBrowserRouter } from "react-router-dom";
import MainLayout from "@/components/Layout/layout";
import { Home, Register, Map, Member, NotFound } from "@/pages";

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
        path: "member",
        element: <Member />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
