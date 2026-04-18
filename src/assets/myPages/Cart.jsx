import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProductsById } from "../products";
import { AuthContext } from "../Context/AuthContext";

export default function Cart() {

    const { getCartItemsWithProducts, UpdateIncre, UpdateDec, remove, cartItems, Total, order } = useContext(CartContext);
    const products = getCartItemsWithProducts();
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    return (
            <div className="cart w-full px-4 sm:px-12">
                <div className="container w-full md:px-8 px-1 py-16">
                    <h2 className="font-medium sm:text-[20px] text-[18px] my-8">Checkout</h2>
                    <div className="boxs flex lg:flex-row flex-col gap-5">
                        <div className="box bg-white shadow-xl rounded-sm p-4">
                            <h3 className="font-medium sm:text-[20px] text-[16px]">Order Summery</h3>
                            <div className="products-info my-8">
                                <div className="products flex flex-col gap-8">{products.map((item) => (
                                    <div className="product border-b border-b-mist-100 sm:pb-2 pb-4 flex items-start gap-3" key={item.id}>
                                        <img className="sm:w-25 w-12.5 sm:h-25 h-12.5 rounded" src={item.product.image} alt={item.product.name} />
                                        <h4 className=" flex-1  font-medium text-sm sm:text-[18px]">{item.product.name}<span className="block font-medium text-taupe-600 text-[12px] sm:text-[15px]">${item.product.price} each</span></h4>
                                        <div className="lastInfo flex flex-col items-end gap-1">
                                            <div className="flex gap-1 sm:gap-4 items-center"><button onClick={() => UpdateDec(item.id, item.quantity)} className="symbol">-</button>{item.quantity} <button className="symbol " onClick={() => UpdateIncre(item.id, item.quantity)} >+</button></div>
                                            <div className=" font-medium my-1 text-taupe-600 text-[14px] sm:text-[16px]">${(item.product.price * item.quantity).toFixed(2)}</div>
                                            <button className="bg-mist-700 text-white rounded p-1 text-sm" onClick={() => remove(item.id)}>Remove</button>
                                        </div>
                                    </div>
                                ))}
                                </div>
                            </div>
                        </div>
                        <div className="total bg-white pr-12  shadow-xl rounded-sm p-4" >
                            <h3 className="font-medium sm:text-[20px] text-[16px] ">Total</h3>
                            <p className="text-mist-700 font-medium my-3 border-b shadow-xl pb-4 border-b-gray-900">total : <span className="font-bold text-blue-600">$<Total /></span></p>
                            <button className="btn  bg-blue-600 my-4"
                             onClick={() =>(!user ? navigate("/Auth") : order())}>
                                Piace Order
                            </button>
                        </div>
                    </div>
                </div>
            </div>
    )
}


