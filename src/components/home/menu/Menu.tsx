import React from "react";
import { motion } from "framer-motion";
import MenuHeader from "./MenuHeader";
import MenuItems from "./MenuItems";


const Menu: React.FC  = () => {
  return (
    <section className="w-full h-auto">
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.75,
            delay: 0.5,
          }}
          className="h-auto w-full flex flex-col"
        >
          <MenuHeader/>
          <MenuItems/>
        </motion.div>
    </section>
  );
};

export default Menu;
