import React from 'react'
import { Col, Grid, Row } from 'react-bootstrap' 
import ChatDetail from './chatDetail'

export default (props) => {
  const messages = props.messages.slice().reverse().map ( (message, i) => {

    return ( <ChatDetail user={message.user} message={message.content} key={i}/> ) })
     
  return (
    <div>
      <Grid> 
        <Row className="show-grid">
           <Col xs={8} xs={8}>
              {messages} 
            </Col>    
         </Row>
      </Grid> 
    </div>
  )
}
