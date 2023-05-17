import Team from "../app";
import Character from "../character";

test("Добавление персонажа", () => {
  const team = new Team();
  team.add("Elena");
  expect(() => team.add("Elena")).toThrow("Такой игрок уже существует");
});
  
test("Добавление нескольких персонажей", () => {
  const players = new Team();
  const FirstPlayer = new Character("Elena");
  const SecondPlayer = new Character("Alex");
  const ThirdPlayer = new Character("Andrey");
  players.addAll(FirstPlayer, SecondPlayer, ThirdPlayer);
  expect(players.members.size).toEqual(3);
});
  
test("Конвертиция в массив", () => {
  const team = new Team();
  team.addAll("Alex", "Elena", "Andrey", "Mary");
  team.toArray();
  expect(team.members).toEqual(["Alex", "Elena", "Andrey","Mary"]);
});
