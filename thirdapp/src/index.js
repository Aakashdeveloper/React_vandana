import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route} from 'react-router-dom';

import Home from './components/home';
import Artist from './components/artist'

ReactDOM.render(
    <BrowserRouter>
    <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/artist/:artistid" component={Artist} />
    </div>
    </BrowserRouter>, document.getElementById('root'));



