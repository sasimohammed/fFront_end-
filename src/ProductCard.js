import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from "./Navbar";
function ProductCard({ product }) {
    return (
        <div className="product-card flex flex-col items-center bg-white shadow-lg rounded-lg overflow-hidden group transform transition cursor-pointer mt-20 duration-500 hover:scale-105">
            <img src={product.image} alt={product.name} className="w-full h-auto group-hover:opacity-80" />
            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                <p className="text-sm text-gray-600 mt-2">Category: {product.category}</p>
                <div className="flex justify-between items-center mt-4">
                    <span className="text-xl font-bold text-gray-900">${product.new_price}</span>
                    <span className="text-sm line-through text-gray-500">${product.old_price}</span>
                </div>
            </div>
            <Link to={`/product/${product.id}`}>
                <button className="bg-gradient-to-r from-pink-500 to-yellow-500 mb-10 mx-auto text-white py-2 px-3 rounded-full text-xl font-semibold hover:from-pink-600 hover:to-yellow-600 transition duration-300 w-64 sm:w-auto">
                    Add To Cart
                </button>
            </Link>
        </div>
    );
}

export default ProductCard;
