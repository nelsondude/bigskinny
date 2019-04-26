import React from 'react';
import Header from "./Header";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default (props) => {
  return (
    <div>
      <Header text={'Contact'} subtitle={'We want to help'}/>
      <Row>
        <Col xs={{span: 6, offset: 3}}>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email"/>
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Subject</Form.Label>
              <Form.Control placeholder="Business Opportunity"/>
            </Form.Group>
            <Form.Group controlId="formBasicMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" placeholder="I need help with ..." rows={6}/>
            </Form.Group>
            <Button variant="success" type="submit" block>
              Send Message
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  )
}