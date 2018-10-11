
const URL_ROOT = 'http://localhost:6700/carsIndex'

export function getCars(keywords){
   
    const request = fetch(`${URL_ROOT}/carsIndex?q=${keywords}`, 
                {method:'GET'})

            return{
                type:'SEARCH_CARS',
                payload: request
            }
}