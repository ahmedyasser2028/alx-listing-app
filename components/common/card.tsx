import React from "react";
import { CardProps } from "../../interfaces";

const Card: React.FC<CardProps> = ({ title, image, description }) => {
  return (
    <div className="border rounded-xl shadow-sm p-4 hover:shadow-md transition">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-md mb-3"
      />
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

export default Card;
