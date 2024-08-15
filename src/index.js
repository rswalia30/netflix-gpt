import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Login from "./components/Login";
import Browse from "./components/Browse";
import Error from "./components/Error";

const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="" element={<App />} errorElement={<Error />}>
        <Route path="/" element={<Login />} />

        {/* Protected Route */}
        <Route path="/browse" element={<Browse />} />
      </Route>
    </>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>

  <RouterProvider router={appRouter} />
);
