import React, { Component } from 'react';

export class Count extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    

    increment(){
        // this.setState({
        //     count:this.state.count+1
        // },()=>console.log(`Callback value ${this.state.count}`)
        // )
        //Passing function as an argument
        this.setState((prevState)=>({count:prevState.count+1}),
        ()=>console.log(`call back value ${this.state.count}`))
    }
    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
    componentDidMount(){
        console.log("Inside Componentndid mount")
    }
    componentWillUnmount() {
        console.log("Inside Componentnwillmount")
      }
    
  render() {
    return (
      <div>
        <b>Counter {this.state.count}</b><br/>
        <button onClick={()=>this.incrementFive()}>Increment</button>
      </div>
    );
  }
}

export default Count;

