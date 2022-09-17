import React from 'react';
import DirectionContainer from '.././components/DirectionContainer.js';
import IngredientContainer from '.././components/IngredientContainer.js';
import RecipeHeader from '.././components/RecipeHeader.js';
import './Recipe.css';

function Recipe(props) {
    const index  = props.index;
    const recipe = props.recipes[index];
    
    var title = recipe.title;
    var description = recipe.description;
    var ingredients = recipe.ingredients;
    var directions = recipe.directions;

    return (
        <div className="Recipe">
            <RecipeHeader name={title} description={description} />
            <section className="w3-row-padding">
                <IngredientContainer ingredients={ingredients} />
                <DirectionContainer directions={directions} />
            </section>
        </div>
    );
}

export default Recipe;