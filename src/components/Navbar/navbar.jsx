import React from "react";
import logo from "../../assets/kt-logo.png";
import github from "../../assets/icon-github.svg";
import linkedin from "../../assets/icon-linkedin.svg";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center w-full h-20 md:h-16 text-white px-8 max-w-7xl mx-auto">
      <div className="mb-2">
        <h3 className="text-[#1877F2] text-5xl font-bold xs:mt-2 md:mt-0">kT1</h3>
      </div>
      <div class="relative inline-block text-center w-96 xs:mb-8 md:mb-0">
        <div class="flex md:mt-[-20px] absolute mb-9 w-96">
          <Link
            to="about"
            activeClass="active"
            smooth={true}
            spy={true}
            className="flex-1 text-[#1877F2] rounded transition duration-500 py-2 text-md text-white hover:bg-[#1877F2] hover:text-white hover:cursor-pointer"
          >
            About Me
          </Link>
          <Link
            to="experience"
            activeClass="active"
            smooth={true}
            spy={true}
            className="flex-1 text-[#1877F2] rounded transition duration-500 py-2 text-md text-white hover:bg-[#1877F2] hover:text-white hover:cursor-pointer"
          >
            Experience
          </Link>
          <Link
            to="projects"
            activeClass="active"
            smooth={true}
            spy={true}
            className="flex-1 text-[#1877F2] rounded transition duration-500 py-2 text-md text-white hover:bg-[#1877F2] hover:text-white hover:cursor-pointer"
          >
            Projects
          </Link>
          <Link
            to="contact"
            activeClass="active"
            smooth={true}
            spy={true}
            className="flex-1 text-[#1877F2] rounded transition duration-500 py-2 text-md text-white hover:bg-[#1877F2] hover:text-white hover:cursor-pointer"
          >
            Contact Me
          </Link>
        </div>
      </div>

      <ul className="flex xs:mt-4 md:mt-0">
        <li className="px-4">
          <a
            href="https://github.com/astral004/"
            rel="noreferrer"
            target="_blank"
          >
            <img src={github} alt="github" />
          </a>
        </li>

        <li className="px-4">
          <a
            href="https://www.linkedin.com/in/kash-tare/"
            rel="noreferrer"
            target="_blank"
          >
            <img src={linkedin} alt="linkedin" />
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Navbar;
