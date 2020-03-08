import * as React from "react";
import { useSelector, useDispatch } from "react-redux";

import useInterval from "./hooks/useInterval";
import "./styles.css";

const Square = (props: Square) => {
  const dispatch = useDispatch();

  const buy = () => {
    dispatch({ type: "INC", payload: { id: props.id } });
  };

  useInterval(() => {
    dispatch({ type: "INC", payload: props.value });
  }, 1000);

  return (
    <div className="square" onClick={buy} style={{ background: props.color }}>
      {props.color}
    </div>
  );
};

export default function App() {
  const money = useSelector(x => x.money);
  const squares = useSelector(x => x.squares);

  return (
    <div className="App">
      <div className="hud">
        <div>21</div>
        <div>{money}</div>
      </div>
      <div className="grid">
        {squares.map((square: Square) => (
          <Square color={square.color} value={square.value} id={square.id} />
        ))}
      </div>
    </div>
  );
}
