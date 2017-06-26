import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as messageActions from '../../actions/messagesActions'
import * as roomActions from '../../actions/roomActions'
import { bindActionCreators } from 'redux'
import ChatLog from '../chatLog'
import ServicesContainer from './servicesContainer' 
import FileUploader from '../fileUpload'
import { Image, Glyphicon, InputGroup, PageHeader, Col, Button, FormGroup, FormControl, Grid , Checkbox} from 'react-bootstrap'


class ChatContainer extends Component { 
  constructor(props) {
    super(props)
     this.state = { 
       input : '',
       //imagePreviewUrl: '',
       messages: [],
       connected: false,
       checkbox: false
     }

     this.handleOnChange = this.handleOnChange.bind(this)
     this.handleOnSubmit = this.handleOnSubmit.bind(this)
     this._handleMessageEvent = this._handleMessageEvent.bind(this)
     this._init = this._init.bind(this)
     this.onCheckboxChange = this.onCheckboxChange.bind(this)
     this._handleMessageEvent = this._handleMessageEvent.bind(this)
   }  


  componentWillMount() {
    this._init()
  }

  componentDidMount(){
    console.log('chat container did mount')
    this._handleMessageEvent();
    this.handleCheckboxChange();
  }

  handleOnChange(ev) {
      console.log(ev);
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
  onCheckboxChange(ev) {
      console.log("bla");
      //this.setState({ checkbox: !this.state.checkbox });
      socket.emit('checkbox', { checkboxState: this.state.checkbox });

  }
   handleCheckboxChange() {
        socket.on('checkbox', (ev) => {
            console.log(ev);
        });
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
      <Grid>
      Hello in room {this.props.params.room} bastards!
      <ServicesContainer />
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

        <Checkbox onChange={this.onCheckboxChange} bsSize="lg" />
                
        <ChatLog messages={this.props.activeRoom.messages}/>
        
   </Grid>
    )
  }

}

function mapStateToProps(state, ownProps) {
  return { activeRoom: state.activeRoom }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createMessage: messageActions.saveMessage, fetchRoom: roomActions.fetchRoomData}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer)