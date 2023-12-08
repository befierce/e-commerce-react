import Home from "./Pages/Home";
import { createBrowserRouter , RouterProvider} from "react-router-dom";
import About from "./Pages/About";
import ProductsPage from "./Pages/ProductsPage";
import ContactUs from "./Pages/ContactUs";

const router = createBrowserRouter([
  {
    path: "/", element: <Home/>
  },
  {
    path: "/about", element: <About/>
  },
  {
    path: "/ProductsPage", element: <ProductsPage/>
  },
  {
    path: "/contact-us", element: <ContactUs/>
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
