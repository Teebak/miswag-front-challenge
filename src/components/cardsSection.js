"use client";
import data from "../../Dataset.json";
import Card from "./card";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

const CardsSection = () => {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (category) {
      const filteredItems = data.filter((item) => item.category === category);
      setItems(filteredItems);
    } else {
      setItems(data);
    }
  }, [category]);

  return (
    <div className="m-12 flex flex-wrap ">
      {items.map((item) => {
        return <Card key={item.id} item={item} />;
      })}
    </div>
  );
};

export default CardsSection;
