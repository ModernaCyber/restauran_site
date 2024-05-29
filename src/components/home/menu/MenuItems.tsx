import React from "react";
import bg from "../../../assets/dine-out.jpg";
import Wrapper from "../../content_wrapper/Wrapper";
import menu_item_1 from "../../../assets/Menu-item-1.jpg";
import menu_item_2 from "../../../assets/Menu-item-2.jpg";
import menu_item_3 from "../../../assets/Menu-item-3.jpg";
import menu_item_4 from "../../../assets/Menu-item-4.jpg";
import { FaLongArrowAltRight } from "react-icons/fa";

import { useAnimate } from "framer-motion";

const NO_CLIP = "polygon(0% 0%, 100% 0, 0 0, 100% 0 )";
const BOTTOM_RIGHT_CLIP = "polygon(100% 100%, 100% 0, 0 0, 0 100%)";
const TOP_RIGHT_CLIP = "polygon(100% 100%, 0 0, 0 0, 0 100% )";
const BOTTOM_LEFT_CLIP = "polygon(100% 100%, 100% 0, 0 0, 100% 0)";
const TOP_LEFT_CLIP = "polygon(100% 0, 0 100%, 85% 80%, 100% 0 )";

const ENTRANCE_KEYFRAMES = {
  left: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  bottom: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  top: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  right: [TOP_LEFT_CLIP, NO_CLIP],
};

const EXIT_KEYFRAMES = {
  left: [NO_CLIP, TOP_RIGHT_CLIP],
  bottom: [NO_CLIP, TOP_RIGHT_CLIP],
  top: [NO_CLIP, TOP_RIGHT_CLIP],
  right: [NO_CLIP, BOTTOM_LEFT_CLIP],
};
interface itemProps {
  item: {
    title: string;
    text: string;
    price: number;
  };
}
type Side = "left" | "bottom" | "top" | "right";

const MenuItem: React.FC<itemProps> = ({ item }) => {
  const [scope, animate] = useAnimate();

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const side = getNearestSide(e);
    animate(scope.current, {
      clipPath: ENTRANCE_KEYFRAMES[side],
    });
  };
  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const side = getNearestSide(e);
    animate(scope.current, {
      clipPath: EXIT_KEYFRAMES[side],
    });
  };
  const getNearestSide = (e: React.MouseEvent<HTMLDivElement>): Side => {
    const box = e.currentTarget.getBoundingClientRect();
    const proximityToLeft = {
      proximity: Math.abs(box.left - e.clientX),
      side: "left" as Side,
    };
    const proximityToRight = {
      proximity: Math.abs(box.right - e.clientX),
      side: "right" as Side,
    };
    const proximityToTop = {
      proximity: Math.abs(box.top - e.clientY),
      side: "top" as Side,
    };
    const proximityToBottom = {
      proximity: Math.abs(box.bottom - e.clientY),
      side: "bottom" as Side,
    };

    const sortedProximity = [
      proximityToLeft,
      proximityToRight,
      proximityToTop,
      proximityToBottom,
    ].sort((a, b) => a.proximity - b.proximity);

    return sortedProximity[0].side;
  };
  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="flex flex-col w-full h-full justify-center cursor-pointer items-center bg-orange-100 relative"
    >
      <div className="font-semibold text-2xl mb-4">{item.title}</div>
      <div className="pl-2 mb-2">{item.text}</div>
      <div className="w-20 h-1 bg-neutral-400 my-2"></div>
      <div className="">${item.price}</div>
      <div className="w-20 h-1 bg-neutral-400 my-2 text-4xl font-medium"></div>
      <div
        className="flex flex-col w-full h-full justify-center items-center bg-black text-white absolute inset-0"
        style={{
          clipPath: NO_CLIP,
        }}
        ref={scope}
      >
        <div className="font-semibold text-2xl mb-4">{item.title}</div>
        <div className="pl-2 mb-2">{item.text}</div>
        <div className="w-20 h-1 bg-neutral-200 my-2"></div>
        <div className="">${item.price}</div>
        <div className="w-20 h-1 bg-neutral-200 my-2 text-4xl font-medium"></div>
      </div>
    </div>
  );
};

const MenuItems: React.FC = () => {
  const menuData: {
    title: string;
    text: string;
    price: number;
    image: string;
  }[] = [
    {
      title: "Spagheti Delle",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione quisquam deserunt explicabo debitis laboriosam corrupti illum officia quos ipsam doloremque, adipisci distinctio, ab nostrum consequuntur consequatur velit culpa? Quidem, minus.",
      price: 40,
      image: "",
    },
    {
      title: "",
      text: "",
      price: 0,
      image: menu_item_1,
    },
    {
      title: "Ham and Fontina",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione quisquam deserunt explicabo debitis laboriosam corrupti illum officia quos ipsam doloremque, adipisci distinctio, ab nostrum consequuntur consequatur velit culpa? Quidem, minus.",
      price: 20,
      image: "",
    },
    {
      title: "",
      text: "",
      price: 0,
      image: menu_item_2,
    },
    {
      title: "Chicken Italiano",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione quisquam deserunt explicabo debitis laboriosam corrupti illum officia quos ipsam doloremque, adipisci distinctio, ab nostrum consequuntur consequatur velit culpa? Quidem, minus.",
      price: 10,
      image: "",
    },
    {
      title: "",
      text: "",
      price: 0,
      image: menu_item_3,
    },
    {
      title: "Crumbled Sausage",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione quisquam deserunt explicabo debitis laboriosam corrupti illum officia quos ipsam doloremque, adipisci distinctio, ab nostrum consequuntur consequatur velit culpa? Quidem, minus.",
      price: 15,
      image: "",
    },
    {
      title: "",
      text: "",
      price: 0,
      image: menu_item_4,
    },
    {
      title: "Baked Meatballs",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione quisquam deserunt explicabo debitis laboriosam corrupti illum officia quos ipsam doloremque, adipisci distinctio, ab nostrum consequuntur consequatur velit culpa? Quidem, minus.",
      price: 35,
      image: "",
    },
  ];

  return (
    <section
      style={{ backgroundImage: `url(${bg})` }}
      className="w-full h-auto bg-no-repeat object-cover bg-center md:h-[800px]"
    >
      <Wrapper>
        <div className="flex flex-col w-full -mt-20 h-[800px] ">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {menuData.map((data, i) => (
              <div
                className="w-full h-[260px] border border-[orange] cursor-pointer"
                key={i}
              >
                {(i + 1) % 2 === 0  ? (
                  <img
                    src={data.image}
                    alt={`menu_img_${i / 2}`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <MenuItem item={data} />
                )}
              </div>
            ))}
          </div>
        </div>{" "}
        <button className="w-auto mx-auto px-4 py-2 my-auto flex h-auto justify-between items-center gap-x-2 rounded-3xl text-white bg-[orange]">
          <span className="text-xl font-semibold">Discover entire menu</span>
          <FaLongArrowAltRight />
        </button>
      </Wrapper>
    </section>
  );
};

export default MenuItems;
