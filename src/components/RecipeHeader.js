function RecipeHeader(props) {
    return (
        <header className="w3-container w3-amber">
            <h2>
                {props.name}
            </h2>
            <p>
                {props.description}
            </p>
        </header>
    );
}

export default RecipeHeader;