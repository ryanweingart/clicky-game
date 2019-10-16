import React from "react";
import Cards from "./components/Cards";
import Nav from "./components/Nav";
import Title from "./components/Title";
import Container from "./components/Container";
import images from "./images.json";
import "./App.css";

function shuffledImages(array) {
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
    winOrLose: "",
    clicked: []
  };

  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.handleReset();
    }
  };

  handleIncrement = () => {
    const newScore = this.state.score + 1;

    this.setState({
      score: newScore,
      winOrLose: ""
    });

    if (newScore >= this.state.highScore) {
      this.setState({ highScore: newScore});
    } else if (newScore === 12) {
      this.setState({ winOrLose: "You Win!"});
    } 
    this.handleShuffle();
  };

  handleReset = () => {
    this.setState({
      score: 0,
      highScore: this.state.highScore,
      winOrLose: "You Lose!",
      clicked: []
    });
    this.handleShuffle();
  };

  handleShuffle = () => {
    let shuffledImages = shuffleImages(images);
    this.setState({ images: shuffledImages});
  };

  render() {
    return (
      <Wrapper>
        <Nav
          title="Clicky Game"
          score={this.state.score}
          highScore={this.state.highScore}
          winOrLose={this.state.winOrLose}
        />
        
      </Wrapper>
    )
  }
}

export default App;
