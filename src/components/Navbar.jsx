import React from "react";
import navImg from "../assets/logo.png";
import Navlink from "./Navlink";
import Container from "./Container";
const Navbar = () => {
  const navLinks = ["Orders", "Foods", "Tables", "Logout"];

  return (
    <Container>
      <div className="flex justify-between items-center py-4">
        <div className="flex justify-between items-center gap-1 lg:gap-2">
          <img className="w-10 lg:w-16" src={navImg} alt="nav logo" />
          <p className="font-bold text-lg md:text-xl lg:text-3xl ">
            Taxi <span className="text-amber-500">Kitchen</span>
          </p>
        </div>

        <div className="flex justify-between items-center gap-2 lg:gap-12 list-none">
          {navLinks.map((link, ind) => (
            <Navlink link={link} key={ind}></Navlink>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
