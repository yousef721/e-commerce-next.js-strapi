"use client";
import { useEffect, useState } from "react";
import productApis from "../_utils/productApis";
import ProductList from "./ProductList";

const ProductsSection = () => {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    getLatestProducts_();
  }, []);

  const getLatestProducts_ = () => {
    productApis.getLatestProducts().then((res) => {
      setProductList(res.data.data);
    });
  };
  return (
    <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <h1 className="my-4 text-xl">Our Latest Products</h1>
      <ProductList productList={productList} />
    </div>
  );
};

export default ProductsSection;
