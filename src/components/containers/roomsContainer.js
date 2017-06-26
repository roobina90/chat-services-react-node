import React, { Component } from 'react'
import { ListGroup, ListGroupItem, Col, PageHeader } from 'react-bootstrap'
import { connect } from 'react-redux'
import * as roomActions from '../../actions/roomActions'
import { bindActionCreators } from 'redux'
import NewRoom from '../newRoom' 
import { Link, browserHistory  } from 'react-router'

class RoomsContainer extends Component { 
  constructor(props){
    super()
    this.state = {
      input: '',
      connected: false
    }
    this.handleOnClick = this.handleOnClick.bind(this)
    this.handleNewRoom = this.handleNewRoom.bind(this)
    this.handleOnChange = this.handleOnChange.bind(this)
    this.fetchRooms = this.fetchRooms.bind(this)
  }

  componentDidMount(){
    this.fetchRooms()
  } 


  handleOnClick(room){
    //socket.emit("unsubscribe") 
    //socket.emit("subscribe", { room: room.title})
    //this.props.joinRoom(room)   
    //browserHistory.push(`/abc/${room.title}`)
  }  

  handleNewRoom(ev) {
    ev.preventDefault()
    //socket.emit('new room', {message: this.state.input, room: this.props.room.title, user: this.props.user})
    this.props.newRoom(this.state.input)
    this.setState({input: ''})
  }
  
  handleOnChange(ev) {
    this.setState({input: ev.target.value})
  }

  fetchRooms(){
    if (!this.state.connected) { 
      this.props.fetchRoomList()
      this.state.connected = true
    }
  }

  handleChooseUsluga(usluga) {
    socket.emit()
  }

  render() {
    const rooms = this.props.rooms.map((room) => { 
      return ( 
        <ListGroupItem key={room.title} >
         <Link to={room.title}>{room.title}</Link>
        </ListGroupItem> 
      )
    })

    return (
      <div>
        <PageHeader>Welcome on chat page! Please choose a client! :-)</PageHeader>

        <Col xs={10} xsOffset={1}> 
          <ListGroup>
            {rooms}
            <NewRoom handleOnChange={this.handleOnChange} handleNewRoom={this.handleNewRoom} value={this.state.input}/>
          </ListGroup>
        </Col>
      </div>
    )

  }

}

function mapStateToProps(state, ownProps) {
 return { rooms: state.rooms }
}

function mapDispatchToProps(dispatch) { 
  return bindActionCreators({ joinRoom: roomActions.fetchRoomData, newRoom: roomActions.newRoom, fetchRoomList: roomActions.fetchRoomList}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(RoomsContainer)