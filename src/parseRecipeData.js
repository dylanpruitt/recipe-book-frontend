function parseRecipeData(recipe) {
    let parsedObj = {
        title: recipe.name,
        description: recipe.description,
        ingredients: recipe.ingredients,
        directions: recipe.diretions,
    };

    parsedObj.ingredients = recipe.ingredients.map((item) => {
        return { value: item };
    });
    parsedObj.directions = recipe.directions.map((item) => {
        return { value: item };
    });

    return parsedObj;
}

export default parseRecipeData;