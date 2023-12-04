import "./Products.css";
import ProductsCard from "../Components/ProductsCard/ProductsCard";
import AddToCartButton from "./AddToCartButton";
const Products = (props) => {


  const productsArray = props.data.map((product, index) => (
    <ProductsCard key={index}>
      <div  className="product">
        <img src={product.imageURL} alt={product.title} />
        <p>{product.title}</p>
        <p>Price: ${product.price}</p>
        <AddToCartButton  item={product} id={product.id}/>
      </div>
    </ProductsCard>
  ));

  return <div className="products-container">{productsArray}</div>;
};

export default Products;
