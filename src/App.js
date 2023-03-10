import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/Error";
import Home from "./pages/Home";
import ProductDetailsPage from "./pages/ProductDetails";
import ProductsPage from "./pages/Products";
import RootLayout from "./pages/RootLayout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement:<ErrorPage/>,
      children: [
        { path: "/", element: <Home /> },
        { path: "/products", element: <ProductsPage /> },
        {path:'/products/:productId',element:<ProductDetailsPage/>}
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
