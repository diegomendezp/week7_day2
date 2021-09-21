import React from 'react';

class Counter extends React.Component {
  constructor(){
    super();

    this.state = {
      counterValue: 0
    }
  }


  addValue = () => {
    if(this.state.counterValue < 10){
      this.setState({
        counterValue: this.state.counterValue + 1
      })
    }
  }

  substractValue = () => {
    if(this.state.counterValue > 0){
      this.setState({
        counterValue: this.state.counterValue - 1
      })
    }
  }
  
  render(){
    return (
      <div>
        <p>{this.state.counterValue}</p>
  
        <button onClick={() => this.substractValue()}>{this.state.counterValue <= 0 ? "Límite alcanzado" : "Restar valor"}</button>
        <button onClick={() => this.addValue()}>{this.state.counterValue < 10 ? "Sumar valor" : "Límite alcanzado"}</button>
      </div>
    )
  }
}

export default Counter;