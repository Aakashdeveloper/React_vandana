import React,{ Component } from 'react';

class Second extends Component {
    
    constructor(props){
        super(props)

        this.state={
            keywords:''
        }
    }

    inputChanges(event){
        console.log(event.target.value)
        this.setState({keywords:event.target.value})
        this.props.newsSearch(event.target.value);
    }

    render(){

        return(
            <header className="header">
                <div className="logo"
                onClick={() => {console.log("sombody clicked")}}>Logo</div>
                <input  type="text" 
                onChange={this.inputChanges.bind(this)}/>
                <h2>{this.state.keywords}</h2>
            </header>
        )
    }
}

export default Second;