import "./Products.css";
import ProductsCard from "../Components/ProductsCard/ProductsCard";

const Products = (props) => {
  const productsArray = props.data.map((product, index) => (
    <ProductsCard key={index}>
      <div  className="product">
        <img src={product.imageURL} alt={product.title} />
        <p>{product.title}</p>
        <p>Price: ${product.price}</p>
        <button>add to cart</button>
      </div>
    </ProductsCard>
  ));

  return <div className="products-container">{productsArray}</div>;
};

export default Products;
