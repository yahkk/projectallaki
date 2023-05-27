import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { EnvelopeIcon } from "@heroicons/react/20/solid";

// import { product } from "./productsData";
async function getProducts(id) {
  const { data } = await axios.get(
    `http://localhost:8080/api/products/${id}`
  );
  return data.product;
}


const OneProductPage = () => {
  const { id } = useParams();
  const { data: product } = useQuery({
    queryKey: ["product", id],
    queryFn: () => getProducts(id),
  });
  const navivate = useNavigate();
  async function handleClick() {
    const { data } = await axios.post("http://localhost:8081/api/orders", {
      productId: product._id,
      date: new Date(),
    });
    navivate("/command", { state: data });
  }
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col justify-center items-center gap-4 p-10 ">
        <div className=" w-[300px] h-[300px] overflow-hidden rounded-lg">
          <img
            src={product?.image}
            className="h-full w-full object-cover object-center group-hover:opacity-75"
          />
        </div>
        <div>
          <h3 className="mt-4 text-xl text-gray-700">
            {product?.name} - ${product?.price}
          </h3>
        </div>
        <div>
          <p className="mt-1 text-lg font-normal text-gray-900">
            {product?.description}
          </p>
        </div>
        <div>
          <button
            type="button"
            onClick={() => handleClick()}
            className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            <EnvelopeIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
            Commander
          </button>
        </div>
      </div>
    </div>
  );
};

export default OneProductPage;
