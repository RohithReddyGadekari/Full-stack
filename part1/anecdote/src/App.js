import React, { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
  ];
  const [points, setPoints] = useState([0, 0, 0, 0, 0, 0]);
  const [top, setTop] = useState(0);
  const [topIndex, setTopIndex] = useState(0);

  const handleVote = () => {
    const copy = [...points];
    copy[selected] += 1;
    setPoints(copy);

    const topNum = [...copy];
    setTopIndex(topNum.indexOf(Math.max(...topNum)));

    setTop(Math.max(...topNum));
  };

  const [selected, setSelected] = useState(0);
  const handleClick = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>Has {points[selected]} points</p>
      <p>
        <button onClick={handleVote}>Vote</button>
        <button onClick={handleClick}>Next anecdote</button>
      </p>

      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[topIndex]}</p>
      <p>Has {top} points</p>
    </div>
  );
};

export default App;