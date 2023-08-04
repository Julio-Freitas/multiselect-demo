import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import { Produtos, Home, ProdutoDetail } from "../components/pages";

import Root from "./root";
import ErrorBoundary from "./error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorBoundary />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/produtos", element: <Produtos /> },
      { path: "produto/:id", element: <ProdutoDetail /> },
      { path: "oldPath", element: <Navigate to="/" /> },
    ],
  },
]);

const  Router = () => <RouterProvider router={router} />

export default Router;
