import React from "react";
import Wrapper from "../../content_wrapper/Wrapper";
import pic34 from "../../../assets/pic34-free-img.jpg";
import { FaLongArrowAltRight } from "react-icons/fa";

const Offer: React.FC  = () => {
  return (
    <section className="">
      <Wrapper>
        <div className="h-auto md:h-[600px] grid grid-cols-1 md:grid-cols-2 place-items-center ">
          <div className=" w-full h-[400px] px-6">
            <div className="w-full h-full relative ">
              <img src={pic34} alt="" className="w-full h-full" />
              <div className="absolute flex justify-center inset-0 bg-gradient-to-br from-black/25 to-black/75 ">
                <h2 className="mt-auto text-2xl text-white font-bold mb-4">
                  Good Food | Good Wine
                </h2>
              </div>
            </div>
          </div>
          <div className="h-[400px] w-full px-6 flex flex-col dark:text-neutral-200 ">
            <h2 className="text-left font-semibold text-2xl">
              Wednesday Means
            </h2>
            <h3 className="text-left font-bold text-4xl my-6">Happy Hours</h3>
            <h4 className="text-left text-xl capitalize font-semibold mb-4">
              Half price bottle of wine and six tasty lunches for $9
            </h4>
            <p className="text-left text-sm text-neutral-600 dark:text-neutral-300 font-light ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis
              recusandae, obcaecati dolorum ullam eius labore voluptas
              voluptates maiores. Ab molestias illum ut, aut ex odio eligendi
              quibusdam error incidunt. Explicabo?
            </p>
            <button className="mt-auto mb-4 px-6 py-2 bg-[orange] flex gap-x-2 items-center mr-auto max-w[300px] rounded-full text-white">
              Discover Offer <FaLongArrowAltRight/>
            </button>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Offer;
