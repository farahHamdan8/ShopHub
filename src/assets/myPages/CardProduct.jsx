import { useContext } from "react";
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import { useCart } from "../Context/CartContext";

export default function CardProduct({ product }) {

    const navigate = useNavigate();
    const { addToCart, cartItems } = useCart();
    const productIncart = cartItems.find((item) => item.id === product.id);
    const ProductQuantityLabel = productIncart ? `(${productIncart.quantity})` : "";

    return (
        <div className="product  bg-white w-full   shadow-sm6 rounded-2xl" key={product.id}>
            <img className="w-full h-62.5 rounded-t-2xl" src={product.image} alt={product.name} />
            <div className="text flex flex-col gap-3 p-4">
                <p className="text-md font-medium">{product.name}</p>
                <div className="price text-blue-600 font-medium text-[14px] sm:text-xl">${product.price}</div>
                <div className="buttons text-amber-50 text-sm sm:text-md flex gap-4">
                    <Link className="btnView bg-gray-600 rounded-sm px-4 py-1.5 text-[10px] sm:text-[14px]" to={`/products/${product.id}`}>View Details</Link>

                    <button
                        onClick={() => (addToCart(product.id))}
                        className="bg-blue-600 rounded-sm px-4 text-[10px] sm:text-[14px]">
                        Add To Cart  {ProductQuantityLabel}
                    </button>
                </div>
            </div>
        </div>
    )
}
