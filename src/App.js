import React, { Component } from 'react';
import './App.css';
import NavBar from "./components/nav/nav.js"; 
import Button from "./components/button/button.js";       
import Pokemon from "./cards.json";
import "./style.css";

class App extends Component {
    //This initiallizes any state data
    constructor(props){
      super(props);
      this.state = {
        score:0,
       clicked:false,
       Pokemon
    }
}

    // state = {
    //     score: 0,
    //     highScore: 0
    // };


    // Newer way to define state. May not work in all react set-ups but will work using create-react-app/
    //state = {score: 0}

    // method to pass to button onClick
    // So when button is clicked we mutate this.state.score
    buttonClick = (buttonid)=>{
      console.log("button Clicked");
     console.log("buttonid", buttonid);
     if(!this.state.clicked){
     // based of id check clicked ... 
  
      //Example of using an array in state.
      // Since we cannot mutate state directly we must first make a 'deep' copy of the array.
      // We then mutate the copy, then setState using the copy.
        let newData = [...this.state.Pokemon];  // deep copy of dataArray using Spread Operator
      //newData[buttonid].clicked = true;
         newData.sort(()=>Math.random()-.5);
     
      // Here we update the score and dataArray in our state.
        this.setState({score: this.state.score + 1, Pokemon: newData});
     }
     else{
       this.setState({clicked:true},buttonid);
     }
     };


  render() {

    console.log("RENDERING PAGE");
  

    //*** return can only return single element so we wrap in div
    return (
      
      <div className="App">
        <NavBar score={this.state.score} />

        {/* <p className="App-intro">
         This paragraph is not a component. Its just JSX code.
        </p> */}

        {/* Just displaying our dataArray in state to show its updating*/}
        {/* <p>dataArray in state: {this.state.Pokemon.join(",")}</p> */}

        {this.state.Pokemon.map((e,i)=> <Button click={this.buttonClick} buttonName={e} key={i} id={i} image={e.image}/>)}
        <h2>Score: {this.state.score}</h2>
      </div>

    );
  }
}

export default App;
