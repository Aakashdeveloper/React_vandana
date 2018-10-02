// Get Default State
// Set Initial State
// Before get created
// Rendeer JSX
// after componted mounted

import React, {Component} from 'react'

class LifeCycle extends Component {

    // Get Default State
    constructor(props){
        super(props)

        // Set Initial State
        this.state = {
            title:'this is lifecycle'
        }
    }
    

    componentWillMount(){
       
    }

    componentWillUpdate(){
        console.log("before update")
    }

    componentDidUpdate(){
        console.log("after update")
    }

    shouldComponentUpdate(){
        
    }

    // Rendeer JSX1
    render(){
        return (
            <div>
                <h3>{this.state.title}</h3>
            </div>
        )
    }

    componentDidMount(){
        document.querySelector('h3').style.color="red"
    }

    // on Destroy
    componentWillUnmount(){
        alert("are you want to leave")
    }

   
}



export default LifeCycle 