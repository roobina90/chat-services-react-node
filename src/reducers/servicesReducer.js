import initialState from './initialState'

export default function serviceReducer(state = initialState.services, action) {
  switch(action.type) {
    case 'NEW_SERVICE': {
      debugger;
      return [...state, action.payload]
    }
     case 'UPDATE_SERVICE_LIST': {
      if(action.payload.data.length < 1){
        action.payload.data = false
      }
      return action.payload.data || state  
     }
    case 'CHOOSE_SERVICE'://will get service name
      return state.map((service) => {
        if(action.payload === service.name) {
          service.isChosen = !service.isChosen
          return service
        }
        return service
      })
    default:
     return state; 
  }
}