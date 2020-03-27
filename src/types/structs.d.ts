type ms = "miliseconds" & number;
type money = "money" & number;

type Square = {
  speed: ms;
  value: money;
  color: string;
  money:
};

type Store = {
  money: money;
  squares: Square[];
  time: ms;
  level: Level;
};

type Level = {
  result: any;
};
