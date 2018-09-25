import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Second from './components/Second';
import JSON from './db.json';
import NewsList from './components/news_list'

class App extends Component{
    constructor(props){
        super(props);

        this.state ={
            news: JSON,
            filtered: JSON
        }
    }

    filterNews(keywords){
        console.log(keywords)
        let filtered = this.state.news.filter((item)=>{
            return item.title.indexOf(keywords) > -1;
        })

        this.setState({filtered})
    }

    render(){
        return(
            <div>
                <Second newsSearch={(keywords) => this.filterNews(keywords)}/>
                <NewsList newstag={this.state.filtered}/>
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
