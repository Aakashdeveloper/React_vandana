import React, {Component} from 'react';
import { connect } from 'react-redux';

class ListOfCars extends Component{

    listOfCars = ({cars}) => {
        if(cars){
            return cars.map((item) => {
                return(
                    <div className="car_item">
                    {item.model}
                </div>
                )
            })
        }

    }
    render(){
        return(
            <div>
                {this.listOfCars(this.props)}
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log(state)
    return{
        cars: state.cars
       
    }
}


export default connect(mapStateToProps,null)(ListOfCars);