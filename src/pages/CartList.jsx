import React from 'react'
import { useSelector } from 'react-redux'
import { Cart } from './components';
import { formatMoney } from 'abzed-utils';
import { Link } from 'react-router-dom';

export default function CartList() {
    const { cart, totalPrice } = useSelector((state) => state.cart);

    return (
        <div className="mx-auto my-6 w-4/5">
                <div className="">
                    <div className="flex justify-center">
                        <h3 className="text-3xl text-amber-900 border-b-4 font-bold mb-7 border-amber-400 text-center w-fit">
                            Total Orders
                        </h3>
                    </div>
                    {cart.map((item) => {
                        return (
                            <Cart
                                key={item.snkId}
                                id={item.snkId}
                                subtotal={item.subtotal}
                                name={item.snkName}
                                price={item.snkPrice}
                                image={item.snkImageUrl}
                                quantity={item.quantity}
                            />
                        );
                    })}
                </div>

                <div className="flex flex-row justify-between items-center border-spacing-2 bg-amber-200 p-4 rounded-lg md:w-1/3">
                    <h2 className="text-xl text-amber-900 font-medium">
                        TOTAL
                    </h2>
                    <h2 className="text-xl text-amber-900 font-bold">
                        {formatMoney(totalPrice)}
                    </h2>
                </div>

                {cart.length > 0 ? (
                    <div className="mt-2">
                        <Link
                            className="fx_center h-10 bg-amber-700 text-white btn-sm w-full md:w-1/3"
                            type="button"
                            to="/orders/confirm"
                        >
                            Proceed to checkout
                        </Link>
                    </div>
                ) : null}
            </div>
    )
}
