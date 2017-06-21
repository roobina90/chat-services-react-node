import React from 'react'
import ChatContainer from './containers/ChatContainer'
import WelcomePage from './common/WelcomePage'
import { connect } from 'react-redux'

class App extends React.Component {
  constructor(props){
    super(props)
   // debugger;
    //this.currentUser = this.currentUser.bind(this)

  }
  
  // currentUser(){
  //  return !!this.props.user 
  // }
  render() {
    return (
      <div>
       <WelcomePage />
      </div> 
    )
  }
}

function mapStateToProps(state){
 return { user: "Kasia_Kowalska" }  
}

export default connect(mapStateToProps)(App)