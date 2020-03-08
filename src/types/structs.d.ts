type ms = "miliseconds" & number;
type money = "money" & number;

type Square = {
  speed: ms;
  value: money;
  color: string; 
}

type Store = {
  money: money;
  squares: Square[];
}
