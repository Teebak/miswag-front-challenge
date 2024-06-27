"use client";
import { Rating } from "@mui/material";

const iraqiCurrencyComma = (price) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " IQD";
};

const Card = ({ item }) => {
  const { image, title, brand, rating, price, colors } = item;
  const { EN } = title;
  const { value, original_value } = price;

  return (
    <div className="w-64 m-3 mx-2 bg-white rounded-xl p-5 pb-3 shadow-md">
      <img className="w-full" src={image} alt={EN} />
      <h2 className="poppins font-medium text-[20px]">
        {EN.length < 35 ? EN : `${EN.slice(0, 35)}...`}
      </h2>
      <div className="flex justify-between">
        <p>{brand}</p>
        <Rating
          name="half-rating-read"
          defaultValue={rating}
          precision={0.5}
          readOnly
        />
      </div>
      <div className="mt-6 relative flex">
        {value < original_value && (
          <span className="text-[#D03947] line-through absolute bottom-7 poppins font-medium">
            {iraqiCurrencyComma(original_value)}
          </span>
        )}
        <div className="flex">
          <span className="poppins font-medium text-[24px]">
            {iraqiCurrencyComma(value)}
          </span>
        </div>
        <div className="flex absolute w-fit items-center right-4 bottom-5">
          {colors.length > 0 &&
            colors.slice(0, 3).map((color, i) => (
              <div
                key={color}
                className={`w-6 h-6 rounded-full absolute right-[-${
                  (i + 1) * 10
                }px]`}
                style={{ backgroundColor: color }}
              ></div>
            ))}
          {colors.length > 3 && (
            <div
              className="w-6 h-6 rounded-full absolute right-[-30px] bg-white border-2 text-[13px] text-center"
            >
              +{colors.length - 3}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
