import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import Media from "react-bootstrap/Media";
import Image from "react-bootstrap/Image";
import grip from "assets/media/grip.jpg";

export default (props)  => {
  return (
    <Container>
      <Jumbotron>
        <h1>The Process</h1>
      </Jumbotron>
      <Row>
      <Media>
        <Col>
        <Image
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

    </Container>
  )
}