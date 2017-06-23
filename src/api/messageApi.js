import axios from 'axios'

class MessageApi {
  static newMessage(message) {
  let parsed = JSON.parse(message.newMessage.message)
     return axios.post('/messages', parsed)
  }

  static fetchRoom(){
    return axios.get('/messages')
  }

 static createRoom(roomData){
   return axios.post('/rooms', roomData) 
 }

  static createService(serviceData){
   return axios.post('/services', serviceData) 
 }

 static fetchRoomList(){
  return axios.get('/rooms')
 }

  static fetchServiceList(){
  return axios.get('/services')
 }
}



export default MessageApi