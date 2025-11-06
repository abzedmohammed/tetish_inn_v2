import { Link } from "react-router-dom";
import { logo } from "../../utils";
import { CartSvg, NavToggleSvg } from "../../svgs";
import { defaultDropdownOverlayStyle, PrimaryDropdown } from "abzed-utils";
import { navAuthItem, navCartItemsFn } from "../../items_list/itemList";
import { useSelector } from "react-redux";
import { Badge } from "antd";

export default function MainNavbar({ component }) {
    const { isActive } = useSelector((state) => state.auth);

    const items = {
        cart: [],
        totalPrice: 0,
    };

    const cartItems = navCartItemsFn({
        items,
    });
    const authItems = navAuthItem();
    const loginItems = [];

    let navItem = isActive ? loginItems : authItems;

    return (
        <nav className="main_navbar">
            <div className="fx_item_center gap-2">
                <ToggleSideBarComponent navItem={navItem} />
                <Link to="/" className="fx_item_center gap-1">
                    <img
                        src={logo}
                        className="w-24 h-24 rounded-full"
                        alt="logo"
                    />
                    <span className="text-amber-800 text-3xl font-extrabold border-b-4 border-amber-600 hidden md:block">
                        TETISH-INN
                    </span>
                </Link>
            </div>

            <div className="hidden lg:flex">
                <div className="fx_item_center">
                    <Link
                        className="mx-2 p-3 rounded-lg font-bold text-lg text-amber-900 hover:bg-amber-200"
                        to="/"
                    >
                        Home
                    </Link>

                    <Link
                        className="mx-2 p-3 rounded-lg font-bold text-lg text-amber-900 hover:bg-amber-200"
                        to="/snacks"
                    >
                        Snacks
                    </Link>
                </div>
            </div>

            <div className="fx_item_center gap-2">
                <PrimaryDropdown
                    placement="bottomRight"
                    overlayClassName="cart_dropdown"
                    items={cartItems}
                    triggerButton={
                        <Badge count={5} color="#FCD34D">
                            <CartSvg />
                        </Badge>
                    }
                    overlayStyle={defaultDropdownOverlayStyle}
                />
                {component}
            </div>
        </nav>
    );
}

const ToggleSideBarComponent = ({ navItem }) => (
    <div className="flex md:hidden">
        <PrimaryDropdown
            items={navItem}
            triggerButton={
                <button type="button">
                    <NavToggleSvg />
                </button>
            }
            overlayStyle={defaultDropdownOverlayStyle}
        />
    </div>
);
