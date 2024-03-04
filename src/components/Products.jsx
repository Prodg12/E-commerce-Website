const Products = ({
  img,
  type,
  pricetag,
  pricetag2,
  rating,
  icon
}) => {
  return (
    <div className="w-full p-3 border border-solid border-gray100 relative cursor-pointer rounded-sm hover:border-successDark group lg:p-1">
      <div className="w-full">
        <img src={img} alt={type} className="w-full lg:w-[90%] md:w-[85%] sm:w-[80%]" />
      </div>

      <span className="text-gray700 text-sm">{type}</span>

      <div className="flex items-center">
        <p className="text-gray900 font-medium sm:text-sm xs:text-xs">{pricetag}</p>
        <p className="text-gray400 line-through ml-1 xs:text-xs">{pricetag2}</p>
      </div>

      <span className="text-warning text-xs">
        <ion-icon name="star"></ion-icon>
        <ion-icon name="star"></ion-icon>
        <ion-icon name="star"></ion-icon>
        <ion-icon name="star"></ion-icon>
        <span className="text-gray200">
          <ion-icon name="star"></ion-icon>
        </span>
        {rating}
      </span>

      <span className="absolute right-2 bottom-8 text-sm py-2 px-2 bg-gray100 rounded-full flex items-center justify-center group-hover:bg-success group-hover:text-white lg:bottom-5 lg:py-1 lg:px-1 lg:text-xs">
        <ion-icon name="bag-outline"></ion-icon>
        {icon}
      </span>

      <div className="flex-col absolute right-2 top-2 hidden group-hover:flex duration-100 ease-in">
        <span className="text-gray900 py-2 px-2 bg-gray50 rounded-full text-sm flex items-center justify-center mb-3 lg:px-1 lg:py-1">
          <ion-icon name="heart-outline"></ion-icon>
        </span>
        <span className="text-gray900 py-2 px-2 bg-gray50 rounded-full text-sm flex items-center justify-center lg:px-1 lg:py-1">
          <ion-icon name="eye-outline"></ion-icon>
        </span>
      </div>
    </div>
  );
};

export default Products;