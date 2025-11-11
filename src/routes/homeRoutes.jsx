import { HomeLayout } from "../components/layout";
import { CartList, CheckOut, ErrorPage, Home } from "../pages";

export const homeRoutes = [
    {
        path: "",
        element: <HomeLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: "snacks",
                element: <Home />,
            },
            {
                path: "cart",
                element: <CartList />,
            },
            {
                path: "orders/confirm",
                element: <CheckOut />,
            },
        ],
    },
];
