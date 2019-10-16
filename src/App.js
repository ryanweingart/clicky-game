import React, { Component } from "react";
import Cards from "./components/Cards";
import Nav from "./components/Nav";
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";
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

        <Title>
          The goal of this memorization game is to click each image only once until you get to 12 points. If you hit an image more than once, you lose!
        </Title>

        <Container>
          <Row>
            {this.state.images.map(image => (
              <Column size="md-3 sm-6">
                <Images
                  key={image.id}
                  handleClick={this.handleClick}
                  handleIncrement={this.handleIncrement}
                  handleReset={this.handleReset}
                  handleShuffle={this.handleShuffle}
                  id={image.id}
                  image={image.image}
                />
              </Column>
            ))}
          </Row>
        </Container>
      </Wrapper>
    );
  }
}

export default App;
