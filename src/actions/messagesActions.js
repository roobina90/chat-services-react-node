import messageApi from '../api/messageApi'

export function saveMessage(data) {
 // debugger;
  let payload;
  payload = { room: data.room, newMessage: { user: data.newMessage.user, content: data.newMessage.message } }


  return { type: 'NEW_MESSAGE', payload }
}

export function createMessage(data) {
  return (dispatch) => {
    return messageApi.newMessage(data).then((response) => {
      //debugger;
      dispatch(saveMessage({ room: data.room, message: response.data }))
      return response
    })
  }
}