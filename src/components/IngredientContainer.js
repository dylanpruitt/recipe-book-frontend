import React from 'react';
import Ingredient from './Ingredient.js';

class IngredientContainer extends React.Component {
  render() {
    const ingredients = this.props.ingredients;
    const listItems = ingredients.map((item, index) => {
      return <Ingredient key={index} value={item.value} />;
    });
    return (
      <article className="w3-half">
        <h1>Ingredients</h1>
        <ul className="ingredientList">
          {listItems}
        </ul>
      </article>
    );
  }
}

export default IngredientContainer;