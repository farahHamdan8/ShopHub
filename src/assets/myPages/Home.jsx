import CardProduct from "./CardProduct"
import getProducts from "../products"

export default function Home() {

    const products = getProducts();

    return (
            <div className="home h-full px-4  w-full py-10">
                <div className="container h-full mb-20">
                    <div className="text text-center mx-auto mb-10">
                        <div className="heading  font-medium sm:text-3xl  mt-25 -ml-5">Welcome to ShopHub</div>
                        <p className="my-3 text-mist-500  text-[14px]">Discover amazing products at great price</p>
                    </div>
                    <div className="ourProduct mx-auto mt-15 ">
                        <div className="font-medium text-[14px] sm:text-[18px] my-5">Our Products</div>
                        <div className="products grid lg:grid-cols-3 md:grid-cols-2  gap-3 ">
                            {products.map((product) => (
                                <CardProduct product={product} key={product.id} />
                            ))
                            }
                        </div>
                    </div>
                </div>
            </div>
    );
}