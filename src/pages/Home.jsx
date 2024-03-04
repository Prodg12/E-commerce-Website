import StyledSection from "../components/StyledSection";
import ArrowIcon from "../assets/Home-img/icon-img/arrow-icon.png";
import ArrowIcon2 from "../assets/About-img/icons/arrow-icon.png";
import HeroImg from "../assets/Home-img/hero-img.png";
import DeliveryTruck from "../assets/Home-img/icon-img/delivery-truck-icon.png";
import CustomerServiceIcon from "../assets/Home-img/icon-img/headphones-icon.png";
import ShoppingBag from "../assets/Home-img/icon-img/shopping-bag-icon.png";
import PackageIcon from "../assets/Home-img/icon-img/package-icon.png";
import PopularProducts from "../components/PopularProducts";
import FreshFruitImg from "../assets/Home-img/popular categories img/fresh-fruit-img.png";
import VegetablesImg from "../assets/Home-img/popular categories img/fresh-vegetables-img.png";
import MeatFishImg from "../assets/Home-img/popular categories img/meat-fish-img.png";
import SnacksImg from "../assets/Home-img/popular categories img/snacks-img.png";
import BeveragesImg from "../assets/Home-img/popular categories img/beverages-img.png";
import BeautyHealthImg from "../assets/Home-img/popular categories img/beauty-health-img.png";
import BreadBakeryImg from "../assets/Home-img/popular categories img/bread-bakery-img.png";
import BakingNeedsImg from "../assets/Home-img/popular categories img/baking-needs-img.png";
import BeautyImg from "../assets/Home-img/popular categories img/beauty-health-img.png";
import DiabeticFoodImg from "../assets/Home-img/popular categories img/diabetic-food-img.png";
import DishDetergentImg from "../assets/Home-img/popular categories img/dish-detergents-img.png";
import OilImg from "../assets/Home-img/popular categories img/oil-img.png";
import HalfAppleImg from "../assets/Home-img/popular products img/half-apple-img.png";
import DiscountBannerImg from "../assets/Home-img/discount-bannar-img.png";
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
import RedChilliImg from "../assets/Home-img/popular products img/red-chilli.png";
import RedTomatoesImg from "../assets/Home-img/popular products img/red-tomatoes-img.png";
import MangoImg from "../assets/Home-img/popular products img/surjapur-mango-img.png";
import Products from "../components/Products";
import LatestNews from "../components/LatestNews";
import Testimonial from "../components/Testimonial";
import LogoImg from "../assets/Home-img/icon-img/logo-img.png";
import Slider from "react-slick";
import Sale from "../components/Sale";
import Brands from "../components/Brands";
import InstagramIcon from "../assets/Home-img/instagram/Instagram Post.png";
import InstagramIcon1 from "../assets/Home-img/instagram/Instagram Post (1).png";
import InstagramIcon2 from "../assets/Home-img/instagram/Instagram Post (2).png";
import InstagramIcon3 from "../assets/Home-img/instagram/Instagram Post (3).png";
import InstagramIcon4 from "../assets/Home-img/instagram/Instagram Post (4).png";
import InstagramIcon5 from "../assets/Home-img/instagram/Instagram Post (5).png";

const Home = () => {
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
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <StyledSection>
        <section className="flex justify-between py-10 pt-16 md:flex-col md:items-center">
          <div className="w-1/2 md:w-full md:text-center md:flex md:flex-col md:items-center md:justify-center">
            <h6 className="text-success uppercase text-sm font-semibold tracking-wider">Welcome to shopery</h6>

            <h1 className="text-5xl font-bold text-gray900 w-[80%] leading-tight tracking-wider lg:text-4xl lg:w-[95%] sm:text-3xl xs:text-xl">Fresh & Healthy Organic Food</h1>

            <h4 className="text-gray900 font-medium text-xl tracking-wide my-2 xs:text-xs">Sale up to <span className="text-warning font-bold sm:text-base">30% OFF</span></h4>

            <p className="text-gray500 text-sm xs:text-xs">Free shipping on all your order. we deliver, you enjoy</p>

            <button className="mt-5 flex items-center gap-2 bg-success text-white py-[0.6rem] px-7 text-sm rounded-3xl lg:px-5 lg:py-[0.5rem] sm:py-[0.3rem] xs:px-3 xs:text-sm">
              Shop Now
              <img
                src={ArrowIcon2}
                alt="arrow-icon"
                className="w-3"
              />
            </button>
          </div>

          <div className="w-1/2 lg:w-[45%] md:w-[75%] md:mt-8 sm:w-full">
            <img src={HeroImg} className="w-full" />
          </div>
        </section>

        <section className="grid grid-cols-12 gap-10 mt-10 px-8 lg:gap-2 lg:gap-y-6 sm:px-4 xs:px-0">
          <div className="col-span-3 flex items-center lg:col-span-6">
            <img
              src={DeliveryTruck}
              alt="delivery-van-icon"
              className="w-7 lg:w-6 xs:w-5"
            />

            <span className="ml-2">
              <h6 className="text-sm font-bold text-gray900 sm:text-xs xs:text-[0.7rem]">Free Shipping</h6>

              <p className="text-xs text-gray400 sm:text-[0.65rem]">
                Free shipping on all your order
              </p>
            </span>
          </div>

          <div className="col-span-3 flex items-center lg:col-span-6">
            <img
              src={CustomerServiceIcon}
              alt="delivery-van-icon"
              className="w-7 lg:w-6 xs:w-5"
            />

            <span className="ml-2">
              <h6 className="text-sm font-bold text-gray900 sm:text-xs xs:text-[0.7rem]">
                Customer Support 24/7
              </h6>

              <p className="text-xs text-gray400 sm:text-[0.65rem]">Instant access to Support</p>
            </span>
          </div>

          <div className="col-span-3 flex items-center lg:col-span-6">
            <img
              src={ShoppingBag}
              alt="delivery-van-icon"
              className="w-7 lg:w-6 xs:w-5"
            />

            <span className="ml-2">
              <h6 className="text-sm font-bold text-gray900 sm:text-xs xs:text-[0.7rem]">
                100% Secure Payment
              </h6>

              <p className="text-xs text-gray400 sm:text-[0.65rem]">
                We ensure your money is save
              </p>
            </span>
          </div>

          <div className="col-span-3 flex items-center lg:col-span-6">
            <img
              src={PackageIcon}
              alt="delivery-van-icon"
              className="w-7 lg:w-6 xs:w-5"
            />

            <span className="ml-2">
              <h6 className="text-sm font-bold text-gray900 sm:text-xs xs:text-[0.7rem]">
                Money-Back Guarantee
              </h6>

              <p className="text-xs text-gray400 sm:text-[0.65rem]">
                30 Days Money-Back Guarantee
              </p>
            </span>
          </div>
        </section>
      </StyledSection>

      <StyledSection>
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold md:text-xl xs:text-lg">
            Popular Categories
          </h2>

          <button className="flex items-center text-xs text-success font-semibold mt-2">
            View All
            <img src={ArrowIcon} alt="arrow-icon" className="w-3 ml-1" />
          </button>
        </div>

        <div className="grid grid-cols-12 gap-10 mt-10 lg:gap-4 text-center md:gap-6 xs:gap-2 lg:hidden">
          <div className="col-span-2 flex flex-col items-center cursor-pointer border border-solid border-gray100 text-gray900 rounded-md p-2 py-4 hover:shadow-md hover:border-success hover:text-success duration-100 ease-in-out lg:p-1 lg:py-2">
            <img
            src={FreshFruitImg}
              alt="fresh-fruits-img"
              className="xs:w-28"
            />

            <p className="font-semibold text-sm mt-1">Fresh Fruits</p>
          </div>

          <div className="col-span-2 flex flex-col items-center cursor-pointer border border-solid border-gray100 text-gray900 rounded-md p-2 py-4 hover:shadow-md hover:border-success hover:text-success duration-100 ease-in-out lg:p-1 lg:py-2">
            <img
              src={VegetablesImg}
              alt="fresh-vegetables-img"
              className="xs:w-28"
            />

            <p className="font-semibold text-sm mt-1">Fresh Vegetables</p>
          </div>

          <div className="col-span-2 flex flex-col items-center cursor-pointer border border-solid border-gray100 text-gray900 rounded-md p-2 py-4 hover:shadow-md hover:border-success hover:text-success duration-100 ease-in-out lg:p-1 lg:py-2">
            <img
              src={MeatFishImg}
              alt="meat-fish-img"
              className="xs:w-28"
            />

            <p className="font-semibold text-sm mt-1">Meat & Fish</p>
          </div>

          <div className="col-span-2 flex flex-col items-center cursor-pointer border border-solid border-gray100 text-gray900 rounded-md p-2 py-4 hover:shadow-md hover:border-success hover:text-success duration-100 ease-in-out lg:p-1 lg:py-2">
            <img
              src={SnacksImg}
              alt="snacks-img"
              className="xs:w-28"
            />

            <p className="font-semibold text-sm mt-1">Snacks</p>
          </div>

          <div className="col-span-2 flex flex-col items-center cursor-pointer border border-solid border-gray100 text-gray900 rounded-md p-2 py-4 hover:shadow-md hover:border-success hover:text-success duration-100 ease-in-out lg:p-1 lg:py-2">
            <img
              src={BeveragesImg}
              alt="beverages-img"
              className="xs:w-28"
            />

            <p className="font-semibold text-sm mt-1">Beverages</p>
          </div>

          <div className="col-span-2 flex flex-col items-center cursor-pointer border border-solid border-gray100 text-gray900 rounded-md p-2 py-4 hover:shadow-md hover:border-success hover:text-success duration-100 ease-in-out lg:p-1 lg:py-2">
            <img
              src={BeautyHealthImg}
              alt="beauty-health-img"
              className="xs:w-28"
            />

            <p className="font-semibold text-sm mt-1">Beauty & Health</p>
          </div>

          <div className="col-span-2 flex flex-col items-center cursor-pointer border border-solid border-gray100 text-gray900 rounded-md p-2 py-4 hover:shadow-md hover:border-success hover:text-success duration-100 ease-in-out lg:p-1 lg:py-2">
            <img
              src={BreadBakeryImg}
              alt="beauty-health-img"
              className="xs:w-28"
            />

            <p className="font-semibold text-sm mt-1">Bread & Bakery</p>
          </div>

          <div className="col-span-2 flex flex-col items-center cursor-pointer border border-solid border-gray100 text-gray900 rounded-md p-2 py-4 hover:shadow-md hover:border-success hover:text-success duration-100 ease-in-out lg:p-1 lg:py-2">
            <img
              src={BakingNeedsImg}
              alt="beauty-health-img"
              className="xs:w-28"
            />

            <p className="font-semibold text-sm mt-1">Baking Needs</p>
          </div>

          <div className="col-span-2 flex flex-col items-center cursor-pointer border border-solid border-gray100 text-gray900 rounded-md p-2 py-4 hover:shadow-md hover:border-success hover:text-success duration-100 ease-in-out lg:p-1 lg:py-2">
            <img
              src={BeautyImg}
              className="xs:w-28"
            />

            <p className="font-semibold text-sm mt-1">Cooking</p>
          </div>

          <div className="col-span-2 flex flex-col items-center cursor-pointer border border-solid border-gray100 text-gray900 rounded-md p-2 py-4 hover:shadow-md hover:border-success hover:text-success duration-100 ease-in-out lg:p-1 lg:py-2">
            <img
              src={DiabeticFoodImg}
              alt="diabetic-food-img"
              className="xs:w-28"
            />

            <p className="font-semibold text-sm mt-1">Diabetic Foods</p>
          </div>

          <div className="col-span-2 flex flex-col items-center cursor-pointer border border-solid border-gray100 text-gray900 rounded-md p-2 py-4 hover:shadow-md hover:border-success hover:text-success duration-100 ease-in-out lg:p-1 lg:py-2">
            <img
              src={DishDetergentImg}
              alt="beauty-health-img"
              className="xs:w-28"
            />

            <p className="font-semibold text-sm mt-1">Dish Detergents</p>
          </div>

          <div className="col-span-2 flex flex-col items-center cursor-pointer border border-solid border-gray100 text-gray900 rounded-md p-2 py-4 hover:shadow-md hover:border-success hover:text-success duration-100 ease-in-out lg:p-1 lg:py-2">
            <img
              src={OilImg}
              alt="beauty-health-img"
              className="xs:w-28"
            />

            <p className="font-semibold text-sm mt-1">Oil</p>
          </div>
        </div>

        <div className="hidden lg:block py-10">
          <Slider {...settings}>
            <div className="flex items-center justify-center cursor-pointer border border-solid border-gray500 text-gray900 rounded-md px-6 py-4 hover:shadow-md hover:border-success hover:text-success duration-100 ease-in-out text-center xs:px-4">
              <img
                src={FreshFruitImg}
                className=""
              />

              <p className="font-semibold text-sm mt-1 xs:text-xs">Fresh Fruits</p>
            </div>

            <div className="flex items-center justify-center cursor-pointer border border-solid border-gray500 text-gray900 rounded-md px-6 py-4 hover:shadow-md hover:border-success hover:text-success duration-100 ease-in-out text-center xs:px-4">
              <img
                src={VegetablesImg}
                alt="fresh-vegetables-img"
                className=""
              />

              <p className="font-semibold text-sm mt-1 xs:text-xs">Fresh Vegetables</p>
            </div>

            <div className="flex flex-col items-center justify-center cursor-pointer border border-solid border-gray500 text-gray900 rounded-md px-6 py-4 hover:shadow-md hover:border-success hover:text-success duration-100 ease-in-out text-center xs:px-4">
              <img
                src={MeatFishImg}
                alt="meat-fish-img"
                className=""
              />

              <p className="font-semibold text-sm mt-1 xs:text-xs">Meat & Fish</p>
            </div>

            <div className="flex flex-col items-center justify-center cursor-pointer border border-solid border-gray500 text-gray900 rounded-md px-6 py-4 hover:shadow-md hover:border-success hover:text-success duration-100 ease-in-out text-center xs:px-4">
              <img
                src={SnacksImg}
                alt="snacks-img"
                className=""
              />

              <p className="font-semibold text-sm mt-1 xs:text-xs">Snacks</p>
            </div>

            <div className="flex flex-col items-center justify-center cursor-pointer border border-solid border-gray500 text-gray900 rounded-md px-6 py-4 hover:shadow-md hover:border-success hover:text-success duration-100 ease-in-out text-center xs:px-4">
              <img
                src={BeveragesImg}
                alt="beverages-img"
                className=""
              />

              <p className="font-semibold text-sm mt-1 xs:text-xs">Beverages</p>
            </div>

            <div className="flex flex-col items-center justify-center cursor-pointer border border-solid border-gray500 text-gray900 rounded-md px-6 py-4 hover:shadow-md hover:border-success hover:text-success duration-100 ease-in-out text-center xs:px-4">
              <img
                src={BeautyHealthImg}
                alt="beauty-health-img"
                className=""
              />

              <p className="font-semibold text-sm mt-1 xs:text-xs">Beauty & Health</p>
            </div>

            <div className="flex flex-col items-center justify-center cursor-pointer border border-solid border-gray500 text-gray900 rounded-md px-6 py-4 hover:shadow-md hover:border-success hover:text-success duration-100 ease-in-out text-center xs:px-4">
              <img
                src={BreadBakeryImg}
                alt="beauty-health-img"
                className=""
              />

              <p className="font-semibold text-sm mt-1 xs:text-xs">Bread & Bakery</p>
            </div>

            <div className="flex flex-col items-center justify-center cursor-pointer border border-solid border-gray500 text-gray900 rounded-md px-6 py-4 hover:shadow-md hover:border-success hover:text-success duration-100 ease-in-out text-center xs:px-4">
              <img
                src={BeautyImg}
                alt="beauty-health-img"
                className=""
              />

              <p className="font-semibold text-sm mt-1 xs:text-xs">Baking Needs</p>
            </div>

            <div className="flex flex-col items-center justify-center cursor-pointer border border-solid border-gray500 text-gray900 rounded-md px-6 py-4 hover:shadow-md hover:border-success hover:text-success duration-100 ease-in-out text-center xs:px-4">
              <img
                src={DiabeticFoodImg}
                alt="beauty-health-img"
                className=""
              />

              <p className="font-semibold text-sm mt-1 xs:text-xs">Cooking</p>
            </div>

            <div className="flex flex-col items-center justify-center cursor-pointer border border-solid border-gray500 text-gray900 rounded-md px-6 py-4 hover:shadow-md hover:border-success hover:text-success duration-100 ease-in-out text-center xs:px-4">
              <img
                src={DiabeticFoodImg}
                alt="beauty-health-img"
                className=""
              />

              <p className="font-semibold text-sm mt-1 xs:text-xs">Diabetic Foods</p>
            </div>

            <div className="flex flex-col items-center justify-center cursor-pointer border border-solid border-gray500 text-gray900 rounded-md px-6 py-4 hover:shadow-md hover:border-success hover:text-success duration-100 ease-in-out text-center xs:px-4">
              <img
                src={DishDetergentImg}
                alt="dish-detergent-img"
                className=""
              />

              <p className="font-semibold text-sm mt-1 xs:text-xs">Dish Detergents</p>
            </div>

            <div className="flex flex-col items-center justify-center cursor-pointer border border-solid border-gray500 text-gray900 rounded-md px-6 py-4 hover:shadow-md hover:border-success hover:text-success duration-100 ease-in-out text-center xs:px-4">
              <img
                src={OilImg}
                alt="oil-img"
                className=""
              />

              <p className="font-semibold text-sm mt-1 xs:text-xs">Oil</p>
            </div>
          </Slider>
        </div>
      </StyledSection>

      <PopularProducts />

      <Sale/>

      <StyledSection className="bg-[#F7F7F7]">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl font-bold text-gray900 md:text-xl sm:text-lg">Hot Deals</h2>

          <button className="flex items-center text-xs text-success font-semibold mt-2">
            View All
            <img src={ArrowIcon} alt="arrow-icon" className="w-3 ml-1" />
          </button>
        </div>

        <div className="grid grid-cols-10 md:grid-cols-12">
          <div className="col-span-4 row-span-2 border border-solid border-gray100 p-4 bg-white  cursor-pointer rounded-sm hover:border-successDark lg:row-span-0 md:col-span-12 sm:p-2" >
            <div>
              <span className="bg-error py-[0.1rem] px-1 text-sm text-white text-opacity-90 rounded xs:text-xs">
                Sale 50%
              </span>

              <span className="bg-[#2388FF] py-[0.1rem] px-1 text-sm text-white text-opacity-90 rounded ml-2 xs:text-xs">
                Best Sale
              </span>
            </div>

            <img
              src={HalfAppleImg}
              alt="half-apple-img"
              className="h-[40vh] w-full object-cover md:h-[30vh] md:object-contain"
            />

            <div className="flex items-center justify-between sm:gap-1">
              <span className="text-gray900 py-2 px-2 bg-gray100 rounded-full text-sm flex items-center justify-center">
                <ion-icon name="heart-outline"></ion-icon>
              </span>

              <button className="w-[75%] py-2 flex items-center justify-center gap-1 bg-success text-white rounded-3xl sm:text-sm sm:w-[65%]">
                Add to Cart
                <ion-icon name="bag-outline"></ion-icon>
              </button>

              <span className="text-gray900 py-2 px-2 bg-gray100 rounded-full text-sm flex items-center justify-center">
                <ion-icon name="eye-outline"></ion-icon>
              </span>
            </div>

            <div className="flex flex-col items-center justify-center gap-2 mt-4">
              <h1>Green Apple</h1>

              <p className="font-bold text-gray900">
                $12.00{" "}
                <span className="ml-1 line-through text-gray400 font-normal">
                  $24.00
                </span>
              </p>

              <div className="flex items-center text-xs">
                <span className="text-warning">
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                </span>

                <p className="ml-1 text-gray500">(524 Feedback)</p>
              </div>

              <p className="text-xs text-gray400 font-medium">
                Hurry up! Offer ends In:
              </p>

              <div className="flex justify-center">
                <span className="mx-3">
                  <p className="text-lg font-medium text-gray900">00</p>
                  <p className="text-[0.65rem] mt-1 text-gray500 font-medium">
                    DAYS
                  </p>
                </span>

                <p>:</p>

                <span className="mx-3">
                  <p className="text-lg font-medium text-gray900">02</p>
                  <p className="text-[0.65rem] mt-1 text-gray500 font-medium">
                    HOURS
                  </p>
                </span>

                <p>:</p>

                <span className="mx-3">
                  <p className="text-lg font-medium text-gray900">18</p>
                  <p className="text-[0.65rem] mt-1 text-gray500 font-medium">
                    MINS
                  </p>
                </span>

                <p>:</p>

                <span className="mx-3">
                  <p className="text-lg font-medium text-gray900">46</p>
                  <p className="text-[0.65rem] mt-1 text-gray500 font-medium">
                    SECS
                  </p>
                </span>
              </div>
            </div>
          </div>

          <div className="col-span-2 bg-white md:col-span-3 sm:col-span-4">
            <Products
              img={ChineseCabageImg}
              type="Chinese Cabbage"
              pricetag="$12.00"
            />
          </div>

          <div className="col-span-2 bg-white md:col-span-3 sm:col-span-4">
            <Products
              img={GreenLettuceImg}
              type="Green Lettuce"
              pricetag="$9.00"
            />
          </div>

          <div className="col-span-2 bg-white md:col-span-3 sm:col-span-4">
            <Products img={EggPlantImg} type="Eggplant" pricetag="$34.00" />
          </div>

          <div className="col-span-2 bg-white md:col-span-3 sm:col-span-4">
            <Products
              img={BigPotatoesImg}
              type="Big Potatoes"
              pricetag="$12.00"
            />
          </div>

          <div className="col-span-2 bg-white md:col-span-3 sm:col-span-4">
            <Products img={CornImg} type="Corn" pricetag="$20.00" />
          </div>

          <div className="col-span-2 bg-white md:col-span-3 sm:col-span-4">
            <Products
              img={CaulflowerImg}
              type="Fresh Caulflower"
              pricetag="$20.00"
            />
          </div>

          <div className="col-span-2 bg-white md:col-span-3 sm:col-span-4">
            <Products
              img={GreenCapsicumImg}
              type="Green Capsicum"
              pricetag="$20.00"
            />
          </div>

          <div className="col-span-2 bg-white md:col-span-3 sm:col-span-4">
            <Products
              img={GreenChilliImg}
              type="Green Chilli"
              pricetag="$34.00"
            />
          </div>

          <div className="col-span-2 bg-white md:col-span-3 sm:col-span-4">
            <Products img={RedChilliImg} type="Red Chilli" pricetag="$12.00" />
          </div>

          <div className="col-span-2 bg-white md:col-span-3 sm:col-span-4">
            <Products
              img={RedTomatoesImg}
              type="Red Tomatoes"
              pricetag="$9.00"
            />
          </div>

          <div className="col-span-2 bg-white md:col-span-3 sm:col-span-4">
            <Products img={MangoImg} type="Surjapur Mango" pricetag="$34.00" />
          </div>
        </div>
      </StyledSection>

      <StyledSection className="pb-24">
        <img
          src={DiscountBannerImg}
          alt="discount-bannar-img"
          className="w-full h-[40vh] object-cover lg:object-contain"
        />

        <div className="flex items-center justify-between my-10">
          <h2 className="text-2xl font-bold md:text-xl">Featured Products</h2>

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
        </div>

        {/* On smaller screens */}
        <div className="hidden lg:block">
          <Slider {...settings}>
            <div>
              <Products
                img={GreenAppleImg}
                type="Green Apple"
                pricetag="$14.99"
                pricetag2="$20.99"
              />
            </div>

            <div>
              <Products
                img={IndianMaltaImg}
                type="Fresh Indian Malta"
                pricetag="$20.00"
              />
            </div>

            <div>
              <Products
                img={ChineseCabageImg}
                type="Chinese Cabbage"
                pricetag="$12.00"
              />
            </div>

            <div>
              <Products
                img={GreenLettuceImg}
                type="Green Lettuce"
                pricetag="$9.00"
              />
            </div>

            <div>
              <Products img={EggPlantImg} type="Eggplant" pricetag="$34.00" />
            </div>
          </Slider>
        </div>
      </StyledSection>

      <LatestNews />

      <Testimonial />

      <Brands/>

      <StyledSection>
        <h1 className="text-2xl font-bold text-gray900 text-center mb-10 sm:text-xl">
          Follow us on Instagram
        </h1>

        <div className="grid grid-cols-12 gap-6 lg:gap-4 md:gap-2">
          <div className="col-span-2 cursor-pointer relative group">
            <img
              src={InstagramIcon}
              alt="instagram-post"
              className="group-hover:opacity-90 duration-200 ease-in"
            />

            <span className="text-2xl text-white/90 absolute top-[35%] left-[35%] hidden group-hover:block duration-100 ease-in-out sm:text-xl">
              <ion-icon name="logo-instagram"></ion-icon>
            </span>
          </div>

          <div className="col-span-2 cursor-pointer relative group">
            <img
              src={InstagramIcon1}
              alt="instagram-post1"
              className="group-hover:opacity-90 duration-200 ease-in"
            />

            <span className="text-2xl text-white/90 absolute top-[35%] left-[35%] hidden group-hover:block duration-100 ease-in-out sm:text-xl xs:text-base">
              <ion-icon name="logo-instagram"></ion-icon>
            </span>
          </div>

          <div className="col-span-2 cursor-pointer relative group">
            <img
              src={InstagramIcon2}
              alt="instagram-post2"
              className="group-hover:opacity-90 duration-200 ease-in"
            />

            <span className="text-2xl text-white/90 absolute top-[35%] left-[35%] hidden group-hover:block duration-100 ease-in-out sm:text-xl xs:text-base">
              <ion-icon name="logo-instagram"></ion-icon>
            </span>
          </div>

          <div className="col-span-2 cursor-pointer relative group">
            <img
              src={InstagramIcon3}
              alt="instagram icon 3"
              className="group-hover:opacity-90 duration-200 ease-in"
            />

            <span className="text-2xl text-white/90 absolute top-[35%] left-[35%] hidden group-hover:block duration-100 ease-in-out sm:text-xl xs:text-base">
              <ion-icon name="logo-instagram"></ion-icon>
            </span>
          </div>

          <div className="col-span-2 cursor-pointer relative group">
            <img
              src={InstagramIcon4}
              alt="instagram-post4"
              className="group-hover:opacity-90 duration-200 ease-in"
            />

            <span className="text-2xl text-white/90 absolute top-[35%] left-[35%] hidden group-hover:block duration-100 ease-in-out sm:text-xl xs:text-base">
              <ion-icon name="logo-instagram"></ion-icon>
            </span>
          </div>

          <div className="col-span-2 cursor-pointer relative group">
            <img
              src={InstagramIcon5}
              alt="instagram-post5"
              className="group-hover:opacity-90 duration-200 ease-in"
            />

            <span className="text-2xl text-white absolute top-[35%] left-[35%] hidden group-hover:block duration-100 ease-in-out sm:text-xl xs:text-base">
              <ion-icon name="logo-instagram"></ion-icon>
            </span>
          </div>
        </div>
      </StyledSection>

      <StyledSection className="bg-[#F7F7F7] flex justify-between lg:flex-col lg:gap-6">
        <span className="flex items-center w-[15%] lg:w-full">
          <img src={LogoImg} alt="logo-img" className="md:w-6 xs:w-5" />

          <h2 className="text-3xl font-medium ml-1 md:text-2xl">Ecobazar</h2>
        </span>

        <div className="flex items-center justify-between w-[70%] lg:w-full sm:flex-col sm:items-start sm:gap-5">
          <div className="w-[40%] lg:w-[45%] sm:w-full">
            <h1 className="text-xl font-bold text-gray900 md:text-lg xs:text-base">
              Subcribe our Newsletter
            </h1>

            <p className="text-sm text-gray400 mt-2">
              Subscribe to our newsletter for exclusive updates, special offers, and a taste of what's to come!
            </p>
          </div>

          <div className="w-1/2 relative sm:w-[80%] xs:w-full">
            <input
              type="text"
              placeholder="Your email address"
              className="border border-solid border-gray200 w-full py-[0.4rem] pl-4 pr-[5.5rem] rounded-3xl text-sm outline-none"
            />

            <button className="bg-success px-6 py-2 rounded-3xl absolute right-0 text-white text-sm lg:px-3 lg:py-2">
              Subscribe
            </button>
          </div>
        </div>
      </StyledSection>
    </div>
  );
};

export default Home;
