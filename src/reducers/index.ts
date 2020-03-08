import * as R from "ramda";

const square: Square = {
  speed: 1000,
  value: 0,
  color: "gray"
};

const setId = R.set(R.lensProp("id"), R.__, square);

// prettier-ignore
const initialState: Store = {
  money: 100,
  squares: [
    setId(1), setId(2), setId(3),
    setId(4), setId(5), setId(6),
    setId(7), setId(8), setId(9),
  ]
};

const reducer = (state: Store = initialState, action) => {
  switch (action.type) {
    case "INC":
      return { ...state, money: state.money + action.payload };
    case "BUY":
      if (state.money > 50) {
        return { ...state, money: state.money - 50 };
      }
      return state;

    default:
      return state;
  }
};

export default reducer;
