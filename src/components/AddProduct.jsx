import { useAddProductMutation } from "../reducers/api";
import { useState } from "react";
import { useSelector } from "react-redux";

function AddProduct() {
  const [addProduct] = useAddProductMutation();
  const me = useSelector((state) => state.auth.credentials.seller);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");

  const addProductButton = async () => {
    await addProduct({
      title: title,
      price: +price,
      imgUrl: img,
      sellerId: me.sellerId,
    });
  };
  return (
    <div className="">
      <form
        onSubmit={addProductButton}
        className="flex flex-col items-center mb-7"
      >
        <h2 className="text-black pb-5 text-2xl">Add Product</h2>
        <label className="text-black mb-3">Title:</label>
        <input
          className="input input-bordered w-full max-w-xs mb-3"
          type="text"
          value={title}
          placeholder="Enter product title..."
          onChange={(e) => setTitle(e.target.value)}
        />
        <label className="text-black mb-3">Price:</label>
        <input
          className="input input-bordered w-full max-w-xs mb-3"
          type="text"
          value={price}
          placeholder="Enter product Price..."
          onChange={(e) => setPrice(e.target.value)}
        />
        <label className="text-black mb-3">Image:</label>
        <input
          className="input input-bordered w-full max-w-xs mb-3"
          type="text"
          value={img}
          placeholder="Enter product image address..."
          onChange={(e) => setImg(e.target.value)}
        />
        <button className="text-white btn hover:bg-green-500 hover:text-black mt-3">
          Add Product
        </button>
      </form>
    </div>
  );
}

export default AddProduct;
