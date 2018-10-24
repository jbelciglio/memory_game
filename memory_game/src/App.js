import React, { Component } from "react";
import ImageCard from "./components/ImageCard";
import Wrapper from "./components/Wrapper"
import images from "./images.json";
import "./App.css";



class App extends Component {
  count = 0;  
  // Setting this.state.friends to the friends json array
  state = {
    images,
    count: 0
  };

shuffle= () => {
  const imgs = [...this.state.images]
  const shuffledArray = [];
  
  while (imgs.length > 0) {
    const index = Math.floor(Math.random() * (imgs.length));
    const image = imgs.splice(index, 1)[0];
    
    shuffledArray.push(image);
};


this.setState(() => ({
  count: this.state.count + 1,
}));


console.log(shuffledArray)
  this.setState(() => ({
    images: shuffledArray
  }));
  console.log(this.state.count);
  console.log(imgs.clicks);
  
}
clickTrack = id => {
  //let num = id - 1;
  //let img = this.state.images[num];

  const thisImg = this.state.images.filter(image => image.id === id);
  const images = this.state.images.filter(image => image.id !== id);
  this.setState({ images });
  console.log(thisImg);
  if (thisImg[0].clicks === true) {
    this.setState(() => ({
      count: this.state.count + 1
    }))
    thisImg[0].clicks = false;
    images.push(thisImg[0]);
  } else if (thisImg[0].clicks === false) {
    alert(`You Lose! Goodday, sir! Your score was: ${this.state.count}`);
    this.setState(() => ({
      count: 0,
    }))
    for (let i=0; i < this.state.images.length; i++) {
      this.state.images[i].clicks = true;
      
    }
  }
  
}



  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      
      <Wrapper>
      {this.state.images.map(images => (
        
          <ImageCard
          shuffle={this.shuffle}
          clickTrack={this.clickTrack}
            id={images.id}
            key={images.id}
            url={images.url}
            
          />
      )
        )}
        </Wrapper>
    )}
      }

export default App;
