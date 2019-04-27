import React from 'react';
import {items} from "./data";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import './ItemList.css';
import {Link} from "react-router-dom";
import Header from "./Header";

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2
});

const Item = (props) => {
  return (
    <Col md={4} sm={6} lg={3}>
      <div className={'item'}>
        <Link className={'item-image'} to={'/item_detail'}>
          <img src={process.env.PUBLIC_URL + '/images/' + props.image_one} alt=""/>
          <span className={'quickview'}>quick view</span>
        </Link>
        <Link to={'/item_detail'}>
          {props.title}
        </Link>
        {Array.apply(null, Array(5)).map((_, i) => {
          return (i + 1 < props.rating) ?
            <span className="fa fa-star checked" key={i}/> :
            <span className="fa fa-star" key={i}/>
        })}
        <p>{formatter.format(props.price)}</p>
      </div>
    </Col>
  )
}

export default (props)  => {
  return (
    <div className={'ItemList'}>
      <Header text={"Choose Your Wallet"} size={'100px'}/>
      <Row>
        {items.map((item, i) => {
          return <Item {...item} key={i}/>
        })}
      </Row>
    </div>
  )
}