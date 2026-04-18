import { createContext, useState } from "react";
import { Children } from "react";
export const CartContext = createContext(null);
import { useContext } from "react";
import { getProductsById } from "../products";
import { useNavigate } from "react-router-dom";

export function CartProvider({ children }) {

    const [cartItems, setCartItems] = useState([]);
    const navigate = useNavigate();
    
    function addToCart(productId) {

        const existing = cartItems.find((item) => item.id === productId);

        if (existing) {
            const currentQuantity = existing.quantity;
            const updateItemCart = cartItems.map((item) => (item.id === productId) ? { id: productId, quantity: currentQuantity + 1 } : item);
            setCartItems(updateItemCart);

        } else {
            setCartItems([...cartItems, { id: productId, quantity: 1 }]);
        }
    }

    function UpdateDec(productId, quantity) {

        if (quantity <= 0) {
            remove(productId);
            return;
        }
        const existing = cartItems.find((item) => item.id === productId)
        if (existing) {
            const currentQuantity = existing.quantity;
            const updateItemCart = cartItems.map((item) => (item.id === productId) ? { id: productId, quantity: currentQuantity - 1 } : item);
            setCartItems(updateItemCart);
        }
    }

    function UpdateIncre(productId, quantity) {

        if (quantity <= 0) {
            remove(productId);
            return;
        }
        const existing = cartItems.find((item) => item.id === productId)
        if (existing) {
            const currentQuantity = existing.quantity;
            const updateItemCart = cartItems.map((item) => (item.id === productId) ? { id: productId, quantity: currentQuantity + 1 } : item);
            setCartItems(updateItemCart);
        }
    }
    function getCartItemsWithProducts() {
        return cartItems.map((item) => ({
            ...item,
            product: getProductsById(item.id),
        })).filter(item => item.product);
    }

    function remove(productId) {

        setCartItems(cartItems.filter((pro) => (pro.id !== productId)));

    }
    
    const products = getCartItemsWithProducts();

    function Total() {

        let total = 0;
        let tol = cartItems.map((item) => {

            const itemInCart = products.find((itemCart) => {

                const ite = (itemCart.product.id === item.id ? (itemCart.quantity * itemCart.product.price).toFixed(2) : 0);
                return (itemCart.product.id === item.id) ? itemCart : 0;
            });

            total = (Number(((itemInCart.product.price) * (itemInCart.quantity)).toFixed(2)) + Number(total)).toFixed(2)
            return total;

        }, 0);

        tol = total;
        return tol;
    }
    function order() {
        if(cartItems.length !== 0) {
             setCartItems([]);
        navigate("/");
        alert("Successful Order!");
        } 

    }
    return (
        < CartContext.Provider value={{ cartItems, addToCart, getCartItemsWithProducts, UpdateIncre, UpdateDec, remove, Total, order }}>{children}</CartContext.Provider>
    )
}

export function useCart() {

    const context = useContext(CartContext);

    return context;
}