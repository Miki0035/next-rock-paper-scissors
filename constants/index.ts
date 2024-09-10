import { gameOneIconType, IconType } from "@/types";

export const games = {
  first: ["rock", "paper", "scissors"],
  second: ["rock", "paper", "scissors", "lizard", "spock"],
};

export const gameOneIcons : gameOneIconType[] = [
  {
    img: new URL("../assets/images/icon-paper.svg", import.meta.url).href,
    btnType: "P",
  },
  {
    img: new URL("../assets/images/icon-scissors.svg", import.meta.url).href,
    btnType: "S",
  },
  {
    
    img: new URL("../assets/images/icon-rock.svg", import.meta.url).href,
    btnType: "R",
  }
];
