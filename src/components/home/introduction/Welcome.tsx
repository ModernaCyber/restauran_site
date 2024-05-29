import React from "react";
import Wrapper from "../../content_wrapper/Wrapper";
import pizza_slice from "../../../assets/Pizza-slice.jpg";
import food_table_meet from "../../../assets/food-table-meet.jpg";
import { motion } from "framer-motion";
import { FaLongArrowAltRight } from "react-icons/fa";

const Welcome: React.FC  = () => {

  return (
    <section className="w-full my-12 h-auto md:h-[600px]">
      <Wrapper>
        <motion.div
          initial={{ opacity: 0, y: 75 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.75,
            delay: 0.5,
          }}
          className="h-auto md:h-[380px] my-auto grid grid-cols-1 md:grid-cols-3"
        >
          <div className="w-full h-[380px] md:h-full px-2 flex flex-col overflow-hidden dark:border dark:border-neutral-200 dark:text-white " >
            <div className=" font-light text-2xl">"Country`s Most Loved"</div>
            <div className=" font-bold text-4xl my-2">Welcome</div>
            <div className="flex w-full flex-col font-thin text-2xl">
              <span className="capitalize">we are locally crafted food</span>
              <span className="capitalize">& Wine serving since 1978</span>
            </div>
            <div className="my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              tenetur sapiente temporibus ea, natus, nemo tempore debitis
              corporis quod quam voluptate repellendus est, vitae ut cumque ab
              accusamus. Placeat, officiis.
            </div>
            <button className="flex gap-x-1 px-4 py-2 bg-[orange] h-auto justify-center items-center rounded-2xl text-xl text-white font-semibold mt-auto mb-1">
              <span className="capitalize">More About Us</span>
              <span className="">
                <FaLongArrowAltRight />
              </span>
            </button>
          </div>
          <div className="w-full h-[380px] md:h-full px-2 overflow-hidden">
            <img
              src={pizza_slice}
              alt="intro_img"
              className="w-full h-full object-cover "
            />
          </div>
          <div className="overflow-hidden relative z-0 ">
            <div className="w-full h-full">
              <img
                src={food_table_meet}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="inset-0 absolute z-10 bg-gradient-to-br from-white/25 to-black/95 ">
              <div className="w-full h-full z-20 flex flex-col justify-end">
                <h2 className="mx-auto mb-4 font-bold text-4xl text-white">
                  Hours
                </h2>
                <span className="mx-auto mb-2 font-semibold text-xl text-white ">
                  Monday-Saturday|9AM - 1PM
                </span>
                <span className="mx-auto mb-2 font-semibold text-xl text-white ">
                  Saturday-Sunday|9AM - 4PM
                </span>
              </div>
            </div>
          </div>
          <div className="w-full h-[380px] md:h-full px-2"></div>
        </motion.div>
      </Wrapper>
    </section>
  );
};

export default Welcome;
