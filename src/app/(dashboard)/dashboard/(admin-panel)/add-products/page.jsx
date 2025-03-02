"use client";
import { useForm } from "react-hook-form";

const AddProductPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Product Data:", data);
    // Here you can send data to your backend API
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Add Product</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 sm:grid-cols-2">
        {/* Name */}
        <div className="col-span-2">
          <label className="block font-semibold">Product Name</label>
          <input
            type="text"
            {...register("name", { required: "Product name is required" })}
            className="w-full p-3 border rounded-md focus:ring focus:ring-blue-300"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>

        {/* Description */}
        <div className="col-span-2">
          <label className="block font-semibold">Description</label>
          <textarea
            {...register("description", { required: "Description is required" })}
            className="w-full p-3 border rounded-md focus:ring focus:ring-blue-300"
          />
          {errors.description && <p className="text-red-500">{errors.description.message}</p>}
        </div>

        {/* Price */}
        <div>
          <label className="block font-semibold">Price ($)</label>
          <input
            type="number"
            {...register("price", { required: "Price is required", min: 0 })}
            className="w-full p-3 border rounded-md focus:ring focus:ring-blue-300"
          />
          {errors.price && <p className="text-red-500">{errors.price.message}</p>}
        </div>

        {/* Stock */}
        <div>
          <label className="block font-semibold">Stock</label>
          <input
            type="number"
            {...register("stock", { required: "Stock quantity is required", min: 0 })}
            className="w-full p-3 border rounded-md focus:ring focus:ring-blue-300"
          />
          {errors.stock && <p className="text-red-500">{errors.stock.message}</p>}
        </div>

        {/* Category */}
        <div>
          <label className="block font-semibold">Category</label>
          <select {...register("category", { required: "Category is required" })} className="w-full p-3 border rounded-md focus:ring focus:ring-blue-300">
            <option value="">Select Category</option>
            <option value="Clothing">Clothing</option>
            <option value="Shoes">Shoes</option>
            <option value="Cosmetic">Cosmetic</option>
          </select>
          {errors.category && <p className="text-red-500">{errors.category.message}</p>}
        </div>

        {/* Colors */}
        <div>
          <label className="block font-semibold">Colors</label>
          <select multiple {...register("colors")} className="w-full p-3 border rounded-md focus:ring focus:ring-blue-300">
            <option value="Black">Black</option>
            <option value="Red">Red</option>
            <option value="Green">Green</option>
            <option value="Blue">Blue</option>
          </select>
        </div>

        {/* Sizes */}
        <div>
          <label className="block font-semibold">Sizes</label>
          <select multiple {...register("sizes")} className="w-full p-3 border rounded-md focus:ring focus:ring-blue-300">
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </select>
        </div>

        {/* Image URL */}
        <div className="col-span-2">
          <label className="block font-semibold">Image URL</label>
          <input
            type="text"
            {...register("images")}
            className="w-full p-3 border rounded-md focus:ring focus:ring-blue-300"
          />
        </div>

        {/* Submit Button */}
        <div className="col-span-2 text-center">
          <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition">
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProductPage;
