import React from "react";
import Wrapper from "../content_wrapper/Wrapper";
import bg from "../../assets/Prepare-dish-image.jpg";
const Footer = () => {
  return (
    <footer
      style={{ backgroundImage: `url(${bg})` }}
      className="h-[300px] object-cover w-full"
    >
      <Wrapper>
        <div className="flex flex-col mx-auto text-white h-full w-full justify-center items-center">
          <h2 className="text-center font-bold text-4xl capitalize my-6">
            Call For All Your Reservations
          </h2>
          <h2 className="text-center font-bold text-4xl capitalize mb-6">
            +123 456 1010
          </h2>
          <span className="text-sm mt-6 mb-1">
            Copyright @ 2024 Italian Restaurant | Powered by italian Restaurant
          </span>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
