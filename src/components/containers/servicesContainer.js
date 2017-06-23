import React, { Component } from 'react'
import { ListGroup, ListGroupItem, Col, PageHeader } from 'react-bootstrap'
import { connect } from 'react-redux'
import * as serviceActions from '../../actions/serviceActions'
import { bindActionCreators } from 'redux'
import NewService from '../newService' 
import { Link, browserHistory  } from 'react-router'

class RoomsContainer extends Component { 
  constructor(props){
    super()
    this.state = {
      input: '',
      connected: false
    }
    this.handleOnClick = this.handleOnClick.bind(this)
    this.handleNewService = this.handleNewService.bind(this)
    this.handleOnChange = this.handleOnChange.bind(this)
    this.fetchServices = this.fetchServices.bind(this)
  }

  componentDidMount(){
    this.fetchServices()
  } 


  handleOnClick(room){
    //socket.emit("unsubscribe") 
    //socket.emit("subscribe", { room: room.title})
    //this.props.joinRoom(room)   
    //browserHistory.push(`/abc/${room.title}`)
  }  

  handleNewService(ev) {
    ev.preventDefault()
    socket.emit('new service', {name: this.state.input, price: 99, isChosen: false})
    this.props.newService(this.state.input)
    this.setState({input: ''})
  }
  
  handleOnChange(ev) {
    this.setState({input: ev.target.value})
  }

  fetchServices(){
    if (!this.state.connected) { 
      this.props.fetchServicesList()
      this.state.connected = true
    }
  }

  handleChooseUsluga(usluga) {
    socket.emit()
  }

  render() {
    const services = this.props.services.map((service) => { 
      return ( 
        <ListGroupItem key={service.name} >
        {service.name} -- {service.price} $$
        </ListGroupItem> 
      )
    })

    return (
      <div>
        <Col xs={10} xsOffset={1}> 
          <ListGroup>
            {services}
            <NewService handleOnChange={this.handleOnChange} handleNewService={this.handleNewService} value={this.state.input}/>
          </ListGroup>
        </Col>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
 return { services: state.services }
}

function mapDispatchToProps(dispatch) { 
  return bindActionCreators({ toggleService: serviceActions.fetchServiceData, newService: serviceActions.newService, fetchServicesList: serviceActions.fetchServicesList}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(RoomsContainer)