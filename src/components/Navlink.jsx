import React from "react";

const Navlink = ({ link }) => {
  return (
    <li>
      <a
        className="border-b-3 pb-0.5 lg:text-lg font-semibold border-amber-500 hover:border-amber-800 hover:text-amber-500"
        href="#"
      >
        {link}
      </a>
    </li>
  );
};

export default Navlink;
