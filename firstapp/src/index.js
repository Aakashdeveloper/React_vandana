import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Second from './components/Second';
import JSON from './db.json';
import NewsList from './components/news_list'

class App extends Component{
    constructor(props){
        super(props);

        this.state ={
            news: JSON
        }
    }

    render(){
        return(
            <div>
                <Second/>
                <NewsList newstag={this.state.news}/>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));




/*

const App = () => {
    return(
        <div>
            <Second/>
            <h1>First Page</h1>
        </div>
    ) 
}


function add (a,b){
    return a+b
}

let add = (a,b) => return { a+b }

*/
