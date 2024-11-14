import { RouterProvider } from "react-router-dom";
import router from "@/router";
import { useState } from "react";
import Loading from "@/components/Loading/loading";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <Loading />}
      <RouterProvider router={router} />
    </>
  );
};

export default App;
