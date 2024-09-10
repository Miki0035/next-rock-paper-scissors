import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Card = ({ games, link }: { games: string[]; link: string }) => {
  return (
    <div className="group w-full flex justify-between items-center border border-1 border-radialGradient rounded-sm px-2 py-4 cursor-pointer">
      <Link href={link}>
        <h1 className="font-semibold text-4xl mb-2">Play  </h1>
        <div className="flex w-full gap-1 justify-center">
          {games.map((game: string) => (
            <span className="text-sm flex justify-center flex-warp " key={game}>
              {" "}
              {game}
            </span>
          ))}
        </div>
      </Link>
      <div className="flex items-center justify-center">
          <FaArrowRight size={20} className="group-hover:translate-x-2 transition-transform"/>
      </div>
    </div>
  );
};

export default Card;
