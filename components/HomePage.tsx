import React from "react";
import { games } from "@/constants";
import Card from "./Card";
const HomePage = () => {
  return (
    <main className="w-full h-screen flex justify-center items-center">
      <section className="w-4/5 flex flex-col gap-10 items-center sm:w-96">
        <Card games={games.first} link={"rock-paper-scissors"} />
        <Card games={games.second} link={"rock-paper-scissors-lizard-spock"} />
      </section>
    </main>
  );
};

export default HomePage;
