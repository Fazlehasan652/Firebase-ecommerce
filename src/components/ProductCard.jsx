import React, { useEffect, useState } from "react";
import { collectionData } from "../utilities/firebaseDataFetchApi";

const ProductCard = () => {
  const [products, setProducts] = useState([]);
  console.log(collectionData);

  useEffect(() => {
    async () => {
      const res = await collectionData;
      setProducts(res);
    };
  }, []);
  // console.log(products);
  return (
    <>
      {products?.length > 0 &&
        products?.map((product) => (
          <article key={product.id + 0} className="product card">
            <Link key={product.id + 1} to={product.id}>
              <div className="badge">
                <span>5 in stock</span>
                <hr className="hr-design" />
                <span>3 sold</span>
              </div>
              <img
                key={product.id + 2}
                className="product__img"
                src={product.image}
                alt="Headphone"
              />
            </Link>
            <div className="product__body">
              <h3 key={product.id + 3} className="product__name font-semibold">
                {product.title}
              </h3>
              <p>
                <span className="dot green"></span>
                <span className="dot black"></span>
                <span className="dot red"></span>
              </p>
              <p key={product.id + 4} className="product__description ">
                {product.description.slice(0, 150)}....
                <Link key={product.id} to={product.id} className="learn-more">
                  Learn More
                </Link>
              </p>
              <h4 key={product.id + 5} className="product__price">
                ${product.price}
              </h4>
              <p className="product__rating">Rating 4.5/5</p>
              <div
                to={"/cart?paramName=" + product.id}
                className="btn text-center"
              >
                <button
                  onClick={() => addToHandler(product)}
                  className="hover:font-semibold"
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          </article>
        ))}
    </>
  );
};

export default ProductCard;
