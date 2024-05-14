import React, { ReactNode } from "react";

interface WrapperProps {
  children: ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <div className="w-full h-full flex flex-col mx-auto max-w-5xl">
      {children}
    </div>
  );
};

export default Wrapper;

