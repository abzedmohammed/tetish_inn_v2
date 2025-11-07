import React from "react";

export default function SnackCard({
    snack,
    handleSnackDetails,
    snacks,
    dispatch,
    removeFromCart,
    addToCart,
}) {
    return (
        <div key={snack.snkId} className="w-full max-w-sm bg-white">
            <div className="flex justify-center items-center">
                <img
                    className="border-4 rounded-lg border-amber-500 w-full h-48 object-cover"
                    src={snack.snkImageUrl}
                    alt="product"
                />
            </div>

            <div className="px-5 p-5 rounded-lg border border-amber-500">
                <div className="flex items-center justify-between pb-3">
                    <h5 className="text-xl text-amber-900 font-bold tracking-tight truncate">
                        {snack.snkName}
                    </h5>
                    <span className="text-xl w-32 font-bold text-amber-900 dark:text-white">
                        KES {snack.snkPrice}
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
                        snacks={snacks}
                        dispatch={dispatch}
                        snack={snack}
                        removeFromCart={removeFromCart}
                        addToCart={addToCart}
                    />
                </div>
            </div>
        </div>
    );
}

const SnackCartComponent = ({
    snacks,
    dispatch,
    snack,
    removeFromCart,
    addToCart,
}) => {
    return (
        <>
            {snacks.cart.find((item) => item.snkId === snack.snkId) ? (
                <button
                    onClick={() => dispatch(removeFromCart(snack.snkId))}
                    className="text-amber-900 bg-amber-300 hover:bg-amber-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                    Remove
                </button>
            ) : (
                <button
                    onClick={() => dispatch(addToCart(snack))}
                    className="text-amber-900 bg-amber-300 hover:bg-amber-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                    Add to cart
                </button>
            )}
        </>
    );
};
