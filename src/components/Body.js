import Browse from "./Browse";
import Login from "./Login";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const Body = () => {
  const appRouter = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Login />} />
        <Route path="/browse" element={<Browse />} />
      </>
    )
  );

  return <RouterProvider router={appRouter} />;
};

export default Body;
