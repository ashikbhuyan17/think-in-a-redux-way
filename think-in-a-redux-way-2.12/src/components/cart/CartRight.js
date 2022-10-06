import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decreaseQuantity, increaseQuantity } from '../../redux/cart/action';

const CartRight = () => {
    const dispatch = useDispatch()
    console.log("useSelector", useSelector((state) => state.cart));
    const cart = useSelector((state) => state.cart)

    const handleCountIncrease = (cart, id) => {
        dispatch(increaseQuantity({ cart, id }))
    }
    const handleCountDecrease = (cart, id) => {
        dispatch(decreaseQuantity({ cart, id }))
    }

    return (
        <div
            class="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-4 xxl:col-span-4"
        >
            <div
                class="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4"
            >
                {
                    cart.product1 && cart.product1Count ? <div class="flex justify-between border-b-2 mb-2">
                        <div class="text-lg py-2">
                            <p>{cart.product1.name}</p>
                        </div>
                        <div class="text-lg py-2">
                            <div
                                class="flex flex-row space-x-2 w-full items-center rounded-lg"
                            >
                                <button
                                    class="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center"
                                    onClick={() => handleCountDecrease(cart, cart.product1.id)}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M18 12H6"
                                        />
                                    </svg>
                                </button>
                                <p>{cart.product1Count}</p>
                                <button
                                    class="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center"
                                    onClick={() => handleCountIncrease(cart, cart.product1.id)}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div> : ""
                }

                {
                    cart.product2 && cart.product2Count ? <div class="flex justify-between border-b-2 mb-2">
                        <div class="text-lg py-2">
                            <p>{cart.product2.name}</p>
                        </div>
                        <div class="text-lg py-2">
                            <div
                                class="flex flex-row space-x-2 w-full items-center rounded-lg"
                            >
                                <button
                                    class="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center"
                                    onClick={() => handleCountDecrease(cart, cart.product2.id)}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M18 12H6"
                                        />
                                    </svg>
                                </button>
                                <p>{cart.product2Count}</p>
                                <button
                                    class="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center"
                                    onClick={() => handleCountIncrease(cart, cart.product2.id)}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div> : ""
                }

                {
                    cart.product3 && cart.product3Count ? <div class="flex justify-between border-b-2 mb-2">
                        <div class="text-lg py-2">
                            <p>{cart.product3.name}</p>
                        </div>
                        <div class="text-lg py-2">
                            <div
                                class="flex flex-row space-x-2 w-full items-center rounded-lg"
                            >
                                <button
                                    class="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center"
                                    onClick={() => handleCountDecrease(cart, cart.product3.id)}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M18 12H6"
                                        />
                                    </svg>
                                </button>
                                <p>{cart.product3Count}</p>
                                <button
                                    class="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center"
                                    onClick={() => handleCountIncrease(cart, cart.product3.id)}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div> : ""
                }

                <div
                    class="flex justify-center items-center text-center"
                >
                    <div class="text-xl font-semibold">
                        <p>Total Item</p>
                        <p class="text-5xl">{cart.item}</p>
                    </div>
                </div>
            </div>
            <div
                class="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4"
            >
                <div
                    class="flex justify-center items-center text-center"
                >
                    <div class="text-xl font-semibold">
                        <p>Total Price</p>
                        <p class="text-5xl">{cart.price}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartRight;