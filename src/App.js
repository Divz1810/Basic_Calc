import React from 'react';
import './App.css';
import Input from './components/Input';
import Operator from './components/Operator';

class App extends React.Component{

  state= {
    currInput:"",
  }

  HandleOp= (val)=>{

    if(val==="="){
      this.calculate();
    }else if(val==="C"){
      this.clear();
    }else{
      let newval= this.state.currInput+val;
      this.setState({currInput: newval});
    }
  }

  clear= ()=>{
    this.setState({currInput: ""});
  }

  calculate =() =>{
            var checkResult = ''
            checkResult = this.state.currInput

        try {
            this.setState({
                // eslint-disable-next-line
                currInput: (eval(checkResult) || "" ) + ""
            })
        } catch (e) {
            this.setState({
                currInput: "error"
            })

        }
  }



  render=()=>{
    return (
      <div className="calc">
        <h2>Calculator</h2>
        <Input currInput={this.state.currInput} />
        <Operator HandleOp={this.HandleOp} />
      </div>
    );
  }
}

export default App;
