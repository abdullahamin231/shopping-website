import { createBrowserRouter, RouterProvider, useRoutes } from "react-router-dom";
import App from "./App";
import Shop from "./Components/Shop";
import ErrorPage from "./Components/ErrorPage";

const Router = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
            errorElement: <ErrorPage />,
        },
        {
            path: "/shop",
            element: <Shop />
        },
        {
            path: "/home",
            element: <App />,
        }
    ]);

    return <RouterProvider router={router} />;
};

export default Router;