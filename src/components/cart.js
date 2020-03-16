import React from 'react';
import {connect} from 'react-redux';

const status  =props => {
    return(
        <>
        <h2>MY CART</h2>
        {props.items.inCart.map((val,idx) => {
            return <li key={idx}>{val}</li>
        })}
        </>
    )
}

const mapStateToProps = state =>{
    return {items : state.cart}
}

export default connect(mapStateToProps)(status);