import React, { Component } from 'react';
import './Item.css';

import {toggleItem,removeItem}  from '../actions'
class Item extends Component {
  render() {
    const { item} = this.props;
    return (
      <article className="Item">
        <label htmlFor={item.id}>
          <input
            type="checkbox"
            checked={item.packed}
            onChange={()=>toggleItem(this.props.item)}
            id={item.id}
          />
          {item.value}
        </label>
        <button className="Item-remove" onClick={()=>removeItem(this.props.item)}>
          Remove
        </button>
      </article>
    );
  }
}

export default Item;
