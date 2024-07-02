import * as React from "react";
import { ReactNode } from "react";

type PropType = {
  children: ReactNode;
};

const Button = ({ children }: PropType) => {
  return (
    <button
      style={{
        backgroundColor: "blue",
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
      }}
    >
      {children}
    </button>
  );
};

export default Button;
