import React from 'react';
import ProductCard from './ProductCard';
import all_product from './all_product'; // Importing the data
import banner_women from './banner_women.png';

function ProductList() {
    return (
        <div className='pt-20 ' >
            <img src={banner_women} className='sm:w-full h-52 sm:block hidden w-11/12 mx-auto sm:mx-0 sm:h-auto  ' alt="Banner for Women"  />
            <div className="product-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 p-8">
                {all_product.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}

export default ProductList;
