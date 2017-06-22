import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as messageActions from '../../actions/messagesActions'
import * as roomActions from '../../actions/roomActions'
import { bindActionCreators } from 'redux'
import ChatLog from '../chatLog'
import FileUploader from '../fileUpload'
import { Image, Glyphicon, InputGroup, PageHeader, Col, Button, FormGroup, FormControl } from 'react-bootstrap'


class ChatContainer extends Component { 
  constructor(props) {
    super(props)
     this.state = { 
       input : '',
       //imagePreviewUrl: '',
       messages: [],
       connected: false
     }

     this.handleOnChange = this.handleOnChange.bind(this)
     this.handleOnSubmit = this.handleOnSubmit.bind(this)
     this._handleMessageEvent = this._handleMessageEvent.bind(this)
     this._init = this._init.bind(this)
   }  


  componentWillMount() {
    this._init()
  }

  componentDidMount(){
    console.log('chat container did mount')
    this._handleMessageEvent()  
  }

  handleOnChange(ev) {
    this.setState({ input: ev.target.value}) 
  } 

  handleOnSubmit(ev) {
    ev.preventDefault()
    socket.emit('chat message', {message: this.state.input, room: this.props.params.room, user: "Bot"})
    this.setState({ input: '' })
  }

  _handleMessageEvent(){
    socket.on('chat message', (inboundMessage) => {
       this.props.createMessage({room: this.props.activeRoom, newMessage: {user: "Bot", message: JSON.parse(inboundMessage).message}}) 
       console.log('received message', inboundMessage)
     })
  }
  


  _init(){
    if(!(this.state.connected)){ 
      console.log("i am before fetch Room")
      this.props.fetchRoom(this.props.params.room).then((response) => {
       this.setState({messages: response})
      })
      socket.emit('subscribe', {room: this.props.params.room})
        this.setState({connected: true})
    }
  }

  render() {
    return (
      <div>
      Hello in room {this.props.params.room} bastards!
      <form>
          <FormGroup>
            <InputGroup>
            <FormControl onChange={this.handleOnChange} value={this.state.input}/>
            <InputGroup.Addon > 
              <Glyphicon glyph="music" />
              </InputGroup.Addon>
            <InputGroup.Button> 
              <Button bsStyle="primary" type="submit" onClick={this.handleOnSubmit}> Send </Button>
            </InputGroup.Button>
          </InputGroup>
        </FormGroup>
        </form>
        <ChatLog messages={this.props.activeRoom.messages}/>
        
   </div>
    )
  }

}

function mapStateToProps(state, ownProps) {
  return { activeRoom: state.activeRoom}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createMessage: messageActions.saveMessage, fetchRoom: roomActions.fetchRoomData}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer)