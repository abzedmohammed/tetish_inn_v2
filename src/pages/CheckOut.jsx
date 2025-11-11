import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { formatMoney, useDynamicMutation } from "abzed-utils";
import { saveOrder } from "../actions/homeActions";
import { notifyError } from "../utils";
import { emptyCart } from "../features/cart/cartSlice";

export default function CheckOut() {

    const { isActive, user } = useSelector((state) => state.auth);
    const { cart, totalPrice } = useSelector((state) => state.cart);

    const saveMutation = useDynamicMutation({
        mutationFn: saveOrder.mutationFn,
        onError: (error) => notifyError(error),
        onSuccess: ({ response, dispatch }) => {
            saveOrder.onSuccess({ response, dispatch });
            dispatch(emptyCart());
            setorder(true);
        },
    });

    const [message, setmessage] = useState("");
    const [order, setorder] = useState(false);

    const submitOrder = () => {
        let cartData = cart.map((item) => {
            return {
                ordAmount: item.snkPrice,
                ordTotal: item.subtotal,
                snackId: item.snkId,
            };
        });

        saveMutation.mutate({
            orders: cartData,
        });
    };

    useEffect(() => {
        if (totalPrice > user?.balance) {
            setmessage("Account balance is not enough to make this order");
        } else {
            setmessage("");
        }
    }, [totalPrice, user?.balance]);

    return (
        <div className="container mx-auto mb-12 flex justify-center items-center flex-col mt-20">
            <div className="card shadow-lg shadow-amber-400 w-fit p-5">
                {!isActive && (
                    <>
                        <p className="my-6 text-amber-800 text-2xl text-center w-fit">
                            Cannot proceed without logging in
                        </p>
                        <div className="fx_col">
                            <Link
                                to="/auth/login"
                                className="fx_center h-7 text-center mb-4  text-amber-900 bg-amber-400 hover:bg-amber-700 hover:text-white"
                            >
                                Login
                            </Link>
                            <Link
                                to="/snacks"
                                className="fx_center h-7 text-center text-amber-900 bg-amber-400 hover:bg-amber-700 hover:text-white"
                            >
                                Back to snacks
                            </Link>
                        </div>
                    </>
                )}

                {isActive && message ? (
                    <>
                        <p className="my-6 text-amber-800 text-2xl text-center">
                            {message}
                        </p>
                        <Link
                            to="/cart"
                            className="fx_center h-8 text-amber-900 bg-amber-400 hover:bg-amber-700 hover:text-white"
                        >
                            Edit Cart
                        </Link>
                    </>
                ) : null}

                {isActive && cart?.length && !message && (
                    <>
                        <h1 className="text-center text-3xl font-bold text-amber-700 underline">
                            CONFIRM YOUR ORDER
                        </h1>
                        <p className="mt-4 text-amber-800 text-sm">
                            By clicking confirm you agree to the price below
                            being deducted from your account!
                        </p>

                        <div className="flex justify-center mt-4">
                            <div>
                                <div className="w-64 flex flex-row justify-between p-2">
                                    <h2 className="text-lg font-bold text-amber-800">
                                        Snacks:
                                    </h2>
                                    <h2 className="text-xl font-bold text-amber-800">
                                        {cart?.length || 0}
                                    </h2>
                                </div>

                                <hr className="border-b-2 border-amber-700 w-full" />

                                <div className="w-72 flex flex-row justify-between p-2">
                                    <h2 className="text-3xl font-bold text-amber-900">
                                        Total
                                    </h2>
                                    <h2 className="text-3xl font-bold text-amber-900">
                                        {formatMoney(totalPrice)}
                                    </h2>
                                </div>

                                <div className="w-80 flex flex-row justify-between p-2">
                                    <h2 className="text-xl font-bold text-amber-900">
                                        Your Wallet
                                    </h2>
                                    <h2 className="text-xl font-bold text-amber-900">
                                        {formatMoney(user?.balance)}
                                    </h2>
                                </div>
                            </div>
                        </div>

                        <hr className="border-b-2 border-amber-700" />

                        <div className="flex justify-center">
                            <div className="flex flex-row justify-between mt-4">
                                <Link
                                    to="/cart"
                                    className="p-1 text-white bg-amber-900 btn-sm mx-2 hover:bg-amber-400 hover:text-amber-900"
                                    type="button"
                                >
                                    Edit Cart
                                </Link>
                                <button
                                    disabled={saveMutation.isPending}
                                    onClick={() => submitOrder()}
                                    className="p-1 text-white bg-amber-500 btn-sm mx-2 hover:bg-amber-200 hover:text-amber-900"
                                    type="button"
                                >
                                    {saveMutation.isPending ? 'Processing...' : 'Confirm'}
                                </button>
                            </div>
                        </div>
                    </>
                )}
                {isActive && order ? (
                    <>
                        <div className="flex justify-center flex-col mx-auto">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-52 h-52 text-amber-600 text-center ml-auto mr-auto"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            <p className="mt-4 text-amber-800 text-2xl text-center">
                                Your order has been made. Thank you for shopping
                                with us
                            </p>
                            <Link
                                to="/snacks"
                                className="fx_center h-7 text-center text-amber-900 bg-amber-400 hover:bg-amber-700 hover:text-white"
                            >
                                Back to snacks page
                            </Link>
                        </div>
                    </>
                ) : null}
            </div>
        </div>
    );
}
