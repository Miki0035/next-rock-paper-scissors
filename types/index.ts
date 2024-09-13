import { Dispatch, SetStateAction } from "react";

export type RulesModalProps = {
    close: () => void
}

export type IconType =   "P"  |  "S"  | "R" | ""

export type gameOneIconType = {
    img: string;
    btnType: IconType
}

export type GameContextProps = {
    score: number;
    setScore: Dispatch<SetStateAction<number>>;
    selectedBtn: string;
    setSelectedBtn: Dispatch<SetStateAction<string>>
}