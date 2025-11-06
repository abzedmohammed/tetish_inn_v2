import { LogoutOutlined, SettingOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

export const avatarItemsFn = (handleLogout) => [
    {
        label: (
            <Link to="/profile" className="fx_item_center gap-2.5">
                <SettingOutlined />
                <span className="avatar_dropdown_text">Profile</span>
            </Link>
        ),
        key: "1",
    },
    {
        label: (
            <div
                type="button"
                onClick={handleLogout}
                className="fx_item_center gap-2.5 pointer"
            >
                <LogoutOutlined />
                <span className="avatar_dropdown_text">Log out</span>
            </div>
        ),
        key: "2",
    },
];

export const navCartItemsFn = ({ items }) => [
    {
        label: (
            <div className="border-4 border-amber-700 p-2">
                <div className="fx_col gap-2">
                    <span className="font-bold text-lg text-amber-900">
                        {items.cart.length} Item(s)
                    </span>
                    <span className="text-amber-600 font-bold">
                        Total: KES {items.totalPrice}
                    </span>
                    <div className="btn bg-amber-700 btn-md px-6 py-2 rounded-lg hover:bg-amber-300">
                        <Link
                            className="text-white! hover:text-amber-900!  hover:font-bold!"
                            to="/cart"
                        >
                            View cart
                        </Link>
                    </div>
                </div>
            </div>
        ),
        key: "1",
    },
];

export const navAuthItem = () => [
    {
        key: "1",
        label: (
            <div className="fx_col">
                <Link
                    className="mx-2 p-3 rounded-lg font-bold text-lg text-amber-900! hover:bg-amber-200"
                    to="/auth/login"
                >
                    Login
                </Link>

                <Link
                    className="mx-2 p-3 rounded-lg font-bold text-lg text-amber-900! hover:bg-amber-200"
                    to="/auth/register"
                >
                    Register
                </Link>
            </div>
        ),
    },
];
