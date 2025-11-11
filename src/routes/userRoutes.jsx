import { MainLayout } from "../components/layout";
import { CartList, CheckOut, ErrorPage, Home, Profile } from "../pages";
import ProtectedRoute from "../ProtectedRoute";

export const userRoutes = [
    {
        path: "",
        element: <ProtectedRoute />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "",
                element: <MainLayout />,
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
                        path: "profile",
                        element: <Profile />,
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
        ],
    },
];
