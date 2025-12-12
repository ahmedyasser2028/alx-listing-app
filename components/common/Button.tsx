import React from "react";
import { ButtonProps } from "../../interfaces";

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-900 transition"
    >
      {label}
    </button>
  );
};

export default Button;
