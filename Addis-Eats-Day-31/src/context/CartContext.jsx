import {
    createContext,
    useContext
} from "react";


const CartContext =
    createContext(null);


export function CartProvider({
    children
}) {

    return (
        <CartContext.Provider
            value={{}}
        >
            {children}
        </CartContext.Provider>
    );
}


export function useCart() {

    const context =
        useContext(CartContext);


    if (context === null) {

        throw new Error(
            "useCart must be used inside a CartProvider"
        );

    }


    return context;
}