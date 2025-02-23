import React from "react";
import { Link } from "react-router-dom";

const Card = ({ title, description, link }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link
        to={link}
        className="text-red-500 font-bold hover:underline"
      >
        Learn More &rarr;
      </Link>
    </div>
  );
};

export default Card;
