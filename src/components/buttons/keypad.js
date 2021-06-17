import React, { Component } from 'react'

export default class keypad extends Component {
    render() {
        return (
            <div className= "btn-set">
               
                <button className="btn btn-light" name="CE" onClick={e => this.props.onClick(e.target.name)}>CE</button> 
                <button className="btn btn-light"name="C" onClick={e => this.props.onClick(e.target.name)}>C</button>
                <button className="btn btn-light btn btn-big" name="+" onClick={e => this.props.onClick(e.target.name)}>+</button>
                <br/>


                <button className="btn btn-light" name="1" onClick={e => this.props.onClick(e.target.name)}>1</button>
                <button className="btn btn-light" name="2" onClick={e => this.props.onClick(e.target.name)}>2</button>
                <button  className="btn btn-light" name="3" onClick={e => this.props.onClick(e.target.name)}>3</button>
                <button className="btn btn-light" name="-" onClick={e => this.props.onClick(e.target.name)}>-</button>
                <br/>


                <button className="btn btn-light"name="4" onClick={e => this.props.onClick(e.target.name)}>4</button>
                <button className="btn btn-light"name="5" onClick={e => this.props.onClick(e.target.name)}>5</button>
                <button className="btn btn-light"name="6" onClick={e => this.props.onClick(e.target.name)}>6</button>
                <button className="btn btn-light"name="*" onClick={e => this.props.onClick(e.target.name)}>x</button>
               <br/>

                <button className="btn btn-light"name="7" onClick={e => this.props.onClick(e.target.name)}>7</button>
                <button className="btn btn-light"name="8" onClick={e => this.props.onClick(e.target.name)}>8</button>
                <button className="btn btn-light"name="9" onClick={e => this.props.onClick(e.target.name)}>9</button>
                <button className="btn btn-light"name="/" onClick={e => this.props.onClick(e.target.name)}>÷</button>
                <br/>


                <button className="btn btn-light" name="." onClick={e => this.props.onClick(e.target.name)}>.</button>
                <button  className="btn btn-light"name="0" onClick={e => this.props.onClick(e.target.name)}>0</button>
                <button className="btn btn-light btn btn-big" name="=" onClick={e => this.props.onClick(e.target.name)}>=</button>
                <br/>
            </div>
        )
    }
}
