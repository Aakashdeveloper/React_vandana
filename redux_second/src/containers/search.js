import React, { Component } from 'react';
import {getCars} from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class Search extends Component{

    constructor(props){
        super(props);
        this.state = {
            keyword:''
        }
    }

    searchCar =(event) =>{
        event.preventDefault();
        this.props.getCars(this.state.keyword);
        console.log(this.state);
    }

    handleChange = (event) =>{
        this.setState({
            keyword:event.target.value
        })
    }

    componentDidMount(){
        console.log(this.state);
    }

    render(){
        return(
            <div className="main_search">
               <form onSubmit={this.searchCar}>
                   <input type="text"  value ={this.state.keyword} onChange={this.handleChange}/>
                </form>
            </div>
        )
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({getCars}, dispatch)
}

export default connect(null, mapDispatchToProps)(Search);
