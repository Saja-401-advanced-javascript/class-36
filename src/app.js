import React from 'react';
import Header from './components/header.js';
import Footer from './components/footer.js';
import Categories from './components/categories.js';
import Products from './components/products.js';
import './style.scss';

class App extends React.Component {
    render() {
        return (
            <>
            <Header />
            {/* <Categories />  */}
            <Products />           
            <Footer />
            </>
        )
    }
}

export default App