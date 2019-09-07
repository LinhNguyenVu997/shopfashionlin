import React from "react";
import "./App.css";
import HomePage from "./containers/Home/HomePage";
import SinglePage from "./containers/Single/SinglePage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/commons/Header/header";
import Footer from "./components/commons/Footer/footer";
import CategoryPage from "./containers/Category/Categorypage";
import CartPage from "./containers/Cart/CartPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/single/:productId" component={SinglePage} />
        <Route path="/category" component={CategoryPage} />
        <Route path="/cart" component={CartPage} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
