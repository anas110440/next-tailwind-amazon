/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';

function ProductItems({ product, addToCartHandler }) {
  return (
    <div className="card">
      <Link href={`/product/${product.slug}`}>
        <p>
          <img
            src={product.image}
            alt={product.name}
            className="rounded shadow"
          />
        </p>
      </Link>
      <div className="flex flex-col items-center p-5 justify-center">
        <Link href={`/product/${product.slug}`}>
          <h2 className="text-lg">{product.name}</h2>
        </Link>
        <p className="mb-2">{product.brand}</p>
        <p>${product.price}</p>
        <button
          className="primary-button"
          type="button"
          onClick={() => addToCartHandler(product)}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductItems;
