import { createBrowserRouter } from "react-router-dom";
import MainLayout from "@/components/Layout/index";
import { Home, Member, NotFound } from "@/pages";
import Map from "@/pages/Map/index";

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
    ],
  },
]);

export default router;
