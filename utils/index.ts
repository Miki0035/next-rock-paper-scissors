import { gameIconType } from "@/types";

export function getResult(
  selected: string,
  houseSelected: gameIconType
): string {
  let gameResult = " ";
  switch (selected) {
    case "R":
      if (houseSelected.btnType === "P") gameResult = "you lose";
      if (houseSelected.btnType === "S") gameResult = "you win";
      if (houseSelected.btnType === "R") gameResult = "draw";
      if (houseSelected.btnType === "L") gameResult = "you win";
      if (houseSelected.btnType === "SP") gameResult = "you lose";
      break;
    case "P":
      if (houseSelected.btnType === "P") gameResult = "draw";
      if (houseSelected.btnType === "S") gameResult = "you lose";
      if (houseSelected.btnType === "R") gameResult = "you win";
      if (houseSelected.btnType === "L") gameResult = "you lose";
      if (houseSelected.btnType === "SP") gameResult = "you win";
      break;
    case "S":
      if (houseSelected.btnType === "P") gameResult = "you win";
      if (houseSelected.btnType === "S") gameResult = "draw";
      if (houseSelected.btnType === "R") gameResult = "you lose";
      if (houseSelected.btnType === "L") gameResult = "you win";
      if (houseSelected.btnType === "SP") gameResult = "you lose";
      break;
    case "L":
      if (houseSelected.btnType === "P") gameResult = "you win";
      if (houseSelected.btnType === "S") gameResult = "you lose";
      if (houseSelected.btnType === "R") gameResult = "you lose";
      if (houseSelected.btnType === "SP") gameResult = "you win";
      if (houseSelected.btnType === "L") gameResult = "draw";
      break;

    case "SP":
      if (houseSelected.btnType === "P") gameResult = "you lose";
      if (houseSelected.btnType === "S") gameResult = "you win";
      if (houseSelected.btnType === "R") gameResult = "you win";
      if (houseSelected.btnType === "SP") gameResult = "draw";
      if (houseSelected.btnType === "L") gameResult = "you lose";
      break;
  }
  return gameResult;
}
