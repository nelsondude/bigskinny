import React, {Fragment} from 'react';

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Media from "react-bootstrap/Media";
import Image from "react-bootstrap/Image";
import ListGroup from 'react-bootstrap/ListGroup';

import Header from 'components/Header';

import jcp from "assets/media/jcp.png";
import kohls from "assets/media/kohls.jpg";

const page_styling = {
  paddingLeft: "15px",
  paddingRight: "15px",
}

export default (props)  => {
  return (
    <Fragment>
      <Header text="Locations" />
      <ListGroup variant="flush" style={page_styling}>
        <ListGroup.Item style={page_styling}>
        <br/>
        <Row >
        <Media>
          <Col>
          <Image
            // style={{verticalAlign:"middle", display:"inline-block"}}
            // width={64}
            // height={64}
            className="mr-3"
            style={{paddingTop:"70px"}}
            src={jcp}
            rounded
            fluid
            alt="Generic placeholder"
          />
          </Col>
          <Col>
          <Media.Body>
            <h2 style={{fontSize:"86px"}}>JC Penney</h2>
            <p>
              J. C. Penney Company, Inc. is an American department store chain with 864 locations in 49 U.S. states and Puerto Rico
            </p>
          </Media.Body>
          </Col>
          </Media>
        </Row>
        <br/>
        </ListGroup.Item>
        <br/>
        <br/>
          <Row>
          <Media>
            <Col>
            <Media.Body>
              <h2 style={{fontSize:"86px"}}>KOHL'S</h2>
              <p>
                Kohl's is an American department store retail chain, operated by Kohl's Corporation. With 1,158 locations, it is the largest department store chain in the United States as of February 2013. The company was founded by Polish immigrant Maxwell Kohl, who opened a corner grocery store in Milwaukee, Wisconsin in 1927.
              </p>
            </Media.Body>
            </Col>
            <Col>
            <Image
              // width={64}
              className="mr-3"
              src={kohls}
              style={{paddingTop:"70px"}}
              rounded
              fluid
              alt="Generic placeholder"
            />
            </Col>
            </Media>
          </Row>
        <br/>
        <br/>
    </ListGroup>
    </Fragment>
  )
}