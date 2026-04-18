const products = [

    {
        id: 1,
        name: "Wireless Headphones",
        price: 99.99,
        image: "./img/one.jpg",
        description: "Lorem  adipisicing elit. Deserunt facere eum, atque tenetur totam nemo praesentium quasi? Animi assumenda harum amet voluptatum sequi explicabo, repellendus earum neque perspiciatis unde in?"
    },

    {
        id: 2,
        name: "Smart Watch",
        price: 249.99,
        image: "../img/two.jpg",
        description: "Lorem  adipisicing elit. Deserunt facere eum, atque tenetur totam nemo praesentium quasi? Animi assumenda harum amet voluptatum sequi explicabo, repellendus earum neque perspiciatis unde in?"
    },
    {
        id: 3,
        name: "Laptop Stand",
        price: 49.99,
        image: "../img/five.jpg",
        description: "Lorem  adipisicing elit. Deserunt facere eum, atque tenetur totam nemo praesentium quasi? Animi assumenda harum amet voluptatum sequi explicabo, repellendus earum neque perspiciatis unde in?"
    },
    {
        id: 4,
        name: "Keyboard",
        price: 249.99,
        image: "../img/four.jpg",
        description: "Lorem  adipisicing elit. Deserunt facere eum, atque tenetur totam nemo praesentium quasi? Animi assumenda harum amet voluptatum sequi explicabo, repellendus earum neque perspiciatis unde in?"
    },
    {
        id: 5,
        name: "Smart Mouse",
        price: 249.99,
        image: "../img/three.jpg",
        description: "Lorem  adipisicing elit. Deserunt facere eum, atque tenetur totam nemo praesentium quasi? Animi assumenda harum amet voluptatum sequi explicabo, repellendus earum neque perspiciatis unde in?"
    },
    {
        id: 6,
        name: "Smart Phone",
        price: 249.99,
        image: "../img/six.jpg",
        description: "Lorem  adipisicing elit. Deserunt facere eum, atque tenetur totam nemo praesentium quasi? Animi assumenda harum amet voluptatum sequi explicabo, repellendus earum neque perspiciatis unde in?"
    },
    {
        id: 7,
        name: "Smart Camera",
        price: 249.99,
        image: "../img/seven.jpg",
        description: "Lorem  adipisicing elit. Deserunt facere eum, atque tenetur totam nemo praesentium quasi? Animi assumenda harum amet voluptatum sequi explicabo, repellendus earum neque perspiciatis unde in?"
    },
    {
        id: 8,
        name: "Smart Camera",
        price: 249.99,
        image: "../img/eight.jpg",
        description: "Lorem  adipisicing elit. Deserunt facere eum, atque tenetur totam nemo praesentium quasi? Animi assumenda harum amet voluptatum sequi explicabo, repellendus earum neque perspiciatis unde in?"
    },
];

export default function getProducts() {
    return products;
}
export function getProductsById(productId) {
    const product = products.find((p) => p.id === Number(productId));
    return product;
}
