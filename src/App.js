import React, { Component } from "react";
import Cards from "./components/Cards";
import Nav from "./components/Nav";
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";
import Container from "./Container";
import Row from "./Row";
import Column from "./Column";
import images from "./images.json";
import "./App.css";

function shuffleImages(array) {
  for (let i = array.length - 1; i > 0; i--) {
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

    if (newScore === 12) {
      this.setState({ 
        score: 0,
        highScore: newScore,
        winOrLose: "You Win!",
        clicked: []
      });
    } else if (newScore >= this.state.highScore){
      this.setState({ highScore: newScore });
    }

    this.handleShuffle();
  };

  handleReset = () => {
    this.setState({
      score: 0,
      highScore: this.state.highScore,
      winOrLose: "Try Again!",
      clicked: []
    });
    this.handleShuffle();
  };

  handleShuffle = () => {
    let shuffledImages = shuffleImages(images);
    this.setState({ images: shuffledImages });
  };

  render() {
    return (
      <Wrapper>
        <Nav
          title="Development Clicky"
          score={this.state.score}
          highScore={this.state.highScore}
          winOrLose={this.state.winOrLose}
        />

        <Title>
          Test your memory! Click each image only once as they shuffle to reach 12 points!
        </Title>

        <Container>
          <Row>
            {this.state.images.map(image => (
              <Column size="md-3 sm-6">
                <Cards
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
