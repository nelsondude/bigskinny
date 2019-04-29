import React, {Fragment} from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
export default () => {
  return (
    <div style={{color: 'black'}}>
        <Jumbotron style={{marginTop: '20px'}}>
          <h1 style={{fontSize:"200px"}}>BigSkinny</h1>
        </Jumbotron>
        <Card className="text-center">
        <Card.Header>Big Skinny --> Skinny Wallets</Card.Header>
        <Card.Body>
          <Card.Title>Big Skinny Wallets reduce your wallet size and weight by fifty percent (yes 50%) without losing any functionality or number of pockets</Card.Title>
          <Card.Text>
          Our ultra-slim Wallet designs solve the top 5 wallet problems. Our Big Skinny wallets are ultra-thin, flat, and small because we use our proprietary ultra-thin (but sturdy) nylon micro-fiber wallet material which does all the work separating your cards and cash rather than thick leather like regular wallets. Each of our thin wallets are designed to organize and fit all of your plastic cards, cash and everything else without having to give up any card or cash pockets, or forcing you to use unconventional wallet designs. With our wallets, you don't give up any functionality nor do you have to leave any of our stuff at home--our wallets look like regular wallets but they perform 50% better. We make your wallet thinner by actually making an ultra-thin wallet that fits everything you have yet decreases final wallet size by 50% or more depending on which of our 40+ wallet designs you choose. When you swap your layers of thick leather for our skinny nylon, your wallet goes on a diet but all your stuff stays the same because our skinny layers do all the work coupled with our novel design elements.


          </Card.Text>
          <Button variant="primary" href="/how_its_made">Check out the Process</Button>
        </Card.Body>
        <Card.Footer className="text-muted">
        If you're a jetsetter, we have passport holders and travel wallets that withstand all the beatings your luggage takes when hopping from plane to train to taxi. Our selection also includes flat wallets with money clips so you can keep your cash separate from your cards, and checkbook versions that keep everything (we mean everything) in place. Our superior design and durable material work together to help keep your wallet extremely thin, slim, small and flat. Our nylon flat wallets are completely vegan and vegetarian too! For those that want a leather wallet but want the durability of a sports wallet, we offer hybrid leather wallet models that feature top grain cowhide on the outside and our ultra-thin nylon micro-fiber on the inside doing all the work. We pride ourselves on our wide variety of skinny wallets for both men and women.
        </Card.Footer>
      </Card>
    </div>
  );
}