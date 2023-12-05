import Home from "./Pages/Home";
import { createBrowserRouter , RouterProvider} from "react-router-dom";
import About from "./Pages/About";
import ProductsPage from "./Pages/ProductsPage";


const router = createBrowserRouter([
  {
    path: "/", element: <Home/>
  },
  {
    path: "/about", element: <About/>
  },
  {
    path: "ProductsPage", element: <ProductsPage/>
  }
]);

function App() {
  return (
    <>
    <RouterProvider router={router}/>
    </>
  );
}

export default App;
