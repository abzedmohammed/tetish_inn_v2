import { MainLayout } from "../components/layout";
import { ErrorPage, Home, Profile } from "../pages";
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
                ],
            },
        ],
    },
];
