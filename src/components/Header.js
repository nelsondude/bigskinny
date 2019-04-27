import React from 'react';

import Jumbotron from "react-bootstrap/Jumbotron";
export default function Header(props) {

    return (
      <Jumbotron {...props}>
        <h1 style={{fontSize:"150px"}}>{props.text}</h1>
      </Jumbotron>
    );
};