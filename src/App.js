import React, { useState } from 'react';
import HaydenMoods from './data/index';
import './App.css';

function App() {
  const [didClickButton, setButtonAsClicked] = useState(false);
  const [haydenMood, setHaydenMood] = useState({});

  const getHaydenMood = () => {
    const numberOfHaydenMoods = HaydenMoods.length;
    const randomHaydenMood =
      HaydenMoods[Math.floor(Math.random() * numberOfHaydenMoods)];

    setButtonAsClicked(true);
    setHaydenMood(randomHaydenMood);
  };

  return (
    <main>
      <header>
        <h1>What "Hayden Mood" are you in today?</h1>
      </header>

      <div class="mood-container">
        {!didClickButton ? (
          <button onClick={getHaydenMood}>Tell Me My "Hayden Mood"</button>
        ) : (
          <div className="mood">
            <h2>{haydenMood.name}</h2>

            <div className="image-container">
              <img src={haydenMood.imageSource} alt="Hayden Looking Silly" />
            </div>

            <p>{haydenMood.description}</p>
          </div>
        )}
      </div>
    </main>
  );
}

export default App;
