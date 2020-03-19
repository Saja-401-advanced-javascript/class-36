import React from 'react';
import { connect } from 'react-redux';
import { changeSelected } from '../store/categories.js';
import { chooseList } from '../store/products.js';

const status = props => {
  console.log('ddddd', props.current);
    
  return (
        <section >
            <h2>{props.current.current}</h2>

            {props.current.categories.map((val, idx) => {
              return <button key={idx} onClick={() => {
                props.changeSelected(val);
                props.chooseList(val);
              }} className='category'>
                {val}
              </button>;
            })}
        </section>
  );
};

const mapStateToProps = state => {
  return {current:state.selector};
};

const mapDespatchToProps = {changeSelected, chooseList};

export default connect(mapStateToProps, mapDespatchToProps)(status);

