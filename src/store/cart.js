let initialState = {
  inCart: [],
};

export default  (state = initialState , action) => {
    let { type, payload } = action;

    switch (type) {
        case 'ADD':
            let inCart = [...state.inCart, payload]
            return { inCart }

        default:
            return state;
    }
}

export const addItem = (item) => {
    return {
        type: 'ADD',
        payload: item
    }
}