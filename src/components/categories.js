import React from 'react';
import { connect } from 'react-redux';

import { activate, reset } from '../store/categories.js';

const RenderCategories = props => {
    return (
        <section>
            
            <ul>
                {props.counter.categories.map(category => {
                    
                    // console.log('counter', props.activate(category.displayName)[0]);
                    return <li onClick={() => props.activate(category.displayName)} key={category.displayName}>
                        {category.displayName} 
                    </li>
                })}
            </ul>
            <button onClick={props.reset}>Reset</button>
        </section>
    )
}

const mapStateToProps = state => ({
    counter: state.counter
})

const mapDispatchToProps = { activate, reset };

export default connect(mapStateToProps, mapDispatchToProps)(RenderCategories);

