import { Link, Outlet } from "react-router-dom";
import { MainNavbar } from "../navigation";

export default function HomeLayout() {
    return (
        <>
            <MainNavbar component={<AuthNavComponent />} />
            <Outlet />
        </>
    );
}

const AuthNavComponent = () => (
    <div className="hidden md:flex">
        <div className="fx_item_center">
            <Link
                className="mx-2 p-3 rounded-lg font-bold text-lg text-amber-900 hover:bg-amber-200"
                to="/auth/login"
            >
                Login
            </Link>

            <Link
                className="mx-2 p-3 rounded-lg font-bold text-lg text-amber-900 hover:bg-amber-200"
                to="/auth/register"
            >
                Register
            </Link>
        </div>
    </div>
);
