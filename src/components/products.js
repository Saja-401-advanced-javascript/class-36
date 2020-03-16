import React from 'react';
import { connect } from 'react-redux';
import { chooseList } from '../store/products.js';
import { addItem } from '../store/cart.js';

const Status = props => {
  return (
    <>
      <h2>{props.selector.current} List </h2>
      <h3>Click To Add</h3>
      {props.list.output.map((val, idx) => {
        return <li key={idx} className="list" onClick={() => props.addItem(val)}>{val}</li>;
      })}
    </>
  );
};

const mapStateToProps = state => {
  return state;
};

const mapDespatchToProps = { chooseList, addItem };

export default connect(mapStateToProps, mapDespatchToProps)(Status);