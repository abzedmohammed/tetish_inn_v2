import React from "react";
import { useDispatch } from "react-redux";
import { HomeCheckout, SnackCard } from "./components";
import { CardSkeleton } from "abzed-utils";

export default function Home() {
    const dispatch = useDispatch();

    const isLoading = true
    const sweetSnacks = [];
    const saltySnacks = [];
    const hotSnacks = [];
    const snacks = [];
    const handleSnackDetails = () => {};

    return (
        <div className="container-fluid mx-10 mt-6 mb-14">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {isLoading ? (
                    <>
                        <CardSkeleton width={'100%'} height={'21rem'} />
                        <CardSkeleton width={'100%'} height={'21rem'} />
                        <CardSkeleton width={'100%'} height={'21rem'} />
                    </>
                ) : (
                    <div className="col-span-1 md:col-span-2">
                        <h2 className="text-3xl text-amber-800 font-extrabold mb-7 w-fit">
                            <span className="border-b-4 border-amber-700">
                                Sweet
                            </span>{" "}
                            Snacks
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                            {sweetSnacks.length === 0 ? (
                                <p>No sweet snacks available</p>
                            ) : (
                                sweetSnacks.map((snack) => {
                                    return (
                                        <SnackCard
                                            key={snack.snkId}
                                            snack={snack}
                                            dispatch={dispatch}
                                            snacks={snacks}
                                            handleSnackDetails={
                                                handleSnackDetails
                                            }
                                        />
                                    );
                                })
                            )}
                        </div>

                        <h2 className="text-3xl text-amber-800 font-extrabold mb-7 mt-9 w-fit">
                            <span className="border-b-4 border-amber-700">
                                Salty
                            </span>{" "}
                            Snacks
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                            {saltySnacks.length === 0 ? (
                                <p>No salty snacks available</p>
                            ) : (
                                saltySnacks.map((snack) => {
                                    return (
                                        <SnackCard
                                            key={snack.snkId}
                                            snack={snack}
                                            dispatch={dispatch}
                                            snacks={snacks}
                                            handleSnackDetails={
                                                handleSnackDetails
                                            }
                                        />
                                    );
                                })
                            )}
                        </div>

                        <h2 className="text-3xl text-amber-800 font-extrabold mb-7 w-fit mt-9">
                            <span className="border-b-4 border-amber-700">
                                Hot
                            </span>{" "}
                            Snacks
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                            {hotSnacks.length === 0 ? (
                                <p>No hot snacks available</p>
                            ) : (
                                hotSnacks.map((snack) => {
                                    return (
                                        <SnackCard
                                            key={snack.snkId}
                                            snack={snack}
                                            dispatch={dispatch}
                                            snacks={snacks}
                                            handleSnackDetails={
                                                handleSnackDetails
                                            }
                                        />
                                    );
                                })
                            )}
                        </div>
                    </div>
                )}

                <div className="hidden xl:inline xl:fixed xl:right-20 xl:w-96">
                    <h3 className="text-2xl text-amber-900 border-b-4 font-semibold border-amber-400 text-left w-fit">
                        Cart Item(s)
                    </h3>
                    <HomeCheckout />
                </div>
            </div>
        </div>
    );
}
