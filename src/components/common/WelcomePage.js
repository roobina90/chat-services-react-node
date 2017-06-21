import React, { Component } from 'react'
//import * as userActions from '../../actions/userActions'
import { connect } from 'react-redux'
import RoomsContainer from '../containers/roomsContainer'
import { InputGroup, Button, PageHeader, FormGroup, FormControl, Col } from 'react-bootstrap'


class WelcomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: ''
    }
    this.handleOnChange = this.handleOnChange.bind(this)
    this.handleOnSubmit = this.handleOnSumbit.bind(this)

  }

  handleOnChange(ev) {
    this.setState({ input: ev.target.value })
    console.log(ev.target.value)
  }

  handleOnSumbit(ev) {
    ev.preventDefault()
    this.props.newUser(this.state.input)
    this.setState({ input: '' })
  }

  render() {
    return (
      <Col xs={10} xsOffset={1} >
        <PageHeader>Welcome on chat page! Please choose a room! :-)</PageHeader>
        <RoomsContainer />
        {/*<form onSubmit={this.handleOnSubmit}>
          <FormGroup>
            <InputGroup value={this.state.input}>
              <FormControl onChange={this.handleOnChange} />
              <Button bsStyle="primary" type='submit'> Submit </Button>
            </InputGroup>
          </FormGroup>
        </form>*/}
      </Col>
    )
  }
}

// function mapStateToProps(state, ownProps) {
//   return { user: state.user }
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     newUser: (user) => {
//       dispatch(userActions.newUser(user))
//     }
//   }
// }

export default WelcomePage;