import StyledSection from "./StyledSection";

const NewsLetter = () => {
  return (
    <StyledSection className="bg-[#F7F7F7] flex items-center justify-between lg:items-start lg:flex-col lg:gap-6">
      <div className="w-[35%] lg:w-full">
        <h1 className="text-xl font-bold text-gray900">
          Subcribe our Newsletter
        </h1>

        <p className="text-sm text-gray400 mt-2">
          Subscribe to our newsletter for exclusive updates, special offers, and a taste of what's to come!
        </p>
      </div>

      <div className="w-[40%] relative lg:w-[70%] sm:w-[90%] xs:w-full">
        <input
          type="text"
          placeholder="Your email address"
          className="border border-solid border-gray200 w-full py-[0.4rem] pl-4 pr-[6.5rem] rounded-3xl text-sm outline-none sm:py-[0.3rem]"
        />

        <button className="bg-success px-6 py-2 rounded-3xl absolute right-0 text-white text-sm sm:py-2 sm:text-xs">
          Subscribe
        </button>
      </div>

      <div className="flex items-center gap-1">
        <div className="hover:bg-success hover:text-white text-gray900 py-2 px-3 rounded-full text-sm flex items-center justify-center cursor-pointer duration-100 ease-in-out">
          <i className="fa-brands fa-facebook-f"></i>
        </div>

        <div className="hover:bg-success hover:text-white text-gray900 py-2 px-2 rounded-full text-sm flex items-center justify-center cursor-pointer duration-100 ease-in-out">
          <i className="fa-brands fa-x-twitter"></i>
        </div>

        <div className="hover:bg-success hover:text-white text-gray900 py-2 px-2 rounded-full text-sm flex items-center justify-center cursor-pointer duration-100 ease-in-out">
          <i className="fa-brands fa-pinterest-p"></i>
        </div>

        <div className="hover:bg-success hover:text-white text-gray900 py-2 px-2 rounded-full text-sm flex items-center justify-center cursor-pointer duration-100 ease-in-out">
          <i className="fa-brands fa-instagram"></i>
        </div>
      </div>
    </StyledSection>
  );
};

export default NewsLetter;
