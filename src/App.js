import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Navbar from "./Navbar";
import ProductList from "./ProductList";
import About from "./About";
import Product from "./Product";
import Wishlist from "./Wishlist";

function App() {
    const [wishlist, setWishlist] = useState([]);

    const addToWishlist = (product) => {
        setWishlist([...wishlist, product]);
    };

    const removeFromWishlist = (index) => {
        setWishlist(wishlist.filter((_, i) => i !== index));
    };

    const totalItems = wishlist.length;

    return (
        <div>
            <Router>
                <Navbar cartCount={totalItems} /> {/* Pass totalItems as cartCount */}
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/trending' element={<ProductList />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/product/:productId' element={<Product addToWishlist={addToWishlist} />} />
                    <Route path='/wishlist' element={<Wishlist wishlist={wishlist} onRemoveFromWishlist={removeFromWishlist} />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
