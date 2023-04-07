import React,{useContext} from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../components/store/cart-context";

function Cart(props) {

  const cartCtx= useContext(CartContext)
  const totalAmount=`$${cartCtx.totalAmount.toFixed(2)}`
  const hasItems=cartCtx.items.length >0;

  const cartItems = (
    <ul className={classes["cart-item"]}>
      {cartCtx.items.map((item) => (
        <li>{item.name} </li>
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>total Amount</span>
        <span>{totalAmount} </span>
      </div>
      <div className={classes.actions}>
        <button ClassName={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button ClassName={classes.button}>Order</button>}
      </div>
    </Modal>
  );
}

export default Cart;
