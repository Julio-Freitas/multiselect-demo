import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "../components/pages";

import Root from "./root";
import ErrorBoundary from "./error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorBoundary />,
    children: [
      { path: "/", element: <Home /> },
    ],
  },
]);

const Router = () => <RouterProvider router={router} />

export default Router;
