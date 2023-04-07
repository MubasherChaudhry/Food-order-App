import React from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";

function Cart(props) {
  const cartItems = (
    <ul className={classes["cart-item"]}>
      {" "}
      {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name} </li>
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button ClassName={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button ClassName={classes.button}>Order</button>
      </div>
    </Modal>
  );
}

export default Cart;
