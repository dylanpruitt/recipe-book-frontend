import ResultsTable from '../components/ResultsTable';
import InputFilter from '../components/InputFilter';
import React from 'react';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = { filter: '' };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(filter) {
        this.setState({ filter: filter });
    }

    render() {
        const filter = this.state.filter;
        return (
            <article>
                <header className="w3-container w3-amber">
                    <h2>Search recipes</h2>
                </header>
                <section className="w3-padding">
                    <InputFilter filter={filter} handleChange={this.handleChange} />
                    <ResultsTable recipes={this.props.recipes} onClick={this.props.onClick} filter={filter} />
                </section>
            </article>
        );
    }
}

export default Search;