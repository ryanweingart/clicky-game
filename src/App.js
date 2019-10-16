import React from "react";
import Cards from "./components/Cards";
import Header from "./components/Header";
import Title from "./components/Title";
import Container from "./components/Container";
import images from "./images.json";
import "./App.css";

function shuffleImages(array) {
  for (let i = array.length - 1; i < 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

class App extends Component {
  state = {
    images,
    score: 0,
    highScore: 0,
    rightOrWrong: "",
    clicked: []
  };

  handleClick = id => {
    
  }
}

export default App;
