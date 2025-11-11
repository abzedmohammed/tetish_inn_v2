import { formatMoney } from "abzed-utils";
import React from "react";
import { useSelector } from "react-redux";
import { Cart } from "./";
import { Link, useLocation } from "react-router-dom";
import { Avatar } from "antd";
import { AntDesignOutlined } from "@ant-design/icons";
import { CartSvg } from "../../svgs";

export default function HomeCheckout() {
    const { cart, totalPrice } = useSelector((state) => state.cart);
    const pathname = useLocation().pathname;

    return (
        <div className="w-auto">
            <div className="p-4">
                <div className="flex flex-col justify-center">
                    {cart.slice(0, 3).map((item) => {
                        return (
                            <Cart
                                key={item.snkId}
                                id={item.snkId}
                                name={item.snkName}
                                price={item.snkPrice}
                                subtotal={item.subtotal}
                                image={item.snkImageUrl}
                                quantity={item.quantity}
                            />
                        );
                    })}
                </div>

                {(pathname == "/" || pathname == "/snacks") &&
                cart.length > 4 ? (
                    <Avatar.Group
                        size="large"
                        max={{
                            count: 1,
                            style: {
                                color: "#f56a00",
                                backgroundColor: "#fde3cf",
                            },
                        }}
                    >
                        {cart.slice(3).map((_, index) => (
                            <Avatar
                                key={index}
                                style={{ backgroundColor: "#b45309" }}
                                icon={<CartSvg className="h-6 w-6" />}
                            />
                        ))}
                    </Avatar.Group>
                ) : null}
            </div>

            <div className="flex flex-row justify-between items-center border-spacing-2 bg-amber-200 p-4 rounded-lg w-full">
                <h2 className="text-xl text-amber-900 font-medium">TOTAL</h2>
                <h2 className="text-xl text-amber-900 font-bold">
                    {formatMoney(totalPrice)}
                </h2>
            </div>

            {(pathname == "/" || pathname == "/snacks") && cart.length > 0 ? (
                <div className="mt-2">
                    <Link
                        className="w-full fx_center h-10 bg-amber-700 text-white"
                        type="button"
                        to="/cart"
                    >
                        View Cart
                    </Link>
                </div>
            ) : null}
        </div>
    );
}
