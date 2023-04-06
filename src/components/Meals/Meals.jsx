import { Fragment } from "react";

import MealsSummary from "./Meals Summary";
import AvailableMeals from "./AvailableMeals";

const Meals =()=>{
  return( 
  <Fragment>
    <MealsSummary/>
    <AvailableMeals/>
  </Fragment>
  )
}

export default Meals;