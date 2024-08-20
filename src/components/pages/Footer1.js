import React, { Component } from 'react';

class Footer1 extends Component{
  constructor(){
    super()
          this.state = {
            message : 'Hare Krishna',
            Name: 'Janki',
            Id: '23'
          }
    
  }
changeMessage(){
  this.setState(
    {
      message : "Thank you for subscribing",
      Name: 'Ramkrishna',
      Id: '25'
    }
  )
}
changeName(){
  this.setState(
    {
      Name: 'Ramkrishna'
    }
  )
}
changeId(){
  this.setState(
    {
      Id: '25'
    }
  )
}

  render() {
    return (
      <div>
        <h1>
        {this.state.message}
        {this.state.Name}
        {this.state.Id}
        <button onClick={() => this.changeMessage()}>Radha</button>
        <button onClick={()=> this.changeName()}>Radha1</button>
        <button onClick={()=> this.changeId()}>Radha2</button>
        </h1>
      
      </div>

    )
  }
    
  
}

export default Footer1;   