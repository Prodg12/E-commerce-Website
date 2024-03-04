import Slider from "react-slick";
import QuoteIcon from "../assets/Home-img/icon-img/quote-icon.png";
import ProfileImg1 from "../assets/Home-img/profile-img1.png";
import ProfileImg2 from "../assets/Home-img/profile-img2.png";
import ProfileImg3 from "../assets/Home-img/profile-img3.png";
import StyledSection from "../components/StyledSection";

const Testifier = ({ text, img, name, title }) => {
  return (
    <div className="bg-white p-5 flex flex-col gap-4 rounded lg:p-3">
      <img src={QuoteIcon} alt="quote-icon" className="w-6 lg:w-5" />

      <h3 className="lg:text-sm">{text}</h3>

      <div className="flex items-center justify-between lg:flex-col lg:items-start lg:gap-2">
        <div className="flex items-center">
          <img src={img} alt="customer-img" className="w-11 lg:w-8" />

          <span className="ml-2">
            <h4 className="text-sm font-bold text-gray900 m-0">{name}</h4>

            <p className="text-xs text-gray400">{title}</p>
          </span>
        </div>

        <span className="text-warning text-xs">
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star"></ion-icon>
        </span>
      </div>
    </div>
  );
};

const Testimonial = () => {
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
    <StyledSection className="py-16 bg-gray50 pb-24">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-gray900 lg:text-xl">
          Client Testimonials
        </h2>

        <div className="flex items-center gap-3 hidden">
          <span className="p-2 flex items-center justify-center bg-white rounded-full cursor-pointer hover:bg-success hover:text-white">
            <ion-icon name="arrow-back"></ion-icon>
          </span>
          <span className="p-2 flex items-center justify-center bg-white rounded-full cursor-pointer hover:bg-success hover:text-white">
            <ion-icon name="arrow-forward"></ion-icon>
          </span>
        </div>
      </div>

      <div className="grid grid-cols-9 gap-6 lg:gap-2 md:hidden">
        <div className="col-span-3">
          <Testifier
            text="Exceptional dining experience—stellar service, ambrosial dishes. A culinary haven that exceeded all expectations. Highly recommended!"
            img={ProfileImg3}
            name="Robert Fox"
            title="Customer"
          />
        </div>

        <div className="col-span-3">
          <Testifier
            text="A culinary gem! Exquisite flavors, warm ambiance, and impeccable service. Every visit is a delightful journey."
            img={ProfileImg2}
            name="Dianne Russell"
            title="Customer"
          />
        </div>

        <div className="col-span-3">
          <Testifier
            text="Exceptional restaurant! From the inviting atmosphere to the mouthwatering dishes—consistently top-notch. A true dining pleasure!"
            img={ProfileImg1}
            name="Eleanor Pena"
            title="Customer"
          />
        </div>
      </div>

      <div className="hidden md:block">
        <Slider {...settings}>
          <div>
            <Testifier
              text="Exceptional dining experience—stellar service, ambrosial dishes. A culinary haven that exceeded all expectations. Highly recommended!"
              img={ProfileImg3}
              name="Robert Fox"
              title="Customer"
            />
          </div>

          <div>
            <Testifier
              text="A culinary gem! Exquisite flavors, warm ambiance, and impeccable service. Every visit is a delightful journey."
              img={ProfileImg2}
              name="Dianne Russell"
              title="Customer"
            />
          </div>

          <div>
            <Testifier
              text="Exceptional restaurant! From the inviting atmosphere to the mouthwatering dishes—consistently top-notch. A true dining pleasure!"
              img={ProfileImg1}
              name="Eleanor Pena"
              title="Customer"
            />
          </div>
        </Slider>
      </div>
    </StyledSection>
  );
};

export default Testimonial;
