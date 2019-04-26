import React from 'react';

import Jumbotron from "react-bootstrap/Jumbotron";
export default function Header(props) {

    return (
      <Jumbotron style={{marginTop: '20px'}}>
        <h1 style={{fontSize: props.size || "150px"}}>{props.text}</h1>
      </Jumbotron>
    );
};