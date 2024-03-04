import AboutImg from "../assets/About-img/about-img.png";
import StyledSection from "../components/StyledSection";
import AboutHeroImg from "../assets/About-img/about-hero-img.png";
import Testimonial from "../components/Testimonial";
import NewsLetter from "../components/NewsLetter";
import AboutImg2 from "../assets/About-img/about-img2.png";
import LeafIcon from "../assets/About-img/icons/leaf 2.png";
import StarsIcon from "../assets/About-img/icons/stars 1.png";
import DeliveryTruckIcon from "../assets/About-img/icons/delivery-truck 1.png";
import HeadphonesIcon from "../assets/About-img/icons/headphones-icon.png";
import ShoppingBagIcon from "../assets/About-img/icons/shopping-bag.png";
import PackageIcon from "../assets/About-img/icons/package.png";
import CheckIcon from "../assets/About-img/icons/check 1.png";
import ArrowIcon from "../assets/About-img/icons/arrow-icon.png";
import AboutImg3 from "../assets/About-img/about-img3.png";
import Member1 from "../assets/About-img/member1-img.png";
import Member2 from "../assets/About-img/member2-img.png";
import Member3 from "../assets/About-img/member3-img.png";
import Member4 from "../assets/About-img/member4-img.png";
import StepsLogo from "../assets/About-img/steps-logo.png";
import MangoLogo from "../assets/Home-img/brands-img/mango-logo.png";
import FoodieLogo from "../assets/Home-img/brands-img/foodie-logo.png";
import FoodLogo from "../assets/Home-img/brands-img/food-logo.png";
import BookOffLogo from "../assets/Home-img/brands-img/bookoff-logo.png";
import GseriesLogo from "../assets/Home-img/brands-img/Gseries-logo.png";
import Slider from "react-slick";

const About = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 630,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 460,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${AboutImg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="mt-0 h-[15vh] flex items-center md:pl-12 sm:pl-10 xs:pl-8"
      >
        <h2 className="text-gray200 hidden md:block">About</h2>
      </div>

      <StyledSection className="flex items-center justify-between py-16 sm:flex-col sm:items-start sm:gap-6 sm:py-10">
        <div className="w-[45%] lg:w-1/2 sm:w-full">
          <h1 className="text-gray900 text-[2.6rem] w-[80%] font-bold leading-tight mb-5 lg:text-2xl sm:w-full xs:text-xl">
            100% Trusted Organic Food Store
          </h1>

          <p className="text-gray600 md:text-sm sm:w-[85%] xs:w-full">
            At Shopery, we're dedicated to providing a mindful food experience.
            Our organic store curates a diverse range of fresh, locally sourced
            produce and wholesome essentials. Embrace a healthier, sustainable
            lifestyle as we prioritize your well-being and the planet, one
            organic choice at a time.
          </p>
        </div>

        <div className="w-[45%] sm:w-[70%] xs:w-full">
          <img src={AboutHeroImg} alt="about-hero-img" />
        </div>
      </StyledSection>

      <StyledSection className="flex items-center justify-between py-16 pl-0 lg:items-start md:flex-col-reverse md:gap-10">
        <div className="w-[50%] h-[70vh] lg:w-[40%] lg:h-[60vh] md:w-full">
          <img
            src={AboutImg2}
            alt="about-img2"
            className="h-full"
          />
        </div>

        <div className="w-[50%] lg:w-[55%] md:w-full">
          <h1 className="text-gray900 text-[2.6rem] w-[70%] font-bold leading-tight mb-5 lg:text-3xl lg:w-full sm:text-2xl xs:text-xl">
            100% Trusted Organic Food Store
          </h1>

          <p className="text-gray600 w-[85%] lg:w-[95%] sm:text-sm sm:w-[80%] xs:w-full">
            We believe in mindful living through fresh, locally sourced produce
            and wholesome selections. Join us on a journey towards health and
            sustainability. Together, let's cultivate a nourishing lifestyle for
            you and our planet
          </p>

          <div className="mt-5 flex items-center gap-16 lg:gap-2">
            <div>
              <div className="flex items-center">
                <div className="p-2 bg-success/10 w-12 h-12 rounded-full flex items-center justify-center lg:w-9 lg:h-9 xs:w-8 xs:h-8">
                  <img
                    src={LeafIcon}
                    alt="leaf-icon"
                    className="w-6 lg:w-5 xs:w-4"
                  />
                </div>

                <span className="ml-3 lg:ml-1">
                  <h5 className="text-gray900 font-semibold lg:text-sm xs:font-medium">
                    100% Organic food
                  </h5>

                  <p className="text-xs text-gray500 mt-1">
                    100% healthy & Fresh food.
                  </p>
                </span>
              </div>

              <div className="flex items-center my-5">
                <div className="p-2 bg-success/10 w-12 h-12 rounded-full flex items-center justify-center lg:w-9 lg:h-9">
                  <img
                    src={StarsIcon}
                    alt="stars-icon"
                    className="w-6 lg:w-5 xs:w-4"
                  />
                </div>

                <span className="ml-3 lg:ml-1">
                  <h5 className="text-gray900 font-semibold lg:text-sm xs:font-medium">
                    Customer Feedback
                  </h5>

                  <p className="text-xs text-gray500 mt-1">
                    Our happy customer
                  </p>
                </span>
              </div>

              <div className="flex items-center">
                <div className="p-2 bg-success/10 w-12 h-12 rounded-full flex items-center justify-center lg:w-9 lg:h-9">
                  <img
                    src={DeliveryTruckIcon}
                    alt="delivery-truck-icon"
                    className="w-6 lg:w-5"
                  />
                </div>

                <span className="ml-3 lg:ml-1">
                  <h5 className="text-gray900 font-semibold lg:text-sm xs:font-medium">
                    Free Shipping
                  </h5>

                  <p className="text-xs text-gray500 mt-1">
                    Free shipping with discount
                  </p>
                </span>
              </div>
            </div>

            <div>
              <div className="flex items-center">
                <div className="p-2 bg-success/10 w-12 h-12 rounded-full flex items-center justify-center lg:w-9 lg:h-9 xs:w-8 xs:h-8">
                  <img
                    src={HeadphonesIcon}
                    alt="headphones-icon"
                    className="w-5 lg:w-4 xs:w-3"
                  />
                </div>

                <span className="ml-3 lg:ml-1">
                  <h5 className="text-gray900 font-semibold lg:text-sm xs:font-medium">
                    Great Support 24/7
                  </h5>

                  <p className="text-xs text-gray500 mt-1">
                    Instant access to Contact
                  </p>
                </span>
              </div>

              <div className="flex items-center my-5">
                <div className="p-2 bg-success/10 w-12 h-12 rounded-full flex items-center justify-center lg:w-9 lg:h-9 xs:w-8 xs:h-8">
                  <img
                    src={ShoppingBagIcon}
                    alt="shopping-bag-icon"
                    className="w-5 lg:w-4 xs:w-3"
                  />
                </div>

                <span className="ml-3 lg:ml-1">
                  <h5 className="text-gray900 font-semibold lg:text-sm xs:font-medium">
                    100% Sucure Payment
                  </h5>

                  <p className="text-xs text-gray500 mt-1">
                    We ensure your money is save
                  </p>
                </span>
              </div>

              <div className="flex items-center">
                <div className="p-2 bg-success/10 w-12 h-12 rounded-full flex items-center justify-center lg:w-9 lg:h-9 xs:w-8 xs:h-8">
                  <img
                    src={PackageIcon}
                    alt="package-icon"
                    className="w-6 lg:w-5 xs:w-3"
                  />
                </div>

                <span className="ml-3 lg:ml-1">
                  <h5 className="text-gray900 font-semibold lg:text-sm xs:font-medium">
                    100% Organic Food
                  </h5>

                  <p className="text-xs text-gray500 mt-1">
                    100% healthy & Fresh food.
                  </p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </StyledSection>

      <StyledSection className="flex items-center justify-between py-16 md:flex-col">
        <div className="w-[45%] md:w-full">
          <h1 className="text-gray900 text-[2.6rem] w-[80%] font-bold leading-tight mb-5 lg:text-3xl lg:w-[90%] sm:text-2xl">
            We Delivered, You Enjoy Your Order.
          </h1>

          <p className="text-gray600 md:w-[90%] sm:text-sm">
            Experience the convenience of Shopery Organic Delivery. We bring the
            goodness of our curated, locally sourced, and organic products
            straight to your doorstep. Embrace health effortlessly, knowing
            every choice supports your well-being and a sustainable,
            eco-friendly lifestyle.
          </p>

          <div className="mt-4">
            <div className="flex items-center">
              <div className="p-1 bg-success/10 w-5 rounded-full flex items-center justify-center">
                <img
                  src={CheckIcon}
                  alt="check-icon"
                />
              </div>

              <p className="text-sm ml-2 text-gray600 xs:text-xs">
                Quick and excellent delivery
              </p>
            </div>

            <div className="flex items-center my-2">
              <div className="p-1 bg-success/10 w-5 rounded-full flex items-center justify-center">
                <img
                  src={CheckIcon}
                  alt="check-icon"
                />
              </div>

              <p className="text-sm ml-2 text-gray600 xs:text-xs">
                Impeccable Service
              </p>
            </div>

            <div className="flex items-center">
              <div className="p-1 bg-success/10 w-5 rounded-full flex items-center justify-center">
                <img
                  src={CheckIcon}
                  alt="check-icon"
                />
              </div>

              <p className="text-sm ml-2 text-gray600 xs:text-xs">
                Excellent products guaranteed
              </p>
            </div>
          </div>

          <button className="mt-5 flex items-center gap-2 bg-success text-white py-[0.6rem] px-9 text-sm rounded-3xl md:py-[0.5rem] md:px-6 md:text-xs">
            Shop Now
            <img
              src={ArrowIcon}
              alt="arrow-icon"
              className="w-3"
            />
          </button>
        </div>

        <div className="w-[45%] h-[55vh] md:w-[60%] md:mt-8 sm:w-[80%] xs:w-full xs:h-[50vh]">
          <img
            src={AboutImg3}
            alt="about-img3"
            className="h-full w-full"
          />
        </div>
      </StyledSection>

      <StyledSection className="bg-gradient-to-b from-gray100 to-white md:pb-28">
        <div className="text-center flex justify-center items-center flex-col">
          <h1 className="text-3xl font-semibold text-gray900 mb-3 lg:text-2xl">
            Our Awesome Team
          </h1>
          <p className="w-[55%] text-gray600 lg:w-[70%] lg:text-sm">
            Our dedicated team nurtures the land to bring you fresh, quality
            produce. Together, we grow wholesome connections, rooted in a shared
            love for nourishing communities and the earth.
          </p>
        </div>

        <div className="mt-10 flex items-center justify-between md:hidden">
          <div className="w-[15rem] bg-white rounded-lg border border-solid border-gray100 pb-4 cursor-pointer hover:shadow-md duration-100 ease-in-out relative group">
            <img src={Member1} alt="member1-img" />

            <div className="ml-4 mt-4 lg:ml-2">
              <h1 className="font-medium text-gray900 lg:text-sm">
                Jenny Wilson
              </h1>

              <p className="text-xs text-gray500 md:text-[0.7rem]">
                Ceo & Founder
              </p>
            </div>

            <div className="hidden items-center gap-1 text-white/80 absolute top-24 left-11 group-hover:flex duration-100 ease-in">
              <div className="hover:bg-success py-2 px-3 rounded-full text-sm flex items-center justify-center cursor-pointer duration-100 ease-in-out">
                <i className="fa-brands fa-facebook-f"></i>
              </div>

              <div className="hover:bg-success py-2 px-2 rounded-full text-sm flex items-center justify-center cursor-pointer duration-100 ease-in-out">
                <i className="fa-brands fa-x-twitter"></i>
              </div>

              <div className="hover:bg-success py-2 px-3 rounded-full text-sm flex items-center justify-center cursor-pointer duration-100 ease-in-out">
                <i className="fa-brands fa-pinterest-p"></i>
              </div>

              <div className="hover:bg-success py-2 px-2 rounded-full text-sm flex items-center justify-center cursor-pointer duration-100 ease-in-out">
                <i className="fa-brands fa-instagram"></i>
              </div>
            </div>
          </div>

          <div className="w-[15rem] bg-white rounded-lg border border-solid border-gray100 pb-4 cursor-pointer hover:shadow-md duration-100 ease-in-out relative group">
            <img
              src={Member2}
              alt="member2-img"
              className="brightness-75"
            />

            <div className="ml-4 mt-4 lg:ml-2">
              <h1 className="font-medium text-gray900 lg:text-sm">
                Jane Cooper
              </h1>

              <p className="text-xs text-gray500 md:text-[0.7rem]">Worker</p>
            </div>

            <div className="hidden items-center gap-1 text-white/80 absolute top-24 left-11 group-hover:flex duration-100 ease-in">
              <div className="hover:bg-success py-2 px-3 rounded-full text-sm flex items-center justify-center cursor-pointer duration-100 ease-in-out">
                <i className="fa-brands fa-facebook-f"></i>
              </div>

              <div className="hover:bg-success py-2 px-2 rounded-full text-sm flex items-center justify-center cursor-pointer duration-100 ease-in-out">
                <i className="fa-brands fa-x-twitter"></i>
              </div>

              <div className="hover:bg-success py-2 px-3 rounded-full text-sm flex items-center justify-center cursor-pointer duration-100 ease-in-out">
                <i className="fa-brands fa-pinterest-p"></i>
              </div>

              <div className="hover:bg-success py-2 px-2 rounded-full text-sm flex items-center justify-center cursor-pointer duration-100 ease-in-out">
                <i className="fa-brands fa-instagram"></i>
              </div>
            </div>
          </div>

          <div className="w-[15rem] bg-white rounded-lg border border-solid border-gray100 pb-4 cursor-pointer hover:shadow-md duration-100 ease-in-out relative group">
            <img
              src={Member3}
              alt="member3-img"
              className="brightness-75"
            />

            <div className="ml-4 mt-4 lg:ml-2">
              <h1 className="font-medium text-gray900 lg:text-sm">
                Cody Fisher
              </h1>

              <p className="text-xs text-gray500 md:text-[0.7rem]">
                Security Guard
              </p>
            </div>

            <div className="hidden items-center gap-1 text-white/80 absolute top-24 left-11 group-hover:flex duration-100 ease-in">
              <div className="hover:bg-success py-2 px-3 rounded-full text-sm flex items-center justify-center cursor-pointer duration-100 ease-in-out">
                <i className="fa-brands fa-facebook-f"></i>
              </div>

              <div className="hover:bg-success py-2 px-2 rounded-full text-sm flex items-center justify-center cursor-pointer duration-100 ease-in-out">
                <i className="fa-brands fa-x-twitter"></i>
              </div>

              <div className="hover:bg-success py-2 px-3 rounded-full text-sm flex items-center justify-center cursor-pointer duration-100 ease-in-out">
                <i className="fa-brands fa-pinterest-p"></i>
              </div>

              <div className="hover:bg-success py-2 px-2 rounded-full text-sm flex items-center justify-center cursor-pointer duration-100 ease-in-out">
                <i className="fa-brands fa-instagram"></i>
              </div>
            </div>
          </div>

          <div className="w-[15rem] bg-white rounded-lg border border-solid border-gray100 pb-4 cursor-pointer hover:shadow-md duration-100 ease-in-out relative group">
            <img
              src={Member4}
              alt="member4-img"
              className="brightness-75"
            />

            <div className="ml-4 mt-4 lg:ml-2">
              <h1 className="font-medium text-gray900 lg:text-sm">
                Robert Fox
              </h1>

              <p className="text-xs text-gray500 md:text-[0.7rem]">
                Senior Farmer Manager
              </p>
            </div>

            <div className="hidden items-center gap-1 text-white/80 absolute top-24 left-11 group-hover:flex duration-100 ease-in">
              <div className="hover:bg-success py-2 px-3 rounded-full text-sm flex items-center justify-center cursor-pointer duration-100 ease-in-out">
                <i className="fa-brands fa-facebook-f"></i>
              </div>

              <div className="hover:bg-success py-2 px-2 rounded-full text-sm flex items-center justify-center cursor-pointer duration-100 ease-in-out">
                <i className="fa-brands fa-x-twitter"></i>
              </div>

              <div className="hover:bg-success py-2 px-3 rounded-full text-sm flex items-center justify-center cursor-pointer duration-100 ease-in-out">
                <i className="fa-brands fa-pinterest-p"></i>
              </div>

              <div className="hover:bg-success py-2 px-2 rounded-full text-sm flex items-center justify-center cursor-pointer duration-100 ease-in-out">
                <i className="fa-brands fa-instagram"></i>
              </div>
            </div>
          </div>
        </div>

        {/* On smaller screens */}
        <div className="hidden md:block mt-10">
          <Slider {...settings}>
            <div className="w-[15rem] bg-white rounded-lg border border-solid border-gray100 pb-4 cursor-pointer hover:shadow-md duration-100 ease-in-out relative group">
              <img
                src={Member1}
                alt="member1-img"
                className="w-full"
              />

              <div className="ml-4 mt-4 lg:ml-2">
                <h1 className="font-medium text-gray900 lg:text-sm">
                  Jenny Wilson
                </h1>

                <p className="text-xs text-gray500 md:text-[0.7rem]">
                  Ceo & Founder
                </p>
              </div>

              <div className="hidden items-center gap-1 text-white/80 absolute top-24 left-11 group-hover:flex duration-100 ease-in xs:top-36 xs:left-28">
                <div className="hover:bg-success py-2 px-3 rounded-full text-sm flex items-center justify-center cursor-pointer duration-100 ease-in-out">
                  <i className="fa-brands fa-facebook-f"></i>
                </div>

                <div className="hover:bg-success py-2 px-2 rounded-full text-sm flex items-center justify-center cursor-pointer duration-100 ease-in-out">
                  <i className="fa-brands fa-x-twitter"></i>
                </div>

                <div className="hover:bg-success py-2 px-3 rounded-full text-sm flex items-center justify-center cursor-pointer duration-100 ease-in-out">
                  <i className="fa-brands fa-pinterest-p"></i>
                </div>

                <div className="hover:bg-success py-2 px-2 rounded-full text-sm flex items-center justify-center cursor-pointer duration-100 ease-in-out">
                  <i className="fa-brands fa-instagram"></i>
                </div>
              </div>
            </div>

            <div className="w-[15rem] bg-white rounded-lg border border-solid border-gray100 pb-4 cursor-pointer hover:shadow-md duration-100 ease-in-out relative group">
              <img
                src={Member2}
                alt="member2-img"
                className="brightness-75 w-full"
              />

              <div className="ml-4 mt-4 lg:ml-2">
                <h1 className="font-medium text-gray900 lg:text-sm">
                  Jane Cooper
                </h1>

                <p className="text-xs text-gray500 md:text-[0.7rem]">Worker</p>
              </div>

              <div className="hidden items-center gap-1 text-white/80 absolute top-24 left-11 group-hover:flex duration-100 ease-in xs:top-36 xs:left-28">
                <div className="hover:bg-success py-2 px-3 rounded-full text-sm flex items-center justify-center cursor-pointer duration-100 ease-in-out">
                  <i className="fa-brands fa-facebook-f"></i>
                </div>

                <div className="hover:bg-success py-2 px-2 rounded-full text-sm flex items-center justify-center cursor-pointer duration-100 ease-in-out">
                  <i className="fa-brands fa-x-twitter"></i>
                </div>

                <div className="hover:bg-success py-2 px-3 rounded-full text-sm flex items-center justify-center cursor-pointer duration-100 ease-in-out">
                  <i className="fa-brands fa-pinterest-p"></i>
                </div>

                <div className="hover:bg-success py-2 px-2 rounded-full text-sm flex items-center justify-center cursor-pointer duration-100 ease-in-out">
                  <i className="fa-brands fa-instagram"></i>
                </div>
              </div>
            </div>

            <div className="w-[15rem] bg-white rounded-lg border border-solid border-gray100 pb-4 cursor-pointer hover:shadow-md duration-100 ease-in-out relative group">
              <img
                src={Member3}
                alt="member3-img"
                className="brightness-75 w-full"
              />

              <div className="ml-4 mt-4 lg:ml-2">
                <h1 className="font-medium text-gray900 lg:text-sm">
                  Cody Fisher
                </h1>

                <p className="text-xs text-gray500 md:text-[0.7rem]">
                  Security Guard
                </p>
              </div>

              <div className="hidden items-center gap-1 text-white/80 absolute top-24 left-11 group-hover:flex duration-100 ease-in xs:top-36 xs:left-28">
                <div className="hover:bg-success py-2 px-3 rounded-full text-sm flex items-center justify-center cursor-pointer duration-100 ease-in-out">
                  <i className="fa-brands fa-facebook-f"></i>
                </div>

                <div className="hover:bg-success py-2 px-2 rounded-full text-sm flex items-center justify-center cursor-pointer duration-100 ease-in-out">
                  <i className="fa-brands fa-x-twitter"></i>
                </div>

                <div className="hover:bg-success py-2 px-3 rounded-full text-sm flex items-center justify-center cursor-pointer duration-100 ease-in-out">
                  <i className="fa-brands fa-pinterest-p"></i>
                </div>

                <div className="hover:bg-success py-2 px-2 rounded-full text-sm flex items-center justify-center cursor-pointer duration-100 ease-in-out">
                  <i className="fa-brands fa-instagram"></i>
                </div>
              </div>
            </div>

            <div className="w-[15rem] bg-white rounded-lg border border-solid border-gray100 pb-4 cursor-pointer hover:shadow-md duration-100 ease-in-out relative group">
              <img
                src={Member4}
                alt="member4-img"
                className="brightness-75 w-full"
              />

              <div className="ml-4 mt-4 lg:ml-2">
                <h1 className="font-medium text-gray900 lg:text-sm">
                  Robert Fox
                </h1>

                <p className="text-xs text-gray500 md:text-[0.7rem]">
                  Senior Farmer Manager
                </p>
              </div>

              <div className="hidden items-center gap-1 text-white/80 absolute top-24 left-11 group-hover:flex duration-100 ease-in xs:top-36 xs:left-28">
                <div className="hover:bg-success py-2 px-3 rounded-full text-sm flex items-center justify-center cursor-pointer duration-100 ease-in-out">
                  <i className="fa-brands fa-facebook-f"></i>
                </div>

                <div className="hover:bg-success py-2 px-2 rounded-full text-sm flex items-center justify-center cursor-pointer duration-100 ease-in-out">
                  <i className="fa-brands fa-x-twitter"></i>
                </div>

                <div className="hover:bg-success py-2 px-3 rounded-full text-sm flex items-center justify-center cursor-pointer duration-100 ease-in-out">
                  <i className="fa-brands fa-pinterest-p"></i>
                </div>

                <div className="hover:bg-success py-2 px-2 rounded-full text-sm flex items-center justify-center cursor-pointer duration-100 ease-in-out">
                  <i className="fa-brands fa-instagram"></i>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </StyledSection>

      <Testimonial />

      <StyledSection className="py-16">
        <div className="grid grid-cols-12 gap-16 lg:gap-10 sm:gap-6 xs:gap-3">
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
              alt="food-logo-img"
            />
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
              alt="bookoff-logo-img"
            />
          </div>
        </div>
      </StyledSection>

      <NewsLetter />
    </div>
  );
};

export default About;
