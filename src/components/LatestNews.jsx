import OrangeImg from "../assets/Home-img/orange-img.png";
import StirFryImg from "../assets/Home-img/stir-fry-img.png";
import ToastImg from "../assets/Home-img/toast-img.png";
import FoodIcon from "../assets/Home-img/icon-img/food-icon.png";
import ContactIcon from "../assets/Home-img/icon-img/contact-icon.png";
import CommentIcon from "../assets/Home-img/icon-img/comment-icon.png";
import ArrowIcon from "../assets/Home-img/icon-img/arrow-icon.png";
import StyledSection from "./StyledSection";
import Slider from "react-slick";

const News = ({ img, date, date2, text, title }) => {
  return (
    <div className="border border-solid border-gray300 rounded-lg cursor-pointer group">
      <div className="relative">
        <img src={img} alt="news-img" className="w-full" />

        <div className="absolute bottom-4 left-4 bg-white/90 flex items-center justify-center flex-col px-3 rounded group-hover:bg-white">
          <p className="text-gray900 font-semibold">{date}</p>
          <p className="text-[0.65rem] text-gray500 font-medium">{date2}</p>
        </div>
      </div>

      <div className="p-4 xl:p-3 xl:px-2">
        <div className="flex items-center mb-2">
          <span className="flex items-center mr-2">
            <img src={FoodIcon} alt="food-icon" className="w-[1.1rem] md:w-[0.8rem]" />

            <p className="text-sm text-gray700 ml-1 md:text-[0.8rem] md:ml-[0.1rem]">Food</p>
          </span>

          <span className="flex items-center mx-2 xl:mx-0">
            <img src={ContactIcon} alt="contact-icon" className="w-[1.1rem] md:w-[0.8rem]" />

            <p className="text-sm text-gray700 ml-1 md:text-[0.8rem] md:ml-[0.1rem]">By Admin</p>
          </span>

          <span className="flex items-center mx-2">
            <img src={CommentIcon} alt="comment-icon" className="w-[1.1rem] md:w-[0.8rem]" />

            <p className="text-sm text-gray700 ml-1 md:text-[0.8rem] md:ml-[0.1rem]">{text}</p>
          </span>
        </div>

        <h2 className="group-hover:text-successDark">{title}</h2>

        <button className="flex items-center text-xs text-success font-semibold mt-3">
          Read More
          <img
            src={ArrowIcon}
            alt="arrow-icon"
            className="w-3 ml-1"
          />
        </button>
      </div>
    </div>
  );
};

const LatestNews = () => {
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
      <h2 className="text-center text-2xl font-bold text-gray900 mb-12 sm:text-xl">
        Latest News
      </h2>

      <div className="grid grid-cols-9 gap-12 xl:gap-2 lg:hidden">
        <div className="col-span-3">
          <News
            img={OrangeImg}
            date="18"
            date2="NOV"
            text="55 comments"
            title="Juicy and refreshing, the fruit's sweetness burst with every bite—nature's perfect snack, pure delight."
          />
        </div>

        <div className="col-span-3">
          <News
            img={ToastImg}
            date="29"
            date2="JAN"
            text="49 comments"
            title="Mouthwatering dish, perfect blend of spices. A culinary delight that left me craving for more."
          />
        </div>

        <div className="col-span-3">
          <News
            img={StirFryImg}
            date="21"
            date2="FEB"
            text="51 comments"
            title="Indulged in an amazing meal, bursting with flavors that tickled my taste buds. A culinary masterpiece!"
          />
        </div>
      </div>

      {/* smaller devices */}
      <div className="hidden lg:block">
        <Slider {...settings}>
          <div className="col-span-3">
            <News
              img={OrangeImg}
              date="18"
              date2="NOV"
              text="55 comments"
              title="Juicy and refreshing, the fruit's sweetness burst with every bite—nature's perfect snack, pure delight."
            />
          </div>

          <div className="col-span-3">
            <News
              img={ToastImg}
              date="29"
              date2="JAN"
              text="49 comments"
              title="Mouthwatering dish, perfect blend of spices. A culinary delight that left me craving for more."
            />
          </div>

          <div className="col-span-3">
            <News
              img={StirFryImg}
              date="21"
              date2="FEB"
              text="51 comments"
              title="Indulged in an amazing meal, bursting with flavors that tickled my taste buds. A culinary masterpiece!"
            />
          </div>
        </Slider>
      </div>
    </StyledSection>
  );
};

export default LatestNews;
