import React from 'react';
import logo from './logo.svg';

var buttonStyle = {
    margin: '10px 10px 10px 0'
  };

function Favourite() {
  return (
    <button
    className="btn btn-default"
    style={buttonStyle}
    onClick={this.props.handleClick}>{this.props.label}</button>
  );
}

export default Favourite;