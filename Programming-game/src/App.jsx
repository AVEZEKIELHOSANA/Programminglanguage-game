//import { useState } from 'react'
import { useState, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('');
  const [programLang, setProgramLang]=useState('');
  const [gameOver, setGameOver] = useState(false);
  const [background, setBackgroundColor] = useState('');
  const [trials, setTrials] = useState(0);
  const [failedAttempt, setFailedAttempt] = useState(0);
  const [maxScore, setMaxScore] = useState(0);
  const [showGame, setShowGame] = useState(true);
  const [results, setResults] = useState('');
  const [playDisabled, setPlayIsDisabled] = useState(false);

  const [resetButton, setResetButton] = useState(false)



const [game,setGame] = useState([
  { name: 'JavaScript', color: 'Yellow' },
  { name: 'Python', color: 'Blue' },
  { name: 'Java', color: 'Orange' },
  { name: 'C++', color: 'Light Blue' },
  { name: 'C#', color: 'Green' },
  { name: 'Ruby', color: 'Red' },
  { name: 'Swift', color: 'Light Orange' },
  { name: 'PHP', color: 'Purple' },
  { name: 'Go', color: 'Light Green' },
  { name: 'Rust', color: 'Brown' },
  { name: 'Kotlin', color: 'Dark Orange' },
  { name: 'TypeScript', color: 'Dark Blue' },
  { name: 'Scala', color: 'Red Brown' },
  { name: 'Haskell', color: 'Green Blue' },
  { name: 'Perl', color: 'Light Blue Green' },
  { name: 'MATLAB', color: 'Deep Blue' },
  { name: 'SQL', color: 'Golden Yellow' },
  { name: 'Visual Basic', color: 'Purple Pink' },
  { name: 'Delphi', color: 'Dark Red' },
  { name: 'COBOL', color: 'Sky Blue' },
  { name: 'Fortran', color: 'Forest Green' },
  { name: 'Pascal', color: 'Dark Green' },
  { name: 'Assembly', color: 'Grey Blue' },
  { name: 'Lisp', color: 'Dark Grey' },
  { name: 'Scheme', color: 'Sea Green' },
  { name: 'Prolog', color: 'Light Grey' },
  { name: 'Erlang', color: 'Pink' },
  { name: 'Lua', color: 'Royal Blue' },
  { name: 'Tcl', color: 'Golden Brown' },
  { name: 'R', color: 'Deep Blue Green' },
  { name: 'Julia', color: 'Bright Pink' },
  { name: 'Dart', color: 'Dark Navy Blue' },
  { name: 'F#', color: 'Bright Green' },
  { name: 'Crystal', color: 'Purple Grey' },
  { name: 'Nim', color: 'Dark Sea Green' },
  { name: 'OCaml', color: 'Dark Forest Green' },
  { name: 'Clojure', color: 'Bright Blue Green' },
  { name: 'Groovy', color: 'Light Brown' },
  { name: 'CoffeeScript', color: 'Dark Navy Grey' },
  { name: 'ActionScript', color: 'Golden Grey' },
  { name: 'Vala', color: 'Dark Green Blue' },
  { name: 'Haxe', color: 'Bright Orange' },
  { name: 'Pike', color: 'Dark Red Brown' },
  { name: 'Squeak', color: 'Light Sea Green' },
  { name: 'Smalltalk', color: 'Dark Sea Green' },
  { name: 'Eiffel', color: 'Purple Pink' },
  { name: 'ABAP', color: 'Dark Navy Blue' },
]);

//Showing programming languages for 4s
useEffect(()=>{
  setShowGame(true);
  const timer = setTimeout(()=>
  {
setShowGame(false);
  },4000);
  return()=>clearTimeout(timer);
  
     }, []);

//functions and event handeling
  function handleLangChange(e) {
let program = e.target.value;
setProgramLang(program);
  }
  function handleColorChange(e){
let color = e.target.value;
setColor(color);
  }
  //onClick event
  function handleClickEvent(e){

    e.preventDefault();
    //find is a method used for searching through the array game
const language = game.find((game) =>
game.name == programLang);
//verifying that the form is filled
if(programLang.length == 0 || color.length==0){
  setResults('Please enter the color and programming language');
  setBackgroundColor('red');
}
//check if promming languages match
else if(language && language.color == color){
  setResults('You are Correct');
  setBackgroundColor(color);
  setTrials(trials+1);
 // to reset form
  
}else {
  setFailedAttempt(failedAttempt+1);
setResults('You have failed');
setBackgroundColor('red');
setTrials(trials+1);
setFailedAttempt(failedAttempt+1);

}

if(failedAttempt == 4 || trials == 19){
  setGameOver(true);
  setResults('The game is Over');
  setPlayIsDisabled(true);
  maxScore = 20 - failedAttempt;
  setMaxScore('Your Score is ' + maxScore);
  
}
else{
  setPlayIsDisabled(false);
}
  }

    
        


  
  return (
    <div>
    <div>
    {showGame &&(
      
      <div>
        {game.map((language) =>(

          <div key={language.name}
          style={{backgroundColor: language.color}}>{language.name}</div>

        ))}
      </div>

    )}
    </div>
    
      <div className='input'>
        <span style={{backgroundColor: background}}>Programming language:</span><input onChange={handleLangChange} type="text"/><br/>
        <span style={{backgroundColor: background}}>Color:</span><input onChange={handleColorChange} type='text' /><br/>
      </div><br/>
<button onClick={handleClickEvent} disabled={playDisabled}>Play</button><br/><br/>
<div style={{backgroundColor: background}}>
{trials}
{results}
{maxScore}
</div>

    </div>
  )
}
  
export default App
