import React, {Fragment} from 'react';

import Table from 'react-bootstrap/Table';
import Media from 'react-bootstrap/Media';
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';

import bifold from 'assets/media/bifold.jpg';
import rfid from 'assets/media/rfid.jpg';
import passport from 'assets/media/passport.jpg';
const items =[ 
  {
    image: bifold,
    item:"Multi-Pocket Bifold Wallet",
    options: {
      Color:"Navy Blue",
      Size:"Large"
    },
    unit_price:26.95,
    quantity:2,
  },
  {
    image: rfid,
    item:"RFID Blocking Hipster Wallet",
    options:{
      Color:"Black",
      Size:"Slim"
    },
    unit_price:36.95,
    quantity:1,
  },
  {
    image: passport,
    item:"Passport Holder",
    options:{
      Color:"Cocktail Red",
      Size:"Large"
    },
    unit_price:13.47,
    quantity:4,
  }
];


export default (props)  => {
  var total_cost = 0;
  var cart_contents = items.map( 
    (item, index) => {
      total_cost += item.unit_price*item.quantity;
      return (
        <tr key={index}>
          <td>
            <Media>
            <Image 
              src={item.image}
              rounded
              fluid
            />
            <Media.Body style={{paddingLeft:"10px"}}>
              {item.item}
            </Media.Body>
            </Media>
          </td>
          <td>
            <ListGroup variant="flush">
              {Object.keys(item.options).map(
                (k, index) => {
                  return(
                    <ListGroup.Item>
                      {k + ": " + item.options[k]}
                    </ListGroup.Item>
                  );
                }
              )}
            </ListGroup>
          </td>
          <td>{"$" + item.unit_price}</td>
          <td>{item.quantity}</td>
          <td>{"$" + item.quantity*item.unit_price}</td>
        </tr>
      );
    }
  );
  return (
    <Fragment>
    <div>
      <h1>Shopping Cart</h1>
    </div>
    <Table bordered hover>
    <thead>
      <tr>
        <th>Item</th>
        <th>Options</th>
        <th>Unit Price</th>
        <th>#</th>
        <th>Cost</th>
      </tr>
    </thead>
    <tbody>
      {cart_contents}
      <tr>
        <td colSpan="4" style={{fontSize:"50px"}}>Total Cost:</td>
        <td>{"$" + total_cost}</td>
      </tr>
    </tbody>

    </Table>

    </Fragment>
  )
}