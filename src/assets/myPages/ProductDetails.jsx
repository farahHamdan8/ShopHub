import { getProductsById } from "../products"
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useCart } from "../Context/CartContext";

export default function ProductDetail() {
    const { id } = useParams();

    const [product, setProduct] = useState(0);
    const navigate = useNavigate();
    const { addToCart, cartItems } = useCart();
    const productIncart = cartItems.find((item) => item.id === product.id);
    const ProductQuantityLabel = productIncart ? `(${productIncart.quantity})` : "";

    useEffect(() => {

        const foundProduct = getProductsById(id);
        
        if (!foundProduct) {
            navigate("/");
            return;
        } else {
            setProduct(foundProduct);
        }
    }, [id]);
    if (!product) {
        return <h1>Loading ...</h1>
    }

    
    return (
        <div className="details">
            <div className="container shadow-xl rounded bg-white flex flex-col md:flex-row md:items-center gap-5 p-4 my-18 sm:my-25 ">
                <img className="w-62.5 h-auto md:h-62.5 md:w-75 rounded shadow-xl" src={product.image} alt={product.name} />
                <div className="info">
                    <div className="name font-medium text-sm sm:text-[22px]">{product.name}</div>
                    <div className="price font-medium text-sm sm:text-[20px] text-blue-500 my-2">${product.price}</div>
                    <div className="desc font-medium text-sm sm:text-[16px] text-gray-700 my-2">{product.description}</div>
                    <button className="btn bg-blue-600 my-2" onClick={() => (addToCart(product.id))}>
                        Add To Cart {ProductQuantityLabel}
                    </button>
                </div>
            </div>
        </div>
    )
}