import { redirectDocument } from "react-router-dom";

import Navbar from "../Components/Navbar/Navbar";
import Container from "../Components/Navbar/Container";
import Product from "../Products/Product";
import Footer from "../Components/Footer/Footer";

const dummy_data = [
    {
      title: "nike Air 11",
      price: 3200,
      imageURL:
        "https://images.pexels.com/photos/10155098/pexels-photo-10155098.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "nike Air 11",
      price: 3200,
      imageURL:
        "https://images.pexels.com/photos/7524995/pexels-photo-7524995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    
    {
      title: "nike Air 11",
      price: 3200,
      imageURL:
        "https://images.pexels.com/photos/60735/pexels-photo-60735.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "nike wistle 22",
      price: 3200,
      imageURL:
        "https://images.pexels.com/photos/18946583/pexels-photo-18946583/free-photo-of-brand-design-sneaker.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "nike shoe",
      price: 3200,
      imageURL:
        "https://images.pexels.com/photos/8278491/pexels-photo-8278491.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "nike shoe",
      price: 3200,
      imageURL:
        "https://images.pexels.com/photos/18946650/pexels-photo-18946650/free-photo-of-nike-air-max-1-97-sean-wotherspoon-shoes.jpeg",
    },
  ];


const ProductsPage = ()=>{
    return (
        <div>
          <header>
            <Navbar />
            <Container />
          </header>
          <div className="products-container">
          <Product data={dummy_data} description="Add To Cart"/>
          </div>
          <Footer></Footer>
        </div>
      )
}

export default ProductsPage;