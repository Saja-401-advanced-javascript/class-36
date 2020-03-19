import React from 'react';
import {connect} from 'react-redux';

const status  =props => {
    return(
        <section id="cart">
        <img src="https://cdn2.iconfinder.com/data/icons/seo-internet-marketing-2-5/256/E-commerce_Optimization-512.png" ></img>
        {props.items.inCart.map((val,idx) => {
            return <li key={idx} className="cart">{val}</li>
        })}
        </section>
    )
}

const mapStateToProps = state =>{
    return {items : state.cart}
}

export default connect(mapStateToProps)(status);