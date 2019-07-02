import React, { Component } from 'react';
import './App.css';
import NavBar from "./components/nav/nav.js";
import Button from "./components/button/button.js";
import Pokemon from "./cards.json";
import "./style.css";

class App extends Component {
  //This initiallizes any state data
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      Pokemon
    }
  }

  // state = {
  //     score: 0,
  //     highScore: 0
  // };


  // method to pass to button onClick
  buttonClick = (buttonid) => {
    // console.log("button Clicked");
    // console.log("buttonid", buttonid);
    // console.log('this state clicked' + Pokemon[buttonid].clicked);
    // console.log('this state clicked' + Pokemon[buttonid].clicked);
    // based of id check clicked ... 
    this.state.Pokemon.forEach((e, i, array) => {
      if (parseInt(buttonid) === e.id && e.clicked === false) {
        console.log("false");

        console.log(array[i]);

        array[i].clicked = true;
        console.log(array[i]);
        // e.clicked = true
        this.setState({ score: this.state.score + 1 });
        // console.log('this state clicked' + Pokemon[buttonid].clicked);
      }
      else if (buttonid === e.id && e.clicked === true) {
        for(let j = 0; j < array.length; j++) {
          array[j].clicked = false;
        }
        console.log("true");
        this.setState({ score: 0, });
      }

      if(i === array.length - 1) {
        this.setState({
          Pokemon: array.sort(() => Math.random() - .5) 
        })
      }
    })
    //Example of using an array in state.
    // Since we cannot mutate state directly we must first make a 'deep' copy of the array.
    // We then mutate the copy, then setState using the copy.
    let newData = [...this.state.Pokemon];  // deep copy of dataArray using Spread Operator
    //newData[buttonid].clicked = true;
    newData.sort(() => Math.random() - .5);

    // Here update the score and dataArray in my state.


    //  this.setState({clicked: !this.state.clicked});

    // else{
    //   let newData = [...this.state.Pokemon];  // deep copy of dataArray using Spread Operator
    // //newData[buttonid].clicked = true;
    //    newData.sort(()=>Math.random()-.5);
    //    this.setState({Pokemon: newData});
    // }
  };


  render() {

    console.log("RENDERING PAGE");


    //*** return can only return single element so we wrap in div
    return (

      <div className="App">
        <NavBar score={this.state.score} />


        {this.state.Pokemon.map((e, i) => <Button click={this.buttonClick} buttonName={e} key={i} id={e.id} image={e.image} />)}
        <h2>Score: {this.state.score}</h2>
      </div>

    );
  }
}

export default App;
