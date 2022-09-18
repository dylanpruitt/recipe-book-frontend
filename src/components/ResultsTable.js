import RecipeLink from "./RecipeLink";

function ResultsTable(props) {
    const items = props.recipes;
    const listRecipes = items.map((item, index) => {
        return <RecipeLink key={index} name={item.title} description={item.description} onClick={() => props.onClick(index)} />;
    }).filter((item) => {
        return item.props.name.toLowerCase().includes(props.filter.toLowerCase())
    }).slice(0, 25);

    return (
        <table className="w3-table-all w3-margin-top">
            <thead>
                <tr>
                    <th>
                        Recipe name
                    </th>
                    <th>
                        Description
                    </th>
                </tr>
            </thead>
            <tbody>
                {listRecipes}
            </tbody>
        </table>
    );
}

export default ResultsTable;