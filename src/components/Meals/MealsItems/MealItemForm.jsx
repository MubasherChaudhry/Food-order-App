import React from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

function MealItemForm(props) {
  const submitHandler= event=>{
    event.preventDefault();
  }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        label="Quantity :"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>&#x1F60D; Add &#x1F601;</button>
    </form>
  );
}

export default MealItemForm;
