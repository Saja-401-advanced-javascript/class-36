import React from 'react';
import { connect } from 'react-redux';
import { chooseList } from '../store/products.js';

const Status = props => {
  return (
        <>
            <h2>{props.selector.current} List </h2>
            {props.list.output.map((val, idx) => {
              return <li key={idx} className="list">{val}</li>;
            })}
        </>
  );
};

const mapStateToProps = state => {
  return state;
};

const mapDespatchToProps = {chooseList};

export default connect(mapStateToProps, mapDespatchToProps)(Status);