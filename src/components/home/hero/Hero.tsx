import React from "react";
import bg from "../../../assets/fresco-pizza-top.jpg";
import Wrapper from "../../content_wrapper/Wrapper";
import fork from "../../../assets/fork-free-img.png";
import knife from "../../../assets/knife-free-imge.png";
import frill from "../../../assets/frill-free-img.png";
const Hero: React.FC = () => {
  return (
    <section
      className="w-full h-[600px] "
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <Wrapper>
        <div className="flex w-full h-full relative">
          <div className="w-auto absolute left-0 top-1/2 -translate-y-1/2 h-1/2 my-auto  ">
            <img src={fork} alt="" className="h-full w-auto" />
          </div>
          <div className="w-auto absolute right-0 top-1/2 -translate-y-1/2 h-1/2 my-auto ">
            <img src={knife} alt="" className="h-full w-auto" />
          </div>
          <div className="w-full h-full flex flex-col justify-center items-center gap-y-6">
            <div className="h-12 w-48">
              <img src={frill} alt="" className="h-full w-auto" />
            </div>
            <h1 className="text-6xl text-white font-bold ">Fresco.</h1>
            <h2 className="text-[orange] font-semibold  text-2xl ">
              Italian Specialities
            </h2>
            <div className="h-auto w-full flex justify-center items-center">
              <div className="h-1 w-24 ml-auto mr-6 border-b border-gray-400 "></div>
              <div className="text-white text-xl">Good Food | Good Wine</div>
              <div className="h-1 w-24 mr-auto ml-6 border-b border-gray-400 "></div>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Hero;
