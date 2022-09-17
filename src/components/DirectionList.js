import React from 'react';

class DirectionList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newDirection: ""
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        this.setState({
            newDirection: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        if (this.state.newDirection !== "") {
            this.props.add(this.state.newDirection);

            this.setState({
                newDirection: ""
            });
        }
    }

    render() {
        const items = this.props.directions.map((item, index) => {
            return <Direction key={index} name={item} onClick={() => this.props.remove(index)} />;
        });

        return (
            <section>
                <p>Directions:</p>
                <ul>{items}</ul>
                <input className="w3-input w3-border" type="text"
                    name="direction"
                    value={this.state.newDirection}
                    onChange={this.handleInputChange}
                    placeholder="Enter new directions here." >
                </input>
                <button onClick={this.handleSubmit}>Add new</button>
            </section>
        );
    }
}

function Direction(props) {
    return (
        <section className="w3-row">
            <li className="w3-quarter">{props.name}</li><button onClick={props.onClick}>X</button>
        </section>
    );
}

export default DirectionList;