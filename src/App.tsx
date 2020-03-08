import * as React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="hud">
        <div>1</div>
        <div>2</div>
      </div>
      <div className="grid">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(x => (
          <div className="square">{x}</div>
        ))}
      </div>
    </div>
  );
}
