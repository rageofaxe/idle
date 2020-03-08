import { BUY, INC } from "../constants/";

type BuyAction = Action<typeof BUY, boolean>;
type IncAction = Action<typeof INC>;

type GameActions = BuyAction | IncAction;
