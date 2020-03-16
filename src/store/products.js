let initialSatate = {
  category: {

    Nike: ['shoes', 'bags', 'sokes'],
    Adidas: ['pants', 'shirts', 'balls', 'cascades'],
    Gucci: ['dresses', 'hats', 'hand bags', 'nickless'],

  },
  output: [],
};

export default (state = initialSatate, action) => {
  let { type, payload } = action;

  switch (type) {
  case 'choose':
    let category = state.category;
    let output = state.category[payload];

    return { category, output };

  default:
    return state;
  }
};

export const chooseList = (clicked) => {
  return {
    type: 'choose',
    payload: clicked,
  };
};

