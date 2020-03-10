import React from 'react';
import { connect } from 'react-redux';

import { showProducts, reset } from '../store/categories.js';

const RenderProducts = props => {
    // console.log('props in components',props);

    return (
        <section>
            <table>
                <thead>
                    <tr>
                        <th> Name</th>
                        <th> Category</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Inventory Count</th>
                    </tr>
                </thead>
                <tbody>
                    {props.counter.products.map(product =>

                        <tr className={product.showProducts ? 'showed' : ''} >
                            <td onClick={() => props.showProducts(product.name)} key={product.name}>{product.name}</td>
                            <td>{product.category}</td>
                            <td>{product.description}</td>
                            <td>{product.price}</td>
                            <td>{product.inventoryCount}</td>

                        </tr>
                    )}
                </tbody>
            </table>



            <button onClick={props.reset}>RESET</button>
        </section>
    )
}

const mapStateToProps = state => ({
    counter: state.counter
})

const mapDispatchToProps = { showProducts, reset };

export default connect(mapStateToProps, mapDispatchToProps)(RenderProducts);