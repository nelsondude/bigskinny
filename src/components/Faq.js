import React, {Fragment} from 'react';

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Media from "react-bootstrap/Media";
import Image from "react-bootstrap/Image";
import ListGroup from 'react-bootstrap/ListGroup';

import Header from 'components/Header';

import durable from "assets/media/durable.jpg";
import cash from "assets/media/cash.jpg";
import sweat from "assets/media/sweat.webp";

const page_styling = {
  paddingLeft: "15px",
  paddingRight: "15px",
}

export default (props)  => {
  return (
    <Fragment>
      <Header text="FAQ" />
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
            src={durable}
            rounded
            fluid
            alt="Generic placeholder"
          />
          </Col>
          <Col>
          <Media.Body>
            <h2 style={{fontSize:"86px"}}>Are They Durable?</h2>
            <p>
              Yes, they last as long as regular leather wallets--our customers get 4-5 years of life from our nylon line. Our leather-nylon hybrid lines last 5+ years. We run into many of our first customers from 2005 that are still using them everyday even with the original material—we've since improved the material twice. Unlike regular wallets, Big Skinny wallets feature double-edged stitching which means the material is folded in, glued, and then stitched. This makes them sturdy enough to machine wash regularly-we've had customers launder them regularly if they routinely sweat or get them dirty. Unlike regular wallets, Big Skinny wallets have a 1-year materials and workmanship warranty whether you buy it on the website or at a retail outlet—just mail it back for a replacement. What other wallet company gives a wallet warranty?
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
              <h2 style={{fontSize:"86px"}}>Will My Credit Cards Be Safe?</h2>
              <p>
                Yes. As long as the magnetic strips do not touch then they won't demagnetize. Stacking credit cards or other cards doesn't demagnetize them unless the cards are reversed and the magnetic strips are touching. A few top executives from the credit card companies told us that's how they create their credit cards but everyone's experience is different so we'd love to hear your experiences so we can learn and share this information with everyone.
              </p>
            </Media.Body>
            </Col>
            <Col>
            <Image
              // width={64}
              className="mr-3"
              src={cash}
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
        <ListGroup.Item style={page_styling}>
        <br/>
        <Row>
        <Media>
          <Col>
          <Image
            // width={64}
            // height={64}
            className="mr-3"
            src={sweat}
            style={{paddingTop:"110px"}}
            rounded
            fluid
            alt="Generic placeholder"
          />
          </Col>
          <Col>
          <Media.Body>
            <h2 style={{fontSize:"86px"}}>Does the Nylon Material Sweat?</h2>
            <p>
              No, unlike animal products such as leather, the Big Skinny is made from a petroleum-based material that doesn't sweat like leather does on a hot day. As a matter of fact, the non-slip interior keeps sweat from getting to your goodies. That also works with your leather hybrid Big Skinny because the interior also has the same lining.
            </p>
          </Media.Body>
          </Col>
          </Media>
        </Row>

        <br/>
        </ListGroup.Item>


    </ListGroup>
    </Fragment>
  )
}