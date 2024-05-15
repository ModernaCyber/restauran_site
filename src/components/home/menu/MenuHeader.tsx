import React from "react";
import parcelli from "../../../assets/parcelli.png";

const MenuHeader: React.FC  = () => {
  return (
    <div className="w-full h-auto min-h-[300px] flex flex-col justify-center items-center mb-24 dark:text-neutral-200">
      <div className="w-auto p-8 dark:text-neutral-300">
        <img src={parcelli} alt="" className="" />
      </div>
      <h2 className="font-bold text-4xl my-8">Our Menu</h2>
      <h3 className="font-normal capitalize text-neutral-700 dark:text-neutral-300 text-xl">
        Quality Ingredients, Tasty meals
      </h3>
      <p className="text-center text-sm text-neutral-500 dark:text-neutral-300 w-auto max-w-[600px] my-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est iure
        ratione odit corrupti nulla hic, eveniet quae voluptatem! Repellat unde
        quia assumenda aliquam ipsam excepturi deserunt consequuntur labore?
        Magnam, obcaecati.
      </p>
    </div>
  );
};

export default MenuHeader;
