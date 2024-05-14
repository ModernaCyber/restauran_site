import React from "react";
import Wrapper from "../../content_wrapper/Wrapper";
import pic49 from "../../../assets/pic49-free-img.png";
import pic50 from "../../../assets/pic50-free-img.png";
import pic51 from "../../../assets/pic51-free-img.png";
import quotes from "../../../assets/quotes2-free-img.png";
import parcelli from "../../../assets/parcelli.png";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGoogleplus } from "react-icons/io";

const Testimonial: React.FC = () => {
  return (
    <section className="">
      <Wrapper>
        <div className="h-auto md:h-[600px] grid grid-cols-1 md:grid-cols-2 place-items-center ">
          <div className="my-6 px-6 flex flex-col w-full h-full">
            <div className="h-2/5 w-full relative">
              <div className="">
                <img src={quotes} alt="" className=" opacity-25 " />
              </div>
              <div className="absolute bottom-0 left- w-32">
                <img src={parcelli} alt="" className=" w-full h-full " />
              </div>
            </div>
            <div className="flex flex-col gap-y-4 items-start h-3/5 justify-center w-full">
              <img src={pic49} alt="" className="w-20 h-20 rounded-full" />
              <h2 className="text-left font-semibold text-xl">
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                molestiae voluptates explicabo, consectetur minus eveniet."
              </h2>
              <span className="text-left font-light text-lg mb-4">
                - Sammy Johnes
              </span>
            </div>
          </div>
          <div className="my-auto px-6 flex-flex-col gap-y-1">
            <div className="flex flex-col gap-y-4 items-start h-auto my-2 justify-center w-full">
              <img src={pic50} alt="" className="w-20 h-20 rounded-full" />
              <h2 className="text-left font-semibold text-xl">
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                molestiae voluptates explicabo, consectetur minus eveniet."
              </h2>
              <span className="text-left font-light text-lg">- John Doe</span>
            </div>
            <div className="flex flex-col gap-y-4 items-start h-auto my-2 justify-center w-full">
              <img src={pic51} alt="" className="w-20 h-20 rounded-full" />
              <h2 className="text-left font-semibold text-xl">
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                molestiae voluptates explicabo, consectetur minus eveniet."
              </h2>
              <span className="text-left font-light text-lg">- Joel Doe</span>
            </div>
            <div className="flex flex-col gap-y-4 items-start h-auto my-1 justify-center w-full">
              <h2 className="text-2xl font-semibold ">Check Out Our Reviews</h2>
              <div className="h-14 w-full flex justify-start gap-x-2 text-[orange] text-2xl">
                <span className="h-full w-auto cursor-pointer">
                  <FaFacebook />
                </span>
                <span className="h-full w-auto cursor-pointer">
                  <FaTwitter />
                </span>
                <span className="h-full w-auto cursor-pointer">
                  <FaLinkedin />
                </span>
                <span className="h-full w-auto cursor-pointer">
                  <IoLogoGoogleplus />
                </span>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Testimonial;
