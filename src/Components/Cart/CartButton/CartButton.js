import carticon from "./shopping-cart.png";
import "./CartButton.css";


const CartButton = () => {
    const numberOfItems = 1;
    const cartButtonHandler = ()=>{
        console.log("button working")
    }
  return (
    <span>
      <button className="cart-button" onClick={cartButtonHandler}>
        <img src={carticon}alt="Cart"  className="cart-icon"/> Cart 
        <span className="numberofitems">{numberOfItems}</span>
      </button>
    </span>
  );
};

export default CartButton;
