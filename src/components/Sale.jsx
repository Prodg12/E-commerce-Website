import ArrowIcon from "../assets/Home-img/icon-img/arrow-icon.png";
import BestDealsImg from "../assets/Home-img/best-deals-img.png";
import LowFatImg from "../assets/Home-img/low-fat-img.png";
import SummerSaleImg from "../assets/Home-img/summer-sale-img.png";
import Slider from "react-slick";
import StyledSection from "./StyledSection";

const Sale = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <StyledSection className="pb-28">
      <div className="grid grid-cols-9 gap-10 xl:gap-2 lg:hidden">
        <div
          style={{
            backgroundImage: `url(${BestDealsImg})`,
            backgroundPosition: "center",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
          className="h-[80vh] col-span-3 sm:col-span-4 text-center"
        >
          <div className="mt-[4.5rem] text-white flex justify-center flex-col items-center">
            <h6 className="tracking-wider text-sm">BEST DEALS</h6>

            <h1 className="text-3xl font-semibold tracking-wide mt-2">
              Sale of the Month
            </h1>

            <div className="flex justify-center mt-2">
              <span className="mx-5">
                <p className="text-xl">00</p>
                <p className="text-[0.65rem] mt-1 font-light opacity-70">
                  DAYS
                </p>
              </span>

              <p>:</p>

              <span className="mx-5">
                <p className="text-xl">02</p>
                <p className="text-[0.65rem] mt-1 font-light opacity-70">
                  HOURS
                </p>
              </span>

              <p>:</p>

              <span className="mx-5">
                <p className="text-xl">18</p>
                <p className="text-[0.65rem] mt-1 font-light opacity-70">
                  MINS
                </p>
              </span>

              <p>:</p>

              <span className="mx-5">
                <p className="text-xl">46</p>
                <p className="text-[0.65rem] mt-1 font-light opacity-70">
                  SECS
                </p>
              </span>
            </div>

            <button className="flex items-center text-xs text-success font-semibold bg-white py-[0.65rem] px-6 rounded-full mt-3 hover:gap-1 duration-150 ease-in">
              Shop Now
              <img src={ArrowIcon} alt="arrow-icon" className="w-3 ml-1" />
            </button>
          </div>
        </div>

        <div
          style={{
            backgroundImage: `url(${LowFatImg})`,
            backgroundPosition: "center",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
          className="h-[80vh] col-span-3"
        >
          <div className="mt-[4.5rem] text-white flex justify-center flex-col items-center">
            <h6 className="tracking-wider text-sm">80% FAT FREE</h6>

            <h1 className="text-3xl font-semibold tracking-wide mt-2">
              Low-Fat Meat
            </h1>

            <p className="text-sm tracking-wider mt-3">
              Started at <span className="text-warning">$79.99</span>
            </p>

            <button className="flex items-center text-xs text-success font-semibold bg-white py-[0.65rem] px-6 rounded-full mt-6 hover:gap-1 duration-150 ease-in">
              Shop Now
              <img src={ArrowIcon} alt="arrow-icon" className="w-3 ml-1" />
            </button>
          </div>
        </div>

        <div
          style={{
            backgroundImage: `url(${SummerSaleImg})`,
            backgroundPosition: "center",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
          className="h-[80vh] col-span-3"
        >
          <div className="mt-[4.5rem] text-gray900 flex justify-center flex-col items-center">
            <h6 className="tracking-wider text-sm font-medium">SUMMER SALE</h6>

            <h1 className="text-3xl font-semibold tracking-wide mt-2">
              100% Fresh Fruit
            </h1>

            <p className="text-sm tracking-wider mt-3 font-medium">
              Up to{" "}
              <span className="text-[#FCC900] bg-gray900 py-[0.35rem] px-2 rounded-sm">
                64% OFF
              </span>
            </p>

            <button className="flex items-center text-xs text-success font-semibold bg-white py-[0.65rem] px-6 rounded-full mt-6 hover:gap-1 duration-150 ease-in">
              Shop Now
              <img src={ArrowIcon} alt="arrow-icon" className="w-3 ml-1" />
            </button>
          </div>
        </div>
      </div>

      <div className="hidden lg:block">
        <Slider {...settings}>
          <div className="h-[80vh] text-center xs:h-[70vh] relative">
            <img
              src={BestDealsImg}
              alt="bestdealimg"
              className="w-full absolute left-0 -z-10 brightness-50"
            />

            <div className="mt-[4.5rem] text-white flex justify-center flex-col items-center">
              <h6 className="tracking-wider text-sm">BEST DEALS</h6>

              <h1 className="text-2xl font-semibold tracking-wide mt-2">
                Sale of the Month
              </h1>

              <div className="flex justify-center mt-2">
                <span className="mx-5">
                  <p className="text-xl">00</p>
                  <p className="text-[0.4rem] mt-1 font-light opacity-70">
                    DAYS
                  </p>
                </span>

                <p>:</p>

                <span className="mx-5">
                  <p className="text-xl">02</p>
                  <p className="text-[0.4rem] mt-1 font-light opacity-70">
                    HOURS
                  </p>
                </span>

                <p>:</p>

                <span className="mx-5">
                  <p className="text-xl">18</p>
                  <p className="text-[0.4rem] mt-1 font-light opacity-70">
                    MINS
                  </p>
                </span>

                <p>:</p>

                <span className="mx-5">
                  <p className="text-xl">46</p>
                  <p className="text-[0.4rem] mt-1 font-light opacity-70">
                    SECS
                  </p>
                </span>
              </div>

              <button className="flex items-center text-xs text-success font-semibold bg-white py-[0.65rem] px-6 rounded-full mt-3 hover:gap-1 duration-150 ease-in">
                Shop Now
                <img src={ArrowIcon} alt="arrow-icon" className="w-3 ml-1" />
              </button>
            </div>
          </div>

          <div className="h-[80vh] relative xs:h-[70vh]">
            <img
              src={LowFatImg}
              alt="lowfatimg"
              className="w-full absolute left-0 -z-10 brightness-50"
            />
            <div className="mt-[4.5rem] text-white flex justify-center flex-col items-center">
              <h6 className="tracking-wider text-sm">80% FAT FREE</h6>

              <h1 className="text-2xl font-semibold tracking-wide mt-2">
                Low-Fat Meat
              </h1>

              <p className="text-sm tracking-wider mt-3">
                Started at <span className="text-warning">$79.99</span>
              </p>

              <button className="flex items-center text-xs text-success font-semibold bg-white py-[0.65rem] px-6 rounded-full mt-6 hover:gap-1 duration-150 ease-in">
                Shop Now
                <img src={ArrowIcon} alt="arrow-icon" className="w-3 ml-1" />
              </button>
            </div>
          </div>

          <div className="h-[80vh] relative xs:h-[70vh]">
            <img
              src={SummerSaleImg}
              alt="summersaleimg"
              className="w-full absolute left-o -z-10"
            />
            <div className="mt-[4.5rem] text-gray900 flex justify-center flex-col items-center">
              <h6 className="tracking-wider text-sm font-medium">
                SUMMER SALE
              </h6>

              <h1 className="text-2xl font-semibold tracking-wide mt-2">
                100% Fresh Fruit
              </h1>

              <p className="text-xs tracking-wider mt-3 font-medium">
                Up to{" "}
                <span className="text-[#FCC900] bg-gray900 py-[0.25rem] px-2 rounded-sm">
                  64% OFF
                </span>
              </p>

              <button className="flex items-center text-xs text-success font-semibold bg-white py-[0.65rem] px-6 rounded-full mt-6 hover:gap-1 duration-150 ease-in">
                Shop Now
                <img src={ArrowIcon} alt="arrow-icon" className="w-3 ml-1" />
              </button>
            </div>
          </div>
        </Slider>
      </div>
    </StyledSection>
  );
};

export default Sale;
