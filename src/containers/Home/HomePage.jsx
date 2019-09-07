import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Header from "../../components/commons/Header/header";
import Footer from "../../components/commons/Footer/footer";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import QuickCategories from "../../components/QuickCategories/QuickCategories";
import DealOfTheWeek from "../../components/DealOfTheWeek/DealOfTheWeek";
import ShippingInformation from "../../components/ShippingInformation/ShippingInformation";
import NewArrival from "../../components/NewArrival/NewArrival";

class HomePage extends PureComponent {
  render() {
    return (
      <div className="super_container">
        <HeroBanner />;
        <QuickCategories />;
        <NewArrival />;
        <DealOfTheWeek />;
        <ShippingInformation />;
      </div>
    );
  }
}

HomePage.propTypes = {};

export default HomePage;
