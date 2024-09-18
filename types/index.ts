import { Dispatch, SetStateAction } from "react";

export type RulesModalProps = {
  close: () => void;
};

export type IconType = "P" | "S" | "R" | "L" | "SP" |  "" ;
export type GameType = 1 | 2;

export type gameIconType = {
  img: string;
  btnType: IconType;
};

export type GameContextProps = {
  score: number;
  setScore: Dispatch<SetStateAction<number>>;
  selectedBtn: string;
  setSelectedBtn: Dispatch<SetStateAction<string>>;
  gameReset: () => void;
  setResult: Dispatch<SetStateAction<string>>;
  result: string;
};
