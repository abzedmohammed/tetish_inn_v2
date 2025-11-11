import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../features/cart/cartSlice";
import { formatMoney } from "abzed-utils";

export default function SnackCard({ snack, handleSnackDetails }) {
    const dispatch = useDispatch();

    const { cart } = useSelector((state) => state.cart);

    const isItemInCart = cart.some((item) => item.snkId === snack.snkId);

    const removeItemFn = () => {
        dispatch(removeFromCart(snack.snkId));
    };

    const addItemFn = () => {
        dispatch(addToCart(snack));
    };

    return (
        <div className="w-full fx_grow bg-white">
            <div className="flex justify-center items-center">
                <img
                    className="border-4 rounded-lg border-amber-500 w-full h-48 object-cover"
                    src={snack.snkImageUrl}
                    alt="product"
                />
            </div>

            <div className="px-5 p-5 rounded-lg border border-amber-500">
                <div className="fx_btwn_center pb-3">
                    <h5 className="text-xl text-amber-900 font-bold tracking-tight truncate">
                        {snack.snkName}
                    </h5>
                    <span className="text-xl font-bold text-amber-900">
                        {formatMoney(snack.snkPrice)}
                    </span>
                </div>

                <div className="flex flex-row justify-between items-center">
                    <button
                        type="button"
                        onClick={handleSnackDetails}
                        className="text-white bg-amber-700 hover:bg-amber-800 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800"
                    >
                        View
                    </button>

                    <SnackCartComponent
                        isItemInCart={isItemInCart}
                        removeFromCart={removeItemFn}
                        addToCart={addItemFn}
                    />
                </div>
            </div>
        </div>
    );
}

const SnackCartComponent = ({ isItemInCart, removeFromCart, addToCart }) => {
    return (
        <>
            {isItemInCart ? (
                <button
                    onClick={removeFromCart}
                    className="text-amber-900 bg-amber-300 hover:bg-amber-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                    Remove
                </button>
            ) : (
                <button
                    onClick={addToCart}
                    className="text-amber-900 bg-amber-300 hover:bg-amber-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                    Add to cart
                </button>
            )}
        </>
    );
};
