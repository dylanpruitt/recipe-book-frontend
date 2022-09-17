import { Link } from "react-router-dom";

function RecipeLink(props) {
    return (
        <tr className="w3-hover-khaki">
            <td>
                <Link to="/" onClick={props.onClick}>
                    {props.name}
                </Link>
            </td>
            <td>
                {props.description}
            </td>
        </tr>
    );
}

export default RecipeLink;