import React from 'react'

const ScoreBoard = ({playerScore,computerScore}) => {

  return (
    <div className="flex justify-around text-lg font-semibold mb-4">
        <div>👨 Player: {playerScore}</div>
      <div>💻 Computer: {computerScore}</div>

    </div>
  )
}

export default ScoreBoard