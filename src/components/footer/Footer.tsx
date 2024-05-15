import React from "react";
import Wrapper from "../content_wrapper/Wrapper";
import bg from "../../assets/Prepare-dish-image.jpg";
const Footer = () => {
  return (

    <footer
      className="h-[300px] w-ful overflow-hiddenl "
    >
      <div style={{ backgroundImage: `url(${bg})` }}
      className="h-[300px] object-cover bg-center bg-no-repeat w-full overflow-hidden">
      <Wrapper>
        <div className="flex flex-col mx-auto text-white h-[300px] mb-auto w-full justify-center items-center">
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
      </Wrapper></div>
    </footer>
  );
};

export default Footer;
