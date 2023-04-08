import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealsItems/MealItem";
const Meals = [
  {
    id: "m1",
    name: "MeG's Tasty Beef-Menü",
    description:'Get a taste: Enjoy perfectly grilled beef (125g) ',
    price: 8.99,
  },
  {
    id: "m2",
    name: "MeG's New Yorker Vegan-Menü",
    description: "Our interpretation of the vegan hot dog",
    price: 10.99,
  },
  {
    id: "m3",
    name: "MeG's Big Angus Hollandaise Menu",
    description: "Enjoy our delicious Big Angus Hollandaise prepared in a ciabatta.",
    price: 12.99,
  },
  {
    id: "m4",
    name: "MeG's Big Angus Teriyaki Menu",
    description: "Our delicious Big Angus Teriyaki, prepared in a sesame bun with Angus (150g)",
    price: 12.99,
  },  {
    id: "m5",
    name: "MeG's Hot Crunchy Chicken Menu",
    description: "discover the delicious combination of crispy, spicy, breaded crunchy chicken ",
    price: 10.99,
  },  {
    id: "m6",
    name: "Fresh finger food special",
    description: "Crunchy meets crunchy: order a mixed box with your finger food choice, from chicken,",
    price: 9.99,
  },  {
    id: "m7",
    name: "MeG's Fries & Wings Special",
    description: "Fingerlicking good: get a portion of topped fries of your choice and enjoy them togethe",
    price: 9.00,
  },  {
    id: "m8",
    name: "MeG's Double Salad Special",
    description: "Twice tastes better! ",
    price: 15.00,
  },  {
    id: "m9",
    name: "MeG's Burger party special",
    description: "celebrate with your friends, your family ",
    price: 49.00,
  },
];












const AvailableMeals = () => {
  const mealsList = Meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
