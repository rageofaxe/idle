import * as React from "react";
import { useDispatch } from "react-redux";
import { BUY, INC } from "../constants";

import useInterval from "../hooks/useInterval";

export default (props: Square) => {
  const dispatch = useDispatch();

  const buy = () => {
    dispatch({ type: BUY, payload: props.id });
  };

  useInterval(() => {
    dispatch({ type: INC, payload: props.value });
  }, 1000);

  return (
    <div className="square" onClick={buy} style={{ background: props.color }}>
      {props.value}
    </div>
  );
};
