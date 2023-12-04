import "./AddToCartButton.css"
import { useContext } from "react";
import CartContext from "../store/cart-context";

const AddToCartButton = (props)=>{
    const cartctx = useContext(CartContext);


    return <>
        <button>Add to Cart</button>
    </>
}

export default AddToCartButton;