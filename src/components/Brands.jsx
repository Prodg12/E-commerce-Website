import React from 'react'
import StyledSection from './StyledSection';
import StepsLogo from "../assets/Home-img/brands-img/steps-logo.png";
import MangoLogo from "../assets/Home-img/brands-img/mango-logo.png";
import FoodieLogo from "../assets/Home-img/brands-img/foodie-logo.png";
import FoodLogo from "../assets/Home-img/brands-img/food-logo.png";
import BookOffLogo from "../assets/Home-img/brands-img/bookoff-logo.png";
import GseriesLogo from "../assets/Home-img/brands-img/Gseries-logo.png";

const Brands = () => {
  return (
    <StyledSection className="py-16 sm:px-4">
        <div className="grid grid-cols-12 gap-24 lg:gap-10 sm:gap-6 xs:gap-3">
          <div className="col-span-2">
            <img
              src={StepsLogo}
              alt="steps-logo-img"
            />
          </div>

          <div className="col-span-2">
            <img
              src={MangoLogo}
              alt="mango-logo-img"
            />
          </div>

          <div className="col-span-2">
            <img
              src={FoodieLogo}
              alt="foodie-logo-img"
            />
          </div>

          <div className="col-span-2">
            <img
              src={FoodLogo}
              alt="food-logo-img"             />
          </div>

          <div className="col-span-2">
            <img
              src={BookOffLogo}
              alt="bookoff-logo-img"
            />
          </div>

          <div className="col-span-2">
            <img
              src={GseriesLogo}
              alt="Gseries-logo-img"
            />
          </div>
        </div>
      </StyledSection>
  )
}

export default Brands