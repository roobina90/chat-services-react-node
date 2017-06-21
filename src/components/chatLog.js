import React from 'react'
import { Col, Grid, Row } from 'react-bootstrap' 
import ChatDetail from './chatDetail'

export default (props) => {
  const messages = props.messages.map ( (message) => {

    return ( <ChatDetail user={message.user} message={message.content} /> ) })
     
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
