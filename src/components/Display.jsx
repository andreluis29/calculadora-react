import React, { Component } from 'react';
import './Display.css';

export default class Display extends Component {
  render() {
    const { value } = this.props;
    return(
      <div className='display'>{ value }</div>
    )
  }
}