import axios from "axios";
import React from "react";
import { Layout } from "../../components/Layout";
import { useRouter } from "next/router";
import { toast,ToastContainer } from "react-toastify";

function ProductPage({ product }) {
  const router = useRouter();

  const handleDelete = async (id) => {    
    try {      
      const res = await axios.delete("/api/products/" + id);
      //console.log(res);
      router.push("/");
    } catch (error) {
      toast.error(error.response.data.message)
    }
    

  };

  return (
    <Layout>
      <div className="border-gray-200 shadow-md p-6">
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p>{product.price}</p>

        <button
          className="bg-red-500 hover:bg-red-700 text-white px-3 py-2 rounded"
          onClick={() => handleDelete(product.id)}
        >
          Delete
        </button>
        <button
          className="bg-gray-500 hover:bg-gray-800 ml-2 text-white px-5 py-2 rounded"
          onClick={() => router.push("/products/edit/" + product.id)}
        >
          Edit
        </button>
      </div>
      <ToastContainer />
    </Layout>
  );
}
export const getServerSideProps = async (context) => {
  const { data: product } = await axios.get(
    "http://localhost:3000/api/products/" + context.query.id
  );

  return {
    props: {
      product,
    },
  };
};

export default ProductPage;
