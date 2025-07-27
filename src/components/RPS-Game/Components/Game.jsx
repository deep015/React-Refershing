import React, { useState } from "react";
import ScoreBoard from "./ScoreBoard";
import Result from "./Resullt";
import getResult from "../Utils/getResult";

const choices = ["rock", "paper", "scissors"];

const Game = () => {
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [result, setResult] = useState("");
  const [gameOver, setGameOver] = useState(false);

  const handleClick = (playerChoice) => {
    if (gameOver) return;

    const computerChoice = choices[Math.floor(Math.random() * 3)];
    const outcome = getResult(playerChoice, computerChoice);

    if (outcome === "win") {
      setPlayerScore((prev) => {
        const newScore = prev + 1;
        if (newScore === 10) setGameOver(true);
        return newScore;
      });
    } else if (outcome === "lose") {
      setComputerScore((prev) => {
        const newScore = prev + 1;
        if (newScore === 10) setGameOver(true);
        return newScore;
      });
    }

    setResult(`You chose ${playerChoice}. Computer chose ${computerChoice}. You ${outcome}!`);
  };

  const resetGame = () => {
    setPlayerScore(0);
    setComputerScore(0);
    setResult("");
    setGameOver(false);
  };

  return (
    <div className="bg-white p-8 rounded shadow-md w-full max-w-md text-center">
      <h1 className="text-2xl font-bold mb-4">Rock Paper Scissors</h1>
      <ScoreBoard playerScore={playerScore} computerScore={computerScore} />

      {gameOver && (
        <h2 className="text-xl font-semibold text-green-600 mb-4">
          {playerScore === 10 ? "🎉 You Win the Game!" : "😔 Computer Wins the Game!"}
        </h2>
      )}

      <div className="flex justify-center gap-4 my-4">
        {choices.map((choice) => (
          <button
            key={choice}
            className="bg-blue-500 text-black px-4 py-2 rounded hover:bg-blue-600"
            onClick={() => handleClick(choice)}
            disabled={gameOver}
          >
            {choice}
          </button>
        ))}
      </div>

      <Result message={result} />

      <button
        className="mt-6 bg-red-500 text-black px-4 py-2 rounded hover:bg-red-600"
        onClick={resetGame}
      >
        Reset Game
      </button>
    </div>
  );
};

export default Game;
