import React from 'react';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import './ItemDetail.css';
import {Link} from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default (props)  => {
  return (
    <div className={'ItemDetail'}>
      <Row>
        <Col sm={6}>
          <Carousel showIndicators={false}>
            <div>
              <img src={process.env.PUBLIC_URL + '/images/wallet1.png'} alt=""/>
            </div>
            <div>
              <img src={process.env.PUBLIC_URL + '/images/wallet2.png'} alt=""/>
            </div>
          </Carousel>
        </Col>
        <Col sm={6}>
          <br/>
          <br/>
          <h1>The Big Skinny Wallet</h1>
          <p>$12.00</p>
          <br/>
          <h3><strong>Free No Hassle USA Shipping, Returns &amp; Exchanges</strong></h3>
          <div className={'rating-review'}>
            <div className="rating">
              <span className="fa fa-star checked"/>
              <span className="fa fa-star checked"/>
              <span className="fa fa-star checked"/>
              <span className="fa fa-star checked"/>
              <span className="fa fa-star"/>
            </div>
            &nbsp;
            &#124;
            &nbsp;
            <div className="review">
              <a href="#">
                100 Reviews
              </a>
            </div>

          </div>
          <br/>
          <br/>
          <div className="addcart">
            <input type="number"
                   min="1"
                   value={'1'}
                   aria-label="quantity"
                   pattern="[0-9]*"
                   name="quantity"
                   id="quantity"/>
            <Link id={'cart-button'} to={'/shopping_cart'}>
              Add To Cart

            </Link>
          </div>
        </Col>
      </Row>
    </div>
  )
}