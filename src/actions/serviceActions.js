import messageApi from '../api/messageApi';

export function joinRoom(roomData) { 
  // const payload = roomData.data
  // return { type: 'JOIN_ROOM', payload} 
}

export function newService(service) {
  console.log("adding new service", service)
  const newService = { name: service, price: 99, isChosen: true}
  return (dispatch) => {
    return messageApi.createService(newService)
      .then((response) => {
        dispatch(newServiceSuccess(newService))
      })
}
}

export function newServiceSuccess(payload){
  return { type: 'NEW_SERVICE', payload }
}

export function updateServiceList(payload){
  return { type: 'UPDATE_SERVICE_LIST', payload}
}
export function fetchServiceData() {
  console.log("fetch service data")
  // console.log('getting selected room data')
  // return (dispatch) => {
  //   return messageApi.fetchRoom()
  //     .then((response) => {
  //       dispatch(joinRoom(response))
  //     })
  // }

}

export function fetchServicesList(){
console.log("get service list")
  return (dispatch) => {
    return messageApi.fetchServiceList()
      .then((response) => {
        dispatch(updateServiceList(response))
      })

  }
}



export function saveService(payload) {
  return { type: 'NEW_SERVICE', payload }
}


export function chooseService(payload) {
  return { type: 'CHOOSE_SERVICE', payload }
}