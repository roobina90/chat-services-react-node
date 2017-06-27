import initialState from './initialState'

export default function activeRoomReducer(state = initialState.activeRoom, action) {
  switch (action.type) {
    case 'JOIN_ROOM': {
      //debugger
      return {
        title: action.payload.messages[0].room,
        services: action.payload.services,
        messages: action.payload.messages.map((msg) => {
          return {
            user: msg.user,
            content: msg.content
          };
        })
      };
      //  return Object.assign({}, state.activeRoom, {
      //   title: (action.payload[0].room),
      //   messages: action.payload
      // })
    }
    case 'NEW_SERVICE': {
      debugger
      return Object.assign({}, state, {
        services: [...state.services, action.payload]
      })
    }
    case 'CHOOSE_SERVICE'://will get service name

      return Object.assign({}, state, {
        services: state.services.map((service) => {
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
      })
    case 'NEW_MESSAGE': {
      //debugger;
      return Object.assign({}, action.payload.room, {
        messages: [...action.payload.room.messages, action.payload.newMessage],
        services: [...action.payload.room.services]
      })
    }

    default:
      return state;
  }
}
