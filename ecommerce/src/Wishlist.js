import React from 'react';
import { Link } from 'react-router-dom';

function Wishlist({ wishlist, onRemoveFromWishlist }) {
    // Group products by ID, selectedSize, and selectedColor, and count occurrences
    const groupedWishlist = wishlist.reduce((acc, item) => {
        const key = `${item.id}-${item.selectedSize}-${item.selectedColor}`;
        if (!acc[key]) {
            acc[key] = { ...item, count: 0 };
        }
        acc[key].count++;
        return acc;
    }, {});

    const totalItems = Object.values(groupedWishlist).reduce((total, item) => total + item.count, 0);
    const totalPrice = wishlist.reduce((total, item) => total + item.new_price, 0);

    return (
        <div className="wishlist p-4 sm:p-8 bg-black min-h-screen">
            {totalItems === 0 ? (
                <>
                    <p className="text-4xl sm:text-6xl font-bold mt-20 mb-10 sm:mb-20 pt-10 sm:pt-20 text-gray-600 opacity-75 text-center py-10 sm:py-20 rounded-md">
                        Your Wishlist is Empty
                    </p>
                    <div className="mt-5 text-center">
                        <Link to="/trending">
                            <button className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white py-3 sm:py-4 px-8 sm:px-10 rounded-full text-2xl sm:text-3xl font-semibold hover:opacity-85 transition duration-300">
                                Start Shopping
                            </button>
                        </Link>
                    </div>
                </>
            ) : (
                <>
                    <div className="overflow-x-auto mt-10">
                        <table className="min-w-full bg-gray-900 bg-opacity-40 text-white shadow-md rounded-lg overflow-hidden mt-10">
                            <thead className="bg-gray-700 bg-opacity-50">
                            <tr>
                                <th className="py-2 sm:py-4 px-2 sm:px-6 text-left text-xs sm:text-sm font-medium text-gray-300 uppercase tracking-wider">Product</th>
                                <th className="py-2 sm:py-4 px-2 sm:px-6 text-left text-xs sm:text-sm font-medium text-gray-300 uppercase tracking-wider">Price</th>
                                <th className="py-2 sm:py-4 px-2 sm:px-6 text-left text-xs sm:text-sm font-medium text-gray-300 uppercase tracking-wider">Size</th>
                                <th className="py-2 sm:py-4 px-2 sm:px-6 text-left text-xs sm:text-sm font-medium text-gray-300 uppercase tracking-wider">Color</th>
                                <th className="py-2 sm:py-4 px-2 sm:px-6 text-left text-xs sm:text-sm font-medium text-gray-300 uppercase tracking-wider">Quantity</th>
                                <th className="py-2 sm:py-4 px-2 sm:px-6 text-left text-xs sm:text-sm font-medium text-gray-300 uppercase tracking-wider">Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            {Object.values(groupedWishlist).map((item, index) => (
                                <tr key={`${item.id}-${item.selectedSize}-${item.selectedColor}`} className="bg-gray-900 bg-opacity-30 hover:bg-gray-700 hover:bg-opacity-50 transition duration-200">
                                    <td className="py-2 sm:py-4 px-2 sm:px-6 border-b border-gray-700 flex items-center">
                                        <img src={item.image} alt={item.name} className="w-16 sm:w-20 h-16 sm:h-20 object-cover mr-4 rounded" />
                                        <div>
                                            <h3 className="text-sm sm:text-lg hidden sm:block font-semibold text-gray-100">{item.name}</h3>

                                        </div>
                                    </td>
                                    <td className="py-2 sm:py-4 px-2 sm:px-6 border-b border-gray-700 text-gray-100 text-sm sm:text-lg">${item.new_price}</td>
                                    <td className="py-2 sm:py-4 px-2 sm:px-6 border-b border-gray-700 text-gray-100 text-sm sm:text-lg">{item.selectedSize}</td>
                                    <td className="py-2 sm:py-4 px-2 sm:px-6 border-b border-gray-700 text-gray-100 text-sm sm:text-lg">{item.selectedColor}</td>
                                    <td className="py-2 sm:py-4 px-2 sm:px-6 border-b border-gray-700 text-gray-100 text-sm sm:text-lg">{item.count}</td>
                                    <td className="py-2 sm:py-4 px-2 sm:px-6 border-b border-gray-700">
                                        <button
                                            className="bg-gray-400 text-white py-1 sm:py-2 px-2 sm:px-4 rounded-full hover:bg-gray-600 transition duration-300"
                                            onClick={() => onRemoveFromWishlist(index)}
                                        >
                                            Remove
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="bg-gray-800 bg-opacity-50 p-4 sm:p-6 mt-6 rounded-lg shadow-md text-white">
                        <div className="flex justify-between items-center">
                            <div className="text-xl sm:text-2xl font-bold">Total Items</div>
                            <div className="text-2xl sm:text-3xl font-semibold">{totalItems}</div>
                        </div>
                        <div className="flex justify-between items-center mt-2 sm:mt-4">
                            <div className="text-xl sm:text-2xl font-bold">Total Price</div>
                            <div className="text-2xl sm:text-3xl font-semibold">${totalPrice.toFixed(2)}</div>
                        </div>
                    </div>

                    <div className="mt-8 text-center">
                        <Link to="/trending">
                            <button className="bg-gradient-to-r from-pink-500 to-yellow-500 py-3 sm:py-4 px-6 sm:px-10 text-white rounded-full text-2xl sm:text-3xl font-semibold hover:opacity-80 transition duration-300">
                                Back to Products
                            </button>
                        </Link>
                    </div>
                </>
            )}
        </div>
    );
}

export default Wishlist;
