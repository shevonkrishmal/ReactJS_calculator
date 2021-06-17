import React, { Component } from 'react';
import './body.css';
import Keypad from '../buttons/keypad';
import DisplayResult from '../result/displayResult';



export default class body extends Component {
     constructor(){
        super();

        this.state = {
            result: ""
        }
    }

    onClick = button => {

        if(button === "="){
            this.calculate()
        }

        else if(button === "C"){
            this.reset()
        }
        else if(button === "CE"){
            this.backspace()
        }

        else {
            this.setState({
                result: this.state.result + button
            })
        }
    };


    calculate = () => {
        var checkResult = ''
        if(this.state.result.includes('--')){
            checkResult = this.state.result.replace('--','+')
        }

        else {
            checkResult = this.state.result
        }

        try {
            this.setState({
    
                result: (eval(checkResult) || "" ) + ""
            })
        } catch (e) {
            this.setState({
                result: "error"
            })

        }


    };

    reset = () => {
        this.setState({
            result: ""
        })
    };

    backspace = () => {
        this.setState({
            result: this.state.result.slice(0, -1)
        })
    };
    
    

    render() {
        return (
            <div className = "col-md-4 offset-md-3">
                <h1 style={{ textAlign: 'center' }}>Calculator</h1>
                <div className="card text-dark bg-light mb-3">
                    <div className = "row"> <DisplayResult result={this.state.result}/></div>
                    <div className = "row"> <Keypad onClick={this.onClick}/></div>
                   
                    </div>

            </div>
        );
    }
}

