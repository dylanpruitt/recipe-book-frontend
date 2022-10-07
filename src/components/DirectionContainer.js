import React from 'react';

class DirectionContainer extends React.Component {
  render() {
    const directions = this.props.directions;
    const listItems = directions.map((item, index) => {
      return <p key={index}> {item.value} </p>;
    });
    return (
      <article className="w3-half w3-right" style={{overflowY:'scroll'}}>
        <h1>Directions</h1>
        {listItems}
      </article>
    );
  }
}

export default DirectionContainer;