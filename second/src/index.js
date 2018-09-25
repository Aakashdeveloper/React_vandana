import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component{
    render(){
        return(
            <div class="panel panel-primary">
                <div class="panel-heading">
                    Home pAge
                </div>
                <div class="panel-body">
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App/>,document.getElementById('root'))

