import { createBrowserRouter } from "react-router-dom";
import MainLayout from "@/components/Layout/layout";
import { Home, Member, NotFound } from "@/pages";

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
    ],
  },
]);

export default router;
