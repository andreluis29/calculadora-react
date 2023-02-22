import React, { Component } from  'react';
import './Button.css';

export default class Button extends Component {
  render() {
    const { label, operation, double, triple } = this.props;
    return(
      <button className={`
        button
        ${operation ? 'operation' : ''}
        ${double ? 'double' : ''}
        ${triple ? 'triple' : ''}
        {}
      `} onClick={e => this.props.click && this.props.click(e.target.innerHTML)}>{ label }</button>
    )
  }
}