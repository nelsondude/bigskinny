import React from 'react';

import Jumbotron from "react-bootstrap/Jumbotron";
export default function Header(props) {

    return (
      <Jumbotron style={{marginTop: '20px', color: 'black'}}>
        <h1 style={{fontSize: props.size || "150px"}}>{props.text}</h1>
        {props.subtitle ? <h4>{props.subtitle}</h4> : null}
      </Jumbotron>
    );
};