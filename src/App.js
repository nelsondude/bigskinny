import React from 'react';
import './App.css';
import {Switch, Route} from "react-router-dom";
import {About, Contact, Faq, Home, HowItsMade, ItemDetail, ItemList, Locations, ShoppingCart} from './components';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/shopping_cart" component={ShoppingCart}/>
        <Route path="/item_list" component={ItemList}/>
        <Route path="/item_detail" component={ItemDetail}/>
        <Route path="/locations" component={Locations}/>
        <Route path="/how_its_made" component={HowItsMade}/>
        <Route path="/faq" component={Faq}/>
        <Route exact path="/" component={Home}/>
      </Switch>
    </div>
  );
}

export default App;
