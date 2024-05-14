import React from "react";
import bg from "../../../assets/dine-out.jpg";
import Wrapper from "../../content_wrapper/Wrapper";
import menu_item_1 from "../../../assets/Menu-item-1.jpg";
import menu_item_2 from "../../../assets/Menu-item-2.jpg";
import menu_item_3 from "../../../assets/Menu-item-3.jpg";
import menu_item_4 from "../../../assets/Menu-item-4.jpg";
import {motion } from "framer-motion"
// interface itemProps {
//   item: {
//     title: string;
//     text: string;
//     price: number;
//   };
// }
// const MenuItem: React.FC<itemProps> = ({ item }) => {
//   return (
//     <div className="flex flex-col w-full h-full justify-center items-center">
//       <div className="">{item.title}</div>
//       <div className="">{item.text}</div>
//       <div className="w-20 h-1 bg-black/95 my-2"></div>
//       <div className="">${item.price}</div>
//       <div className="w-20 h-1 bg-black/95 my-2"></div>
//     </div>
//   );
// };

const MenuItems: React.FC = () => {
  const menuData: string[] = [
    { title: "Spagheti Delle", text: "", price: 40 },
    menu_item_1,
    { title: "Ham and Fontina", text: "", price: 20 },
    menu_item_2,
    { title: "Chicken Italiano", text: "", price: 10 },
    menu_item_3,
    { title: "Crumbled Sausage", text: "", price: 15 },
    menu_item_4,
    { title: "Baked Meatballs", text: "", price: 35 },
  ];

  return ( 
    <section
      style={{ backgroundImage: `url(${bg})` }}
      className="w-full h-auto md:h-[800px]"
    >
      <Wrapper>
        <div className="flex flex-col w-full -mt-20 h-[800px] ">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {menuData.map((data, i) => (
              <motion.div className="w-full h-[260px] border border-[orange] cursor-pointer" key={i}>
                { (i+1) % 2 === 0 ? (
                  <img
                    src={data}
                    alt={`menu_img_${i}`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="flex flex-col w-full h-full justify-center items-center bg-orange-100">
                    <div className="font-semibold text-2xl mb-4">{data.title}</div>
                    <div className="pl-2 mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis maiores, doloremque minus vel totam esse enim explicabo quas.</div>
                    <div className="w-20 h-1 bg-neutral-200 my-2"></div>
                    <div className="">${data.price}</div>
                    <div className="w-20 h-1 bg-neutral-200 my-2 text-4xl font-medium"></div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>{" "}
        <button className="w-auto mx-auto px-4 py-2 my-auto rounded-3xl text-white bg-[orange]">
          <span className="text-xl font-semibold">Discover entire menu</span>-
        </button>
      </Wrapper>
    </section>
  );
};

export default MenuItems;
