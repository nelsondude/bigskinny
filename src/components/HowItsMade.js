import React, {Fragment} from 'react';


import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Media from "react-bootstrap/Media";
import Image from "react-bootstrap/Image";
import ListGroup from 'react-bootstrap/ListGroup';

import Header from 'components/Header';


import grip from "assets/media/grip.jpg";
import zipfold_wallet from "assets/media/big-skinny-zipfold-wallet.jpg";
import water_resistant from "assets/media/water_resistant.jpg";


const page_styling = {
  paddingLeft: "15px",
  paddingRight: "15px",
}

export default (props)  => {
  return (
    <Fragment>
      <Header text="The Process" />
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
            src={grip}
            rounded
            fluid
            alt="Generic placeholder"
          />
          </Col>
          <Col>
          <Media.Body>
            <h2 style={{fontSize:"86px"}}>Special Grip</h2>
            <p>
            Our Big Skinny wallets feature a non-slip interior that allows you to stylishly sport around without losing your goods to gravity even though we designed them with extra-wide pockets! Often, you can even fill your thin Big Skinny wallet and turn it upside down without having cards and cash fall out. Think of the slim Big Skinny wallets as strong, thin, sexy skin for your cards and cash -- as close as you can get to not having a wallet at all...
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
              <h2 style={{fontSize:"86px"}}>Weight Factor</h2>
              <p>
              Our Big Skinny wallets feature a non-slip interior that allows you to stylishly sport around without losing your goods to gravity even though we designed them with extra-wide pockets! Often, you can even fill your thin Big Skinny wallet and turn it upside down without having cards and cash fall out. Think of the slim Big Skinny wallets as strong, thin, sexy skin for your cards and cash -- as close as you can get to not having a wallet at all...
              </p>
            </Media.Body>
            </Col>
            <Col>
            <Image
              // width={64}
              className="mr-3"
              src={zipfold_wallet}
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
            src={water_resistant}
            rounded
            fluid
            alt="Generic placeholder"
          />
          </Col>
          <Col>
          <Media.Body>
            <h2 style={{fontSize:"86px"}}>Water Resistant</h2>
            <p>
              On top of being slim, thin, and light, our high performance sports nylon line of Big Skinny wallets are water-resistant and tough enough to machine wash regularly. That means you can jump into a swimming pool and or take long bike rides or work extra hours on construction site or garden forever! Big Skinny wallets will just dry out in 1-2 hours from a full soak. Imagine doing that with leather or canvas or some other alternative wallet materials-they will bloat up & lose their size, shape, and color almost immediately. The thin Big Skinny wallet also stays the same thin and slim wallet because the water-resistant nylon micro-fiber material is very durable as well as attractive.
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