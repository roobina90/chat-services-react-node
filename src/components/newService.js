import React from 'react'
import { Button, FormGroup, FormControl, ControlLabel, ListGroupItem, ListGroup, Col } from 'react-bootstrap'

export default (props) => {
  return (
    <ListGroupItem> 
      <form>
        <FormGroup>
          <ControlLabel> Add a new Service! </ControlLabel>
          <FormControl onChange={props.handleOnChange} value={props.value}>
          </FormControl>
          <Button 
            bsStyle="primary" 
            bsSize="small" 
            type="submit"
            onClick={props.handleNewService}
            block> Send </Button>
        </FormGroup>
      </form>
    </ListGroupItem>
  )


}