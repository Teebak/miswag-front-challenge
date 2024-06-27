"use client";
import Link from "next/link";
import data from "../../Dataset.json";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

const Catgories = () => {
  const [categories, setCategories] = useState([]);
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");

  data.map((item) => {
    if (!categories.includes(item.category)) {
      setCategories([...categories, item.category]);
    }
  });

  return (
    <div>
      <div className="flex justify-center mt-[4.5rem]">
        {categories.map((category, index) => (
          <Link
            key={index}
            href={{
              pathname: "/",
              ...(categoryParam == category ? {} : { query: { category: category } }),
            }}
          >
            <div
              key={index}
              className={
                " p-4 px-6 rounded-xl mx-4 w-11/12 shadow-lg text-center" +
                (categoryParam === category
                  ? " bg-[#000000] text-white"
                  : "bg-[#FAFAFA] text-[#8A8A8A]")
              }
            >
              <h1 className=" font-bold">{category}</h1>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Catgories;
