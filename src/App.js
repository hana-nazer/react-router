import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import ProductsPage from './pages/Products'

function App() {
  const router = createBrowserRouter([{ path: "/", element: <Home /> },
{path:'/products',element:<ProductsPage/>}]);
  return <div>
    <RouterProvider router={router}/>
  </div>;
}

export default App;
