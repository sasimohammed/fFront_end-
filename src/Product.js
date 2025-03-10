import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import all_product from './all_product'; // assuming the product data is stored here
import Navbar from "./Navbar";
function Product({ addToWishlist }) {
    const { productId } = useParams();
    const product = all_product.find(p => p.id === parseInt(productId));

    const [selectedImage, setSelectedImage] = useState(product ? product.image : '');
    const [selectedSize, setSelectedSize] = useState("M");
    const [selectedColor, setSelectedColor] = useState("Black");

    if (!product) {
        return <div>Product not found</div>;
    }

    const sizes = ["S", "M", "L"];
    const colors = ["Red", "Blue", "Black"];

    const handleAddToWishlist = () => {
        addToWishlist({
            ...product,
            selectedSize,
            selectedColor
        });
    };

    return (
        <div className="product-page grid grid-cols-1 lg:grid-cols-3 gap-2 p-8 bg-black min-h-screen pt-20"  >
            {/* Image Section */}
            <div className="product-images flex flex-col lg:flex-row items-center lg:items-start">
                <div className="image-thumbnails flex lg:flex-col space-x-2 lg:space-x-0 lg:space-y-4 mb-4 lg:mb-0 lg:mr-4 mt-20">
                    {/* Thumbnails */}
                    {[product.image, product.image, product.image, product.image].map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt={`${product.name} Thumbnail ${index + 1}`}
                            className="w-24 h-36 sm:w-1/4 sm:h-1/4 border-2 border-gray-300 rounded-md cursor-pointer transform transition-transform duration-200 hover:scale-110 opacity-75 hover:opacity-100"
                            onClick={() => setSelectedImage(img)}
                        />
                    ))}
                </div>

                {/* Main Image */}
                <div className="main-image bg-black border-2 border-gray-300 shadow-md rounded-lg mt-20">
                    <img
                        src={selectedImage}
                        alt={product.name}
                        className="w-full h-auto"
                    />
                </div>
            </div>

            {/* Product Info */}
            <div className="product-info col-span-2 bg-black shadow-lg rounded-lg p-6 mt-8 lg:mt-0">
                <h2 className="text-4xl font-bold text-white">{product.name}</h2>
                <p className="text-xl text-gray-300 mt-4">Category: {product.category}</p>

                {/* Price */}
                <div className="price mt-6 flex items-center space-x-4">
                    <span className="text-2xl font-bold text-white">${product.new_price}</span>
                    <span className="text-lg line-through text-gray-400">${product.old_price}</span>
                </div>

                {/* Options */}
                <div className="product-options mt-8">
                    {/* Sizes */}
                    <div className="sizes mb-6">
                        <h4 className="text-xl font-medium text-white mb-2">Size</h4>
                        <div className="flex space-x-4">
                            {sizes.map((size) => (
                                <div
                                    key={size}
                                    className={`p-5 rounded cursor-pointer text-white ${
                                        selectedSize === size ? 'bg-pink-500' : 'bg-gray-700'
                                    }`}
                                    onClick={() => setSelectedSize(size)}
                                >
                                    {size}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Colors */}
                    <div className="colors">
                        <h4 className="text-xl font-medium text-white mb-2">Color</h4>
                        <div className="flex space-x-4">
                            {colors.map((color) => (
                                <div
                                    key={color}
                                    className={`p-5 rounded cursor-pointer text-white ${
                                        selectedColor === color ? 'bg-pink-500' : 'bg-gray-700'
                                    }`}
                                    onClick={() => setSelectedColor(color)}
                                >
                                    {color}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Add to Cart Button */}
                <div className="add-to-cart mt-8 w-full">
                    <Link to="/wishlist">
                        <button
                            className="bg-gradient-to-r from-pink-500 to-yellow-500 py-3 px-5 rounded-full text-white text-2xl font-semibold hover:from-pink-600 hover:to-yellow-600 w-full"
                            onClick={handleAddToWishlist}
                        >
                            Add to Cart
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Product;
