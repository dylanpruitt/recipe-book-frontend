import React from 'react';

class IngredientList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newIngredient: ""
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        this.setState({
            newIngredient: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        if (this.state.newIngredient !== "") {
            this.props.add(this.state.newIngredient);

            this.setState({
                newIngredient: ""
            });
        }
    }

    render() {
        const items = this.props.ingredients.map((item, index) => {
            return <Ingredient key={index} name={item} onClick={() => this.props.remove(index)} />;
        });

        return (
            <section>
                <p>Ingredients:</p>
                <ul>{items}</ul>
                <input className="w3-input w3-border" type="text"
                    name="ingredient"
                    value={this.state.newIngredient}
                    onChange={this.handleInputChange}
                    placeholder="Enter new ingredients here." >
                </input>
                <button onClick={this.handleSubmit}>Add new</button>
            </section>
        );
    }
}

function Ingredient(props) {
    return (
        <section className="w3-row">
            <li className="w3-quarter">{props.name}</li><button onClick={props.onClick}>X</button>
        </section>
    );
}

export default IngredientList;