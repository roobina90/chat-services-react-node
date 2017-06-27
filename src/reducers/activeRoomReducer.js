import initialState from './initialState'

export default function activeRoomReducer(state = initialState.activeRoom, action) {
  switch(action.type) {
    case 'JOIN_ROOM': {
      debugger
      return {
        title: action.payload.messages[0].room,
        services: action.payload.services,
        messages: action.payload.messages.map((msg) => {
          return {
            user: msg.user,
            content: msg.content
          };
        }) };
      //  return Object.assign({}, state.activeRoom, {
      //   title: (action.payload[0].room),
      //   messages: action.payload
      // })
    }
     
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
