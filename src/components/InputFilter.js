import React from "react";

class InputFilter extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.handleChange(e.target.value);
    }

    render() {
        const filter = this.props.filter;

        return (
            <input className="w3-input w3-border w3-padding" type="text"
                value={filter}
                onChange={this.handleChange} 
                placeholder="Search for recipes here." >
            </input>
        );
    }
}

export default InputFilter;