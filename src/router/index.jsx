
import { createBrowserRouter } from "react-router-dom";
import { Home, Login, Register, Map, Member, NotFound } from "@/pages";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/map',
    element: <Map />
  },
  {
    path: '/member',
    element: <Member />
  },
  {
    path: '*',
    element: <NotFound />
  },
])

export default router