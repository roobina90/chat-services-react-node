import messageApi from '../api/messageApi';

export function joinRoom(roomData) { 
  debugger
  const payload = roomData.data
  return { type: 'JOIN_ROOM', payload} 
}

export function newRoom(room_title) {
  const newRoom = { title: room_title, messages: [{user: 'Bot', content: 'Hello!'}]}
  return (dispatch) => {
    return messageApi.createRoom(newRoom)
      .then((response) => {
        dispatch(newRoomSuccess(newRoom))
      })
 }
}

export function newRoomSuccess(payload){
  return { type: 'NEW_ROOM', payload }
}

export function updateRoomList(payload){
  return { type: 'UPDATE_ROOM_LIST', payload}
}
export function fetchRoomData() {
  console.log('getting selected room data')
  return (dispatch) => {
    return messageApi.fetchRoom()
      .then((response) => {
        dispatch(joinRoom(response))
      })
  }

}

export function fetchRoomList(){
  return (dispatch) => {
    return messageApi.fetchRoomList()
      .then((response) => {
        dispatch(updateRoomList(response))
      })

  }
}