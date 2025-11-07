import { HomeLayout } from "../components/layout";
import { ErrorPage } from "../pages";
import { ForgotPassword, Login, Register, UpdatePassword } from "../pages/auth";

export const authRoutes = [
    {
        path: "auth",
        element: <HomeLayout />,
        errorElement: <ErrorPage />,
        children: [
            { path: "login", element: <Login /> },
            { path: "register", element: <Register /> },
            {
                path: "forgot-password",
                element: <ForgotPassword />,
            },
            {
                path: "update-password",
                element: <UpdatePassword />,
            },
        ],
    },
];
