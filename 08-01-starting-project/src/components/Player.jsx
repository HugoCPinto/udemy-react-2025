import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef();
  const [enteredPlayerName, setEnteredPlayerName] = useState('');

  function handleclick(){
    setEnteredPlayerName(playerName.current.value);
    playerName.current.value = '';
  }

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? 'unknwon entity'}</h2>
      <p>
        <input ref={playerName} type="text"/>
        <button onClick={handleclick}>Set Name</button>
      </p>
    </section>
  );
}
