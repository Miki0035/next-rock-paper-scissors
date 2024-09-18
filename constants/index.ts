import { gameIconType, IconType } from "@/types";

export const games = {
  first: ["rock", "paper", "scissors"],
  second: ["rock", "paper", "scissors", "lizard", "spock"],
};

export const gameOneIcons : gameIconType[] = [
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

export const gameTwoIcons : gameIconType[] = [
  {
    
    img: new URL("../assets/images/icon-spock.svg", import.meta.url).href,
    btnType: "SP",
  },
  {
    img: new URL("../assets/images/icon-scissors.svg", import.meta.url).href,
    btnType: "S",
  },
  {
    img: new URL("../assets/images/icon-paper.svg", import.meta.url).href,
    btnType: "P",
  },
  {
    
    img: new URL("../assets/images/icon-lizard.svg", import.meta.url).href,
    btnType: "L",
  },
  {
    
    img: new URL("../assets/images/icon-rock.svg", import.meta.url).href,
    btnType: "R",
  },
 
];
