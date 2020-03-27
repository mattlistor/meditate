import React from 'react';
import './App.css';

function meditate() {
  var breathe = true
  var loop = setInterval(function(){ 
    if (breathe) {
      console.log("breathe in")
    }
    else {
      console.log("breathe OUT")
    }
    breathe = !breathe
  }, 3000);
  clearInterval(loop);
  console.log("turtle")
}

function App() {
  return (
    <div className="App">
      <button onClick={meditate()}>Try it</button>
      <div className="dot">
        turtle
      </div>
    </div>
  );
}

export default App;
