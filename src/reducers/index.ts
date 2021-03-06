import * as R from "ramda";

import { BUY, INC } from "../constants";

const square: Square = {
  cost: 50,
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

const reducer = (state: Store = initialState, action: GameActions) => {
  switch (action.type) {
    case INC:
      return { ...state, money: state.money + action.payload };
    case BUY:
      const squares = state.squares;
      const idx = R.findIndex(x => x.id === action.payload, squares);
      if (state.money - 50 >= 0) {
        const result = {
          squares: R.pipe(
            R.over(R.lensPath([idx, "value"]), x => x + 1),
            R.over(R.lensPath([idx, "money"]), x => x + 50)
          )(squares),
          money: state.money - (50 + squares[idx].value)
        };
        return result;
      }
      return state;

    default:
      return state;
  }
};

export default reducer;
