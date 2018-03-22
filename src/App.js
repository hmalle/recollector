import React, { Component } from "react";
import ImageCard from "./components/ImageCard";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Jumbotron from "./components/Jumbotron";
import images from "./images.json";
import "./App.css";

class App extends Component {
  // Setting this.state.images to the images json array
  state = {
    images: images,
    unclicked: images,
    currentScore: 0,
    highScore:0
  };

  playEvent = id =>
  {
    if(this.state.unclicked.find(item=>item.id===id)){
      this.setState({unclicked: this.state.unclicked.filter(image=>image.id !==id)});
      this.setState({currentScore: this.state.currentScore+1});
      //update the higher score TODO: why is currentScore behind highScore
      if(this.state.currentScore >= this.state.highScore){
        this.setState({highScore: this.state.currentScore+1});
      }
      if(this.state.unclicked.length<1){
        //refresh the list of unclicked images
        this.setState({ unclicked: images, images: images});
      }
    }else{
      this.setState({currentScore: 0,unclicked:images});
    }
    var shuffled = this.state.images.map((a) => [Math.random(),a]).sort((a,b) => a[0]-b[0]).map((a) => a[1]);
    this.setState({images: shuffled});
  };
  
  // Map over this.state.images and render a ImageCard component for each image object
  render() {
    return (
      <div className="container-fluid">
        <Header>
          score:{this.state.currentScore}  
          /topScore:{this.state.highScore}
        </Header>
        <Jumbotron></Jumbotron>
        <Wrapper>
          {this.state.images.map(image => (
            <ImageCard
              playEvent={this.playEvent}
              removeImage={this.removeImage}
              id={image.id}
              key={image.id}
              image={image.image}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
