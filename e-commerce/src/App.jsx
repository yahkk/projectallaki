import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import OneProductPage from "./pages/OneProductPage";
import CommandPage from "./pages/CommandPage";
import Payement from "./pages/Payement";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProductsPage />,
  },
  {
    path: "/product/:id",
    element: <OneProductPage />,
  },
  {
    path: "/command",
    element: <CommandPage />,
  },
  {
    path: "/payement",
    element: <Payement />,
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
