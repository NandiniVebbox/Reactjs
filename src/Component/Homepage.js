import React, { Component } from 'react'

export class Homepage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    clickme(event){
        alert(event.target.value)
    }
    
    render() {
        return (
            <div className="App">
                <label>Name</label>
                <input type="text" />
                <input type="button" value="Click me" onClick={()=>this.clickme()}/>

            </div>
        )
    }
}

export default Homepage
