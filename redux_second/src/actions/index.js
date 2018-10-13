
const URL_ROOT = 'http://localhost:6780/carsIndex'

export function getCars(keywords){
   
    const request = fetch(`${URL_ROOT}?q=${keywords}`, 
                {method:'GET'})
                    .then(response => response.json())
            return{
                type:'SEARCH_CARS',
                payload: request
            }
}