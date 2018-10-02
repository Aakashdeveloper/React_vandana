import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link} from 'react-router-dom';

import Posts from './components/posts';
import Profile from './components/profile';
import PostItem from './components/postitem.js';
import LifeCycle from './components/lifecycle';


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

ReactDOM.render(
    <BrowserRouter>
        <div>
            <header>
            <nav class="navbar navbar-inverse">
                <div class="container-fluid">
                    <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span> 
                    </button>
                    <a class="navbar-brand" >WebSiteName</a>
                    </div>
                    <div class="collapse navbar-collapse" id="myNavbar">
                    <ul class="nav navbar-nav">
                        <li><Link to="/">Home</Link></li>
                        <li> <Link to="/posts">Posts</Link></li> 
                        <li><Link to="/profile">Profile</Link></li> 
                        <li><Link to="/lifecycle">LifeCycle</Link></li> 
                    </ul>
                    <ul class="nav navbar-nav navbar-right">
                        <li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
                        <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
                        
                    </ul>
                    </div>
                </div>
                </nav>
                
               
                
            </header>
            <Route exact path="/" component={App}></Route>
            <Route exact path="/posts" component={Posts}></Route>
            <Route exact path="/profile" component={Profile}></Route>
            <Route exact path="/posts/1" component={PostItem}></Route>
            <Route exact path="/lifecycle" component={LifeCycle}></Route>
        </div>
    </BrowserRouter>
    ,document.getElementById('root'))

