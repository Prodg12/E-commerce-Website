import GreenAppleImg from "../assets/Home-img/popular products img/green-apple-img.png";
import IndianMaltaImg from "../assets/Home-img/popular products img/fresh-indian-malta-img.png";
import ChineseCabageImg from "../assets/Home-img/popular products img/chinese-cabbage-img.png";
import GreenLettuceImg from "../assets/Home-img/popular products img/green-lettuce-img.png";
import EggPlantImg from "../assets/Home-img/popular products img/eggplant-img.png";
import BigPotatoesImg from "../assets/Home-img/popular products img/big-potatoes-img.png";
import CornImg from "../assets/Home-img/popular products img/corn-img.png";
import CaulflowerImg from "../assets/Home-img/popular products img/caulflower-img.png";
import GreenCapsicumImg from "../assets/Home-img/popular products img/green-capsicum-img.png";
import GreenChilliImg from "../assets/Home-img/popular products img/green-chilli-img.png";
import ArrowIcon from "../assets/Home-img/icon-img/arrow-icon.png";
import Products from "../components/Products";
import StyledSection from "./StyledSection";
import Slider from "react-slick";

const PopularProducts = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          dots: true,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },

      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <StyledSection className="lg:pb-20">
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-2xl font-bold md:text-xl sm:text-lg">Popular Products</h2>

        <button className="flex items-center text-xs text-success font-semibold mt-2">
          View All
          <img src={ArrowIcon} alt="arrow-icon" className="w-3 ml-1" />
        </button>
      </div>

      <div className="grid grid-cols-10 lg:hidden">
        <div className="col-span-2">
          <Products
            img={GreenAppleImg}
            type="Green Apple"
            pricetag="$14.99"
            pricetag2="$20.99"
          />
        </div>

        <div className="col-span-2">
          <Products
            img={IndianMaltaImg}
            type="Fresh Indian Malta"
            pricetag="$20.00"
          />
        </div>

        <div className="col-span-2">
          <Products
            img={ChineseCabageImg}
            type="Chinese Cabbage"
            pricetag="$12.00"
          />
        </div>

        <div className="col-span-2">
          <Products
            img={GreenLettuceImg}
            type="Green Lettuce"
            pricetag="$9.00"
          />
        </div>

        <div className="col-span-2">
          <Products img={EggPlantImg} type="Eggplant" pricetag="$34.00" />
        </div>

        <div className="col-span-2">
          <Products
            img={BigPotatoesImg}
            type="Big Potatoes"
            pricetag="$12.00"
          />
        </div>

        <div className="col-span-2">
          <Products img={CornImg} type="Corn" pricetag="$20.00" />
        </div>

        <div className="col-span-2">
          <Products
            img={CaulflowerImg}
            type="Fresh Caulflower"
            pricetag="$20.00"
          />
        </div>

        <div className="col-span-2">
          <Products
            img={GreenCapsicumImg}
            type="Green Capsicum"
            pricetag="$20.00"
          />
        </div>

        <div className="col-span-2">
          <Products
            img={GreenChilliImg}
            type="Green Chilli"
            pricetag="$34.00"
          />
        </div>
      </div>

      <div className="hidden lg:block">
        <Slider {...settings}>
          <div className="col-span-2">
            <Products
              img={GreenAppleImg}
              type="Green Apple"
              pricetag="$14.99"
              pricetag2="$20.99"
            />
          </div>

          <div className="col-span-2">
            <Products
              img={IndianMaltaImg}
              type="Fresh Indian Malta"
              pricetag="$20.00"
            />
          </div>

          <div className="col-span-2">
            <Products
              img={ChineseCabageImg}
              type="Chinese Cabbage"
              pricetag="$12.00"
            />
          </div>

          <div className="col-span-2">
            <Products
              img={GreenLettuceImg}
              type="Green Lettuce"
              pricetag="$9.00"
            />
          </div>

          <div className="col-span-2">
            <Products img={EggPlantImg} type="Eggplant" pricetag="$34.00" />
          </div>

          <div className="col-span-2">
            <Products
              img={BigPotatoesImg}
              type="Big Potatoes"
              pricetag="$12.00"
            />
          </div>

          <div className="col-span-2">
            <Products img={CornImg} type="Corn" pricetag="$20.00" />
          </div>

          <div className="col-span-2">
            <Products
              img={CaulflowerImg}
              type="Fresh Caulflower"
              pricetag="$20.00"
            />
          </div>

          <div className="col-span-2">
            <Products
              img={GreenCapsicumImg}
              type="Green Capsicum"
              pricetag="$20.00"
            />
          </div>

          <div className="col-span-2">
            <Products
              img={GreenChilliImg}
              type="Green Chilli"
              pricetag="$34.00"
            />
          </div>
        </Slider>
      </div>
    </StyledSection>
  );
};

export default PopularProducts;
