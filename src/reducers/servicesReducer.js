import initialState from './initialState'

export default function serviceReducer(state = initialState.activeRoom, action) {
  debugger
  switch (action.type) {
    case 'NEW_SERVICE': {
      debugger
     return Object.assign({}, action.payload.messages[0].room, { 
        messages: [...action.payload.room.messages, action.payload.newMessage],
        services: [...action.payload.room.services]
      }) 
    }
    case 'UPDATE_SERVICE_LIST': {
      if (action.payload.data.length < 1) {
        action.payload.data = false
      }
      return action.payload.data || state
    }
    case 'CHOOSE_SERVICE'://will get service name
      return state.map((service) => {
        if (action.payload.name === service.name && action.payload.room === service.room) {
          var newService = {
            name: service.name,
            price: service.price,
            isChosen: !service.isChosen,
            room: service.room
          };
          return newService
        }
        return service
      })
    default:
      return state;
  }
}