import GrapeFruitImg from "../assets/Blog-img/grape-img.png";
import FilterIcon from "../assets/Blog-img/icons/Filter-icon.png";
import FruitsIconImg from "../assets/Blog-img/fruits-img.png";
import SpinachIconImg from "../assets/Blog-img/spinach-img.png";
import StirfryImg from "../assets/Blog-img/stir-fry-img.png";
import PepperIconImg from "../assets/Blog-img/pepper1-img.png";
import CarrotIconImg from "../assets/Blog-img/carrot-img.png";
import PeasIconImg from "../assets/Blog-img/green-peas-img.png";
import TwoOrangesIconImg from "../assets/Blog-img/two-oranges-1.png";
import CucumberImg from "../assets/Blog-img/cucumber-img.png";
import DicedPineapplesImg from "../assets/Blog-img/diced-pineapples-img.png";
import BlackberryImg from "../assets/Blog-img/blackberry-img.png";
import OrangesIconImg from "../assets/Blog-img/oranges-img.png";
import CalendarIcon from "../assets/Blog-img/icons/calendar-icon.png";
import LemonImg from "../assets/Blog-img/light-lemon-img.png";
import FruitsImg from "../assets/Blog-img/fruits-img.png";
import FruitBunchImg from "../assets/Blog-img/fruit-bunch-img.png";
import PepperImg from "../assets/Blog-img/pepper-img.png";
import OrangeFruitImg from "../assets/Blog-img/single-orange-img.png";
import UnripeOrangeImg from "../assets/Blog-img/unripe-orange-img.png";
import SlicedOrangeImg from "../assets/Blog-img/sliced-orange-img.png";
import OrangeImg2 from "../assets/Blog-img/two-orange-img.png";
import StrawberryFruitImg from "../assets/Blog-img/strawberry-img.png";
import FoodIcon from "../assets/Blog-img/icons/food-icon.png";
import ContactIcon from "../assets/Blog-img/icons/contact-icon.png";
import CommentIcon from "../assets/Blog-img/icons/comment-icon.png";
import BlogImg from "../assets/Blog-img/blog-img.png";
import StyledSection from "../components/StyledSection";
import NewsLetter from "../components/NewsLetter";
import ArrowIcon from "../assets/Home-img/icon-img/arrow-icon.png";

const BlogNews = ({ img, date, date2, text, title }) => {
  return (
    <div className="border border-solid border-gray300 rounded-lg cursor-pointer group">
      <div className="relative">
        <img src={img} alt="news-img" />

        <div className="absolute bottom-4 left-4 bg-white/90 flex items-center justify-center flex-col px-3 rounded group-hover:bg-white">
          <p className="text-gray900 font-semibold">{date}</p>
          <p className="text-[0.65rem] text-gray500 font-medium">{date2}</p>
        </div>
      </div>

      <div className="p-4 md:pl-2">
        <div className="flex items-center mb-2">
          <span className="flex items-center mr-2">
            <img src={FoodIcon} alt="food-icon" className="w-[1.1rem] md:w-[0.8rem]" />

            <p className="text-sm text-gray700 ml-1 lg:text-xs sm:text-[0.55rem] xs:text-xs">Food</p>
          </span>

          <span className="flex items-center mx-2 md:mx-0">
            <img src={ContactIcon} alt="contact-icon" className="w-[1.1rem] md:w-[0.8rem]" />

            <p className="text-sm text-gray700 ml-1 lg:text-xs sm:text-[0.55rem] xs:text-xs">By Admin</p>
          </span>

          <span className="flex items-center mx-2">
            <img src={CommentIcon} alt="comment-icon" className="w-[1.1rem] md:w-[0.8rem]" />

            <p className="text-sm text-gray700 ml-1 lg:text-xs sm:text-[0.55rem] xs:text-xs">{text}</p>
          </span>
        </div>

        <h2 className="group-hover:text-successDark md:text-sm">{title}</h2>

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

const Blog = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${BlogImg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="mt-0 h-[15vh] flex items-center md:pl-12 sm:pl-10 xs:pl-8"
      >
        <h2 className="text-gray200 hidden md:block">Blog</h2>
      </div>

      <StyledSection>
        <div className="flex items-center justify-between mb-10">
          <button className="flex items-center gap-2 bg-success py-2 px-7 rounded-3xl text-sm text-white lg:px-4 lg:py-1 lg:gap-1 lg:text-sm xs:px-2 xs:text-xs">
            Filter
            <img
              src={FilterIcon}
              alt="filter-icon"
              className="w-4 lg:w-3"
            />
          </button>

          <div className="flex items-center gap-2 w-[40%]">
            <p className="text-sm text-gray500 xs:text-xs">Sort by</p>

            <select className="border border-solid border-gray100 w-[60%] outline-none text-sm xs:text-xs">
              <option value="#">Latest</option>
            </select>
          </div>

          <span className="flex items-center gap-1 text-sm xs:text-xs">
            <h3 className="text-gray900 font-bold">52</h3>
            <p className="text-gray600">Results Found</p>
          </span>
        </div>

        <section className="flex justify-between">
          <div className="w-[33%] lg:w-[25%] lg:hidden">
            <div className="w-[100%] flex items-center">
              <span className="relative w-[100%]">
                <input
                  type="text"
                  className="w-full h-8 px-3 pl-7 py-[1.2rem] outline-none border border-gray100 rounded-bl-md rounded-tl-md placeholder:font-normal text-sm"
                  placeholder="Search"
                />

                <span className="absolute left-2 top-2 text-lg text-gray900">
                  <ion-icon name="search"></ion-icon>
                </span>
              </span>
            </div>

            <hr className="text-gray200 mt-6 mb-3" />

            <div>
              <h1 className="text-gray900 font-bold text-xl">Top Categories</h1>

              <span className="flex justify-between items-center text-sm mt-3">
                <h5 className="font-semibold">Fresh Fruit</h5>

                <p className="text-gray500">(134)</p>
              </span>

              <span className="flex justify-between items-center text-sm mt-3">
                <h5 className="font-semibold">Vegetables</h5>

                <p className="text-gray500">(150)</p>
              </span>

              <span className="flex justify-between items-center text-sm mt-3">
                <h5 className="font-semibold">Cooking</h5>

                <p className="text-gray500">(54)</p>
              </span>

              <span className="flex justify-between items-center text-sm mt-3">
                <h5 className="font-semibold">Snacks</h5>

                <p className="text-gray500">(47)</p>
              </span>

              <span className="flex justify-between items-center text-sm mt-3">
                <h5 className="font-semibold">Beverages</h5>

                <p className="text-gray500">(43)</p>
              </span>

              <span className="flex justify-between items-center text-sm mt-3">
                <h5 className="font-semibold">Beauty & Health</h5>

                <p className="text-gray500">(38)</p>
              </span>

              <span className="flex justify-between items-center text-sm mt-3">
                <h5 className="font-semibold">Bread & Bakery</h5>

                <p className="text-gray500">(15)</p>
              </span>

              <hr className="text-gray200 mt-6 mb-3" />

              {/* Popular Tag */}
              <h1 className="text-gray900 font-bold text-xl">Popular Tag</h1>

              <div className="mt-4 flex flex-col gap-2">
                <div className="flex items-center flex-wrap lg:gap-4 gap-1">
                  <span className="bg-gray50 py-1 px-3 rounded-3xl text-sm text-gray900 font-medium cursor-pointer hover:bg-success hover:text-white duration-100 ease-in">
                    Healthy
                  </span>
                  <span className="bg-gray50 py-1 px-3 rounded-3xl text-sm text-gray900 font-medium cursor-pointer hover:bg-success hover:text-white duration-100 ease-in">
                    Low fat
                  </span>
                  <span className="bg-gray50 py-1 px-3 rounded-3xl text-sm text-gray900 font-medium cursor-pointer hover:bg-success hover:text-white duration-100 ease-in">
                    Vegetarian
                  </span>
                  <span className="bg-gray50 py-1 px-3 rounded-3xl text-sm text-gray900 font-medium cursor-pointer hover:bg-success hover:text-white duration-100 ease-in">
                    Bread
                  </span>
                </div>

                <div className="flex items-center flex-wrap gap-1 lg:gap-4">
                  <span className="bg-gray50 py-1 px-3 rounded-3xl text-sm text-gray900 font-medium cursor-pointer hover:bg-success hover:text-white duration-100 ease-in">
                    Kid foods
                  </span>
                  <span className="bg-gray50 py-1 px-3 rounded-3xl text-sm text-gray900 font-medium cursor-pointer hover:bg-success hover:text-white duration-100 ease-in">
                    Vitamins
                  </span>
                  <span className="bg-gray50 py-1 px-3 rounded-3xl text-sm text-gray900 font-medium cursor-pointer hover:bg-success hover:text-white duration-100 ease-in">
                    Snacks
                  </span>
                  <span className="bg-gray50 py-1 px-3 rounded-3xl text-sm text-gray900 font-medium cursor-pointer hover:bg-success hover:text-white duration-100 ease-in">
                    Tiffin
                  </span>
                </div>

                <div className="flex items-center flex-wrap gap-1 lg:gap-4">
                  <span className="bg-gray50 py-1 px-3 rounded-3xl text-sm text-gray900 font-medium cursor-pointer hover:bg-success hover:text-white duration-100 ease-in">
                    Meat
                  </span>
                  <span className="bg-gray50 py-1 px-3 rounded-3xl text-sm text-gray900 font-medium cursor-pointer hover:bg-success hover:text-white duration-100 ease-in">
                    Launch
                  </span>
                  <span className="bg-gray50 py-1 px-3 rounded-3xl text-sm text-gray900 font-medium cursor-pointer hover:bg-success hover:text-white duration-100 ease-in">
                    Dinner
                  </span>
                </div>
              </div>

              <hr className="text-gray200 mt-6 mb-3" />

              <h1 className="text-gray900 font-bold text-xl">Our Gallery</h1>

              <div className="grid grid-cols-8 gap-3 gap-y-2 mt-4 lg:gap-1">
                <div className="col-span-2 cursor-pointer">
                  <img
                    src={FruitsIconImg}
                    alt="fruits-img"
                    className="h-full w-full rounded-md"
                  />
                </div>

                <div className="col-span-2 cursor-pointer">
                  <img
                    src={SpinachIconImg}
                    alt="spinach-img"
                  />
                </div>

                <div className="col-span-2 cursor-pointer">
                  <img
                    src={StirfryImg}
                    alt="stir-fry-img"
                  />
                </div>

                <div className="col-span-2 cursor-pointer">
                  <img
                    src={PepperIconImg}
                    alt="pepper-img"
                  />
                </div>

                <div className="col-span-2 cursor-pointer">
                  <img
                    src={CarrotIconImg}
                    alt="carrot-img"
                  />
                </div>

                <div className="col-span-2 cursor-pointer">
                  <img
                    src={PeasIconImg}
                    alt="green-peas-img"
                  />
                </div>

                <div className="col-span-2 cursor-pointer">
                  <img
                    src={TwoOrangesIconImg}
                    alt="two-oranges-img"
                  />
                </div>

                <div className="col-span-2 cursor-pointer">
                  <img
                    src={CucumberImg}
                    alt="cucumber-img"
                  />
                </div>
              </div>

              <hr className="text-gray200 mt-6 mb-3" />

              <h1 className="text-gray900 font-bold text-xl">Recently Added</h1>

              <div className="mt-5">
                <div className="flex gap-2">
                  <img
                    src={DicedPineapplesImg}
                    alt="diced-pineapple-img"
                    className="lg:w-[40%] lg:h-1/2"
                  />

                  <div>
                    <p className="text-gray900 font-semibold leading-tight mt-1 lg:text-xs lg:mt-0">
                      Sweet, natural, diverse, delicious, nourishing.
                    </p>

                    <span className="flex items-center gap-1 mt-2 text-xs lg:text-[0.6rem]">
                      <img
                        src={CalendarIcon}
                        alt="calendar-icon"
                        className="w-[0.8rem]"
                      />

                      <p className="text-gray600">Apr 25, 2021</p>
                    </span>
                  </div>
                </div>

                <div className="flex gap-2 my-5">
                  <img
                    src={OrangesIconImg}
                    alt="two-oranges-img"
                    className="lg:w-[40%] lg:h-1/2"
                  />

                  <div>
                    <p className="text-gray900 font-semibold leading-tight mt-1 lg:text-xs lg:mt-0">
                      Juicy, flavorful, nutritious, colorful, refreshing.
                    </p>

                    <span className="flex items-center gap-1 mt-2 text-xs lg:text-[0.6rem]">
                      <img
                        src={CalendarIcon}
                        alt="calendar-icon"
                        className="w-[0.8rem]"
                      />

                      <p className="text-gray600">Apr 25, 2021</p>
                    </span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <img
                    src={BlackberryImg}
                    alt="blackberry-img"
                    className="lg:w-[40%] lg:h-1/2"
                  />

                  <div>
                    <p className="text-gray900 font-semibold leading-tight mt-1 lg:text-xs lg:mt-0">
                      Nourishing, vibrant, succulent, diverse, refreshing.
                    </p>

                    <span className="flex items-center gap-1 mt-2 text-xs lg:text-[0.6rem]">
                      <img
                        src={CalendarIcon}
                        alt="calendar-icon"
                        className="w-[0.8rem]"
                      />

                      <p className="text-gray600">Apr 25, 2021</p>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h1 className="text-gray900 font-bold text-xl mt-8">Top Categories</h1>

              <span className="absolute left-2 top-2 text-lg text-gray900">
                <ion-icon name="search"></ion-icon>
              </span>
            </div>

            <div>
              <span>
                <select className="outline-0">
                  <option value="#">Fresh Fruit</option>
                  <option value="#">Vegetables</option>
                  <option value="#">Cooking</option>
                  <option value="#">Beverages</option>
                  <option value="#">Beauty & Health</option>
                  <option value="#">Beauty & Bakery</option>
                </select>
              </span>

              <span>
                <select className="outline-0">
                  <option value="#">Healthy</option>
                  <option value="#">Low fat</option>
                  <option value="#">Vegetarian</option>
                  <option value="#">Bread</option>
                  <option value="#">Kids foods</option>
                  <option value="#">Vitamins</option>
                  <option value="#">Snacks</option>
                  <option value="#">Tiffin</option>
                  <option value="#">Meat</option>
                  <option value="#">Launch</option>
                  <option value="#">Dinner</option>
                </select>
              </span>
            </div>
          </div>

          <div className="grid grid-cols-8 gap-8 w-[65%] lg:w-full sm:gap-x-2">
            <div className="col-span-4 xs:col-span-8">
              <BlogNews
                img={GrapeFruitImg}
                date="18"
                date2="NOV"
                text="55 comments"
                title="Each fruit offers a unique blend of vitamins, minerals, and antioxidants"
              />
            </div>

            <div className="col-span-4 xs:col-span-8">
              <BlogNews
                img={LemonImg}
                date="18"
                date2="NOV"
                text="55 comments"
                title="Fruit is nature's sweet gift, bursting with vibrant flavors and colors"
              />
            </div>

            <div className="col-span-4 xs:col-span-8">
              <BlogNews
                img={FruitsImg}
                date="18"
                date2="NOV"
                text="55 comments"
                title="They can be enjoyed fresh, dried, or blended into delicious smoothies and juices"
              />
            </div>

            <div className="col-span-4 xs:col-span-8">
              <BlogNews
                img={FruitBunchImg}
                date="18"
                date2="NOV"
                text="55 comments"
                title="Their versatility in culinary applications adds depth and richness to dishes, making them an indispensable part of global cuisines."
              />
            </div>

            <div className="col-span-4 xs:col-span-8">
              <BlogNews
                img={PepperImg}
                date="18"
                date2="NOV"
                text="55 comments"
                title="Incorporating a variety of fruits into one's diet ensures a flavorful and nutritious lifestyle."
              />
            </div>

            <div className="col-span-4 xs:col-span-8">
              <BlogNews
                img={OrangeFruitImg}
                date="18"
                date2="NOV"
                text="55 comments"
                title="Whether sweet like berries or tart like citrus, each fruit tantalizes taste buds uniquely"
              />
            </div>

            <div className="col-span-4 xs:col-span-8">
              <BlogNews
                img={OrangeImg2}
                date="18"
                date2="NOV"
                text="55 comments"
                title="From succulent berries to tropical delights, each offers a unique taste experience."
              />
            </div>

            <div className="col-span-4 xs:col-span-8">
              <BlogNews
                img={StrawberryFruitImg}
                date="18"
                date2="NOV"
                text="55 comments"
                title="Rich in vitamins, minerals, and fiber, fruits promote good health and vitality"
              />
            </div>

            <div className="col-span-4 xs:col-span-8">
              <BlogNews
                img={UnripeOrangeImg}
                date="18"
                date2="NOV"
                text="55 comments"
                title=" Many fruits are rich in essential nutrients like vitamins, minerals, and dietary fiber"
              />
            </div>

            <div className="col-span-4 xs:col-span-8">
              <BlogNews
                img={SlicedOrangeImg}
                date="18"
                date2="NOV"
                text="55 comments"
                title="Consuming a variety of fruits is associated with numerous health benefits."
              />
            </div>
          </div>
        </section>
      </StyledSection>

      <NewsLetter />
    </div>
  );
};

export default Blog;
