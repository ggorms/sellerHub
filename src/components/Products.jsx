import {
  useGetProductsBySellerIdQuery,
  useDeleteProductMutation,
  useEditProductMutation,
} from "../reducers/api";
import { useSelector } from "react-redux";
import { useState } from "react";
import AddProduct from "./AddProduct";

function Products() {
  const me = useSelector((state) => state.auth.credentials.seller);
  const { data, isLoading } = useGetProductsBySellerIdQuery(me.sellerId);

  const [deleteProduct] = useDeleteProductMutation();

  const [editProduct] = useEditProductMutation();
  const [test, setTest] = useState(null);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");
  const [editProductToggle, setEditProductToggle] = useState(false);
  const [addProductToggle, setAddProductToggle] = useState(false);
  const [productId, setProductId] = useState("");

  const deleteProductButton = async (id) => {
    await deleteProduct(id)
      .then(() => {
        location.reload();
      })
      .catch(() => {
        console.log(error);
      });
  };

  const editProductHandler = async (e) => {
    console.log("hit");
    e.preventDefault();
    await editProduct({
      id: productId,
      title: title,
      price: +price,
      imgUrl: img,
      sellerId: me.sellerId,
    }).then(() => {
      setEditProductToggle(!editProductToggle);
      location.reload();
    });
  };

  if (isLoading) {
    return <h1>LOADING...</h1>;
  }
  return (
    <>
      <div className="flex justify-center flex-wrap">
        <h1
          className={
            "text-black text-center text-5xl my-10 font-serif italic font-bold"
          }
        >
          {me.username}
        </h1>{" "}
        <button
          title="Add product"
          className="text-black h-8 w-8 my-auto mx-3"
          onClick={() => setAddProductToggle(!addProductToggle)}
        >
          <svg
            className="h-8 w-8 hover:text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <title>Add Product</title>
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </button>
      </div>
      {addProductToggle && <AddProduct />}

      <div className="mx-10 sm:flex sm:flex-wrap sm:justify-center pb-5">
        {data.map((product) => (
          <div
            className="sm:w-5/12 sm:mx-5 lg:w-[30%] shadow-sm shadow-black mt-5"
            key={product.id}
          >
            <div className="flex justify-center">
              <h3 className="text-center text-black text-xl mt-4 font-medium">
                {product.title}
              </h3>
              <button
                className="w-4 h-4 ml-4 mr-2 my-auto mt-4"
                onClick={() => setEditProductToggle(!editProductToggle)}
              >
                <svg
                  className="w-4 h-4 text-black hover:text-white mt-1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                >
                  <title>Edit Product</title>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                  />
                </svg>
              </button>
              <button
                className="w-4 h-4 my-auto ml-2 text-black hover:text-red-600 mt-4"
                onClick={() => deleteProductButton(product.id)}
              >
                <svg
                  className="w-4 h-4 mt-1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                >
                  <title>Delete Product</title>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
            </div>
            {editProductToggle && (
              <form className="flex flex-col" onSubmit={editProductHandler}>
                <label className="text-black text-center pt-4">Title:</label>
                <input
                  className="input w-[90%] mx-auto max-w-xs mt-3"
                  type="text"
                  value={title}
                  onChange={(e) => {
                    if (e.target.value.length == 0) {
                      setTitle(product.title);
                    } else {
                      setTitle(e.target.value);
                    }
                  }}
                />
                <label className="text-black text-center pt-4">Price:</label>
                <input
                  className="input w-[90%] mx-auto max-w-xs mt-3"
                  type="text"
                  value={price}
                  onChange={(e) => {
                    if (e.target.value.length == 0) {
                      setPrice(product.price);
                    } else {
                      setPrice(e.target.value);
                    }
                  }}
                />
                <label className="text-black text-center pt-4">
                  {" "}
                  Image Url:
                </label>
                <input
                  className="input max-w-xs w-[90%] mx-auto mt-3"
                  type="text"
                  value={img}
                  onChange={(e) => {
                    if (e.target.value.length == 0) {
                      setImg(product.imgUrl);
                    } else {
                      setImg(e.target.value);
                    }
                  }}
                />
                <button
                  onClick={() => setProductId(product.id)}
                  className="btn text-white w-1/3 mx-auto my-5"
                >
                  Save
                </button>
              </form>
            )}
            <h5 className="text-center text-black py-5">$ {product.price}</h5>
            <img
              className="border-solid border-2 sm:w-70 sm:h-70"
              src={product.imgUrl}
              alt={product.title}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default Products;
