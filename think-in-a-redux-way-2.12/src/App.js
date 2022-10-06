import CartLeft from "./components/cart/CartLeft";
import CartRight from "./components/cart/CartRight";
import Counter from "./components/Counter";
import { Provider } from "react-redux";
import store from "./redux/store";

export default function App() {
    return (
        <Provider store={store}>
            <div class="bg-gray-50 h-full md:h-screen">
                <div class="grid place-items-center">
                    <h1
                        class="text-gray-900 font-bold text-3xl p-10 underline decoration-purple-500 decoration-4 underline-offset-8 mb-4"
                    >
                        Shopping Cart
                    </h1>
                </div>
                <div class="grid grid-cols-12 gap-6">
                    <CartLeft />
                    <CartRight />
                </div>
            </div>
        </Provider>
    );
}
