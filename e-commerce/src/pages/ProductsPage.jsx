import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
async function getProducts() {
  const { data: products } = await axios.get(
    "http://localhost:3000/api/products"
  );
  return products;
}

const ProductsPage = () => {
  const { data } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
  const navigate = useNavigate();
  return (
    <div className="bg-white">
      <div className="flex justify-center items-center m-10">
        <h1 className="font-medium text-3xl">        Application Mecommerce
</h1>
      </div>
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {data?.products.map((product) => (
            <a
              key={product._id}
              className="group"
              onClick={() => navigate(`/product/${product._id}`)}
            >
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={product.image}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                ${product.price}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
