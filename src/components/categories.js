import React from 'react';
import { connect } from 'react-redux';


import { activate, reset } from '../store/categories.js';

const RenderCategories = props => {
    // console.log('props in components',props);

    return (
        <section>
            <ul>
                {props.counter.categories.map(category => {

                    // console.log('category', props.counter.products);

                    return <li onClick={() => props.activate(category.displayName)}
                        key={category.displayName}
                        onDoubleClick={props.reset}>
                        {category.displayName}
                    
                        <li className="span">
                            {category.span}
                        </li>
                        <li className="span">
                            {category.spans}
                        </li>

      
                     
                   
                    </li>
                })}
            </ul>
       

        </section>
    )
}

const mapStateToProps = state => ({
    counter: state.counter
})

const mapDispatchToProps = { activate, reset };

export default connect(mapStateToProps, mapDispatchToProps)(RenderCategories);

