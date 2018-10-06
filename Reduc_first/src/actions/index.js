export function moviesList(){
    return{
        type:'MOVIES_LIST',
        payload:[
            {id:1,name:'Dead Wing'},
            {id:2, name:"Rambo"},
            {id:3, name:'Avengers'}
        ]
    }
}