import { useEffect, useState } from "react";

export default function Meals({ handleAddFoodToCart }) {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    async function getMeals() {
      const response = await fetch("http://localhost:3000/meals");
      const data = await response.json();
      setMeals(data);
    }

    getMeals();
  }, []);

  return (
    <ul id="meals">
      {meals.map((meal) => (
        <li key={meal.id} className="meal-item">
          <article>
            <img src={"http://localhost:3000/" + meal.image} />
            <h3>{meal.name}</h3>
            <span className="meal-item-price">{meal.price}</span>
            <p className="meal-item-description">{meal.description}</p>
            <div className="meal-item-actions">
              <button
                className="button"
                onClick={() =>
                  handleAddFoodToCart(meal.id, meal.name, meal.price)
                }
              >
                Add to Cart
              </button>
            </div>
          </article>
        </li>
      ))}
    </ul>
  );
}
