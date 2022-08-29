import React from "react";
import axios from "axios";
import { Layout } from "../components/Layout";
import ProductCard from "../components/ProductCard";

function HomePage({ products }) {
  const renderProducts = () => {
    if (products.length === 0)
      return <h1 className="text-center text-2x1 font-bold">No Product yet</h1>;
      
    return products.map((product) => (
      <ProductCard product={product} key={product.id} />
    ));
  };

  return (

    <Layout>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
        {renderProducts()}
      </div>
    </Layout>
  );
}
export const getServerSideProps = async (context) => {
  const { data: products } = await axios.get(
    "http://localhost:3000/api/products"
  );

  return {
    props: {
      products,
    },
  };
};

export default HomePage;
