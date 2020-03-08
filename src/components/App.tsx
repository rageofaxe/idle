import * as React from "react";
import { useSelector } from "react-redux";

import Square from "./Square";
import "../styles.css";

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
          <Square
            key={square.id}
            color={square.color}
            value={square.value}
            id={square.id}
          />
        ))}
      </div>
    </div>
  );
}
