let initialState = {
    categories: [
        { displayName: 'Nike', products: 'shoes', spans: '', span: '', description: ' It is an American multinational corporation that is engaged in the design, development, manufacturing, and worldwide marketing and sales of footwear, apparel, equipment, accessories, and services.' },
        { displayName: 'Adidas', products: 'boots', span: '', spans: '', description: ' It is a multinational corporation, founded and headquartered in Herzogenaurach, Germany, that designs and manufactures shoes, clothing and accessories' },
        { displayName: 'Gucci', products: 'bags', span: '', spans: '', description: 'It is an Italian luxury brand of fashion and leather goods' },
        { displayName: 'Versace', products: 'belts', span: '', spans: '', description: 'It is an Italian luxury fashion company and trade name founded by Gianni Versace in 1978. ' },
        { displayName: 'Polo', products: 'T-shirt', span: '', spans: '', description: 'It is a form of shirt with a collar, a placket neckline with three buttons, and an optional pocket.' }
    ],
    products: [
        { category: 'Nike', name: 'shoes', description: 'cool shoes', price: '20$', inventoryCount: '5' },
        { category: 'Adidas', name: 'boots', description: 'sporty shoes', price: '20$', inventoryCount: '15' },
        { category: 'Versace', name: 'belts', description: 'leather belts', price: '10$', inventoryCount: '10' },
        { category: 'Gucci', name: 'bags', description: 'black bags', price: '15$', inventoryCount: '9' },
        { category: 'Polo', name: 'T-shirt', description: 'sport shirts', price: '15$', inventoryCount: '7' }

    ]
}

//reduser ==> pure function

export default (state = initialState, action) => {
    let { type, payload } = action;

    switch (type) {
        case 'ACTIVAT':

            console.log('iiiiiiiiiiiiii');
            let categories = state.categories.map(category => {
                if (category.displayName === payload) {
                    return { displayName: category.displayName, span: category.span + category.description, spans: category.spans + category.products }
                }
                return category
            })
            return { categories };

        case 'SHOWPRODUCTS':
            
            let products = state.products.map(product => {
                if (product.name === payload) {
                    return { name: product.name, description: product.description, price: product.price, inventoryCount: product.inventoryCount };
                }
                return product
            })
            return { products }


        case 'RESET':
            return initialState

        default:
            return state;
    }
}





export const activate = (category) => {
    return {
        type: 'ACTIVAT',
        payload: category
    }
}

export const showProducts = (product) => {
    return {
        type: 'SHOWPRODUCTS',
        payload: product
    }
}

export const reset = () => {
    return {
        type: 'RESET'
    }
}


