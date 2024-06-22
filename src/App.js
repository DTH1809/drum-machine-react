import './App.css';
import React, { useEffect , useState} from 'react';

function App() {

  const keyToIdMap = {
    Q: 'heater1',
    W: 'heater2',
    E: 'heater3',
    A: 'heater4',
    S: 'clap',
    D: 'open-hh',
    Z: 'kick-n-hat',
    X: 'kick',
    C: 'closed-hh'
  };

  const [volume, setVolume] = useState(0.5); // Initial volume set to 50%

  const playAudio = (event) => {
    const audio = document.getElementById(event.target.innerText);
    console.log(event.target.id)
    if (audio) {
      if (!audio.paused) {
        audio.pause();
        audio.currentTime = 0;
      }
      audio.volume = volume;
      audio.play().catch(error => console.log('Audio play error:', error));
      document.getElementById("display").innerText = `${event.target.id}`
    }
  }

  const handleKeyPress = (event) => {
      console.log(event)
      const audio = document.getElementById(event.key.toUpperCase());
      if (audio) {
        if (!audio.paused) {
          audio.pause();
          audio.currentTime = 0;
        }
        audio.volume = volume;
        audio.play().catch(error => console.log('Audio play error:', error));
        document.getElementById("display").innerText = keyToIdMap[event.key.toUpperCase()]
      }
    }

  useEffect(() => {
      document.addEventListener('keydown', handleKeyPress);
      return () => {
        document.removeEventListener('keydown', handleKeyPress);
      };
    }, []);

    const handleVolumeChange = (event) => {
      setVolume(event.target.value);
    };

  

  return (
    <div className="App">
      <div id='drum-machine'>
        <div id='drum-pads-container'>
          <button className='drum-pad' id="heater1" onClick={playAudio} tabIndex="0">
            Q
            <audio className='clip' id='Q' src='https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3'></audio>
          </button>
          <button className='drum-pad' id="heater2" onClick={playAudio} tabIndex="0">
            W
            <audio className='clip' id='W' src='https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3'></audio>
          </button>
          <button className='drum-pad' id="heater3" onClick={playAudio} tabIndex="0">
            E
            <audio className='clip' id='E' src='https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3'></audio>
          </button>
          <button className='drum-pad' id="heater4" onClick={playAudio} tabIndex="0">
            A
            <audio className='clip' id='A' src='https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3'></audio>
          </button>
          <button className='drum-pad' id="clap" onClick={playAudio} tabIndex="0">
            S
            <audio className='clip' id='S' src='https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3'></audio>
          </button>
          <button className='drum-pad' id="open-hh" onClick={playAudio} tabIndex="0">
            D
            <audio className='clip' id='D' src='https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3'></audio>
          </button>
          <button className='drum-pad' id="kick-n-hat" onClick={playAudio} tabIndex="0">
            Z
            <audio className='clip' id='Z' src='https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3'></audio>
          </button>
          <button className='drum-pad' id="kick" onClick={playAudio} tabIndex="0">
            X
            <audio className='clip' id='X' src='https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3'></audio>
          </button>
          <button className='drum-pad' id="closed-hh" onClick={playAudio} tabIndex="0">
            C
            <audio className='clip' id='C' src='https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3'></audio>
          </button>
        </div>
        <div id='control-bar'>
          <h1>Drum Machine</h1>
          <div id='display'></div>
          <input 
            type="range" 
            min="0" 
            max="1" 
            step="0.01" 
            value={volume} 
            onChange={handleVolumeChange}
            aria-label="Volume control"
          />
          <p>Volume: {Math.round(volume * 100)}%</p>
        </div>
      </div>

    </div>
  );
}

export default App;
