import React from 'react';
import ReactDOM from 'react-dom';

import Second from './components/Second';


const App = () => {
    return(
        <div>
            <Second/>
            <h1>First Page</h1>
        </div>
    ) 
}

ReactDOM.render(<App/>, document.getElementById('root'));




/*
function add (a,b){
    return a+b
}

let add = (a,b) => return { a+b }

*/
