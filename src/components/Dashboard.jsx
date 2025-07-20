import React, { useState } from "react";
import { useAddProdutsMutation } from "../features/api/apiSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const Dashboard = () => {
  const [product, setProduct] = useState({
    category: "",
    title: "",
    description: "",
    price: "",
    image: "",
  });
  const [addProduct] = useAddProdutsMutation();
  const navigate = useNavigate();
  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]:
        e.target.name === "price" ? Number(e.target.value) : e.target.value,
    });
  };

  const handleChangeImage = async (e) => {
    const file = e.target.files[0];
    // console.log(file, "image");
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "app-with-ecommerce-firebase");
    data.append("cloud_name", "de2ougsup");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/de2ougsup/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const result = await res.json();
    // console.log(result);
    setProduct({ ...product, image: result.secure_url });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!product.image) {
      toast("Image is't done uploading, please waite....");
      return;
    }
    await addProduct(product);
    navigate("/home");
    // console.log(e);
  };
  return (
    <>
      <div className="container mx-auto p4-10">
        <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden md:max-w-xl">
          <div className="md:flex">
            <div className="w-full px-6 py-8 md:p-8">
              <h2 className="text-2xl font-bold text-gray-800">Add Product</h2>
              <p className="mt-4 text-gray-600">
                Please fill complete your product add form.
              </p>
              <form onSubmit={submitHandler} className="mt-6">
                <div className="mb-6">
                  <label
                    className="block text-gray-800 font-bold mb-2"
                    htmlFor="expiration_date"
                  >
                    Category
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="expiration_date"
                    type="text"
                    value={product.category}
                    name="category"
                    required
                    placeholder="Category"
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-6">
                  <label
                    className="block text-gray-800 font-bold mb-2"
                    htmlFor="name"
                  >
                    Title
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    value={product.title}
                    type="text"
                    name="title"
                    placeholder="Title"
                    required
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-6">
                  <label
                    className="block text-gray-800 font-bold mb-2"
                    htmlFor="card_number"
                  >
                    Description
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="card_number"
                    value={product.description}
                    type="text"
                    name="description"
                    required
                    placeholder="Description"
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-6">
                  <label
                    className="block text-gray-800 font-bold mb-2"
                    htmlFor="email"
                  >
                    Price
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="number"
                    value={product.price}
                    name="price"
                    required
                    placeholder="Price"
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-6">
                  <label
                    className="block text-gray-800 font-bold mb-2"
                    htmlFor="cvv"
                  >
                    Product Image URL
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="cvv"
                    type="file"
                    name="image"
                    placeholder="***"
                    onChange={handleChangeImage}
                  />
                </div>
                {product.image && (
                  <img
                    src={product.image}
                    alt={product.title}
                    style={{ width: "100px", height: "100px", marginBottom:"5px" }}
                  />
                )}
                <button
                  className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
