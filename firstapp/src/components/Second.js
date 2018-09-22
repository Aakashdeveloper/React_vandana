import React,{ Component } from 'react';

class Second extends Component {
   
    inputChanges(event){
        console.log(event.target.value)
    }

    render(){

        return(
            <header>
                <div className="logo"
                onClick={() => {console.log("sombody clicked")}}>Logo</div>
                <input  type="text" 
                onChange={this.inputChanges}/>
            </header>
        )
    }
}

export default Second;