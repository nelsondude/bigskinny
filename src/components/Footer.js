import React, {Fragment} from 'react';
import './Footer.css';
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import {Link} from "react-router-dom";

export default () => {
  return (
    <Fragment>


      <footer className={'Footer'}>
        <Container>
          <Row>
            <Col>
              <br/>
              <br/>
              <h4>Information Below</h4>
              <br/>
              <Link to={'/contact'}>Contact For More Information</Link>
              <br/>
              <Link to={'/locations'}>
                Locations
              </Link>
              <br/>
              <Link to={'/'}>
                <img src={process.env.PUBLIC_URL + '/images/skinny.png'} style={{width: '175px'}} alt=""/>
              </Link>
            </Col>
            <Col>
              <br/>
              <br/>
              <br/>
            </Col>
          </Row>

        </Container>
      </footer>
        <div style={{textAlign: 'center', padding: '10px', color: 'black', background: 'white'}}>
          <h6>
            Free Returns and Exchanges
          </h6>
        </div>
    </Fragment>
  )
}