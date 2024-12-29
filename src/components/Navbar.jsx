import React from "react";
import { links, social } from "../data";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";
import { useRef } from "react";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef();
  const handleClick = () => {
    setIsOpen(!isOpen);
    // const navBounding = navRef.current.getBoundingClientRect();
  };
  let navHeight = isOpen ? "0" : "250px";
  let navBorder = isOpen ? "none" : "2px solid #ccc";
  let hamburgerRotate = isOpen ? "" : "rotate(90deg)";
  return (
    <header className="text-2xl p-5 flex flex-row items-center justify-between">
      <div className="text-2xl font-medium">
        React <span className="text-blue-400">Navbar</span>
      </div>
      <nav className="hidden md:block">
        <ul className="flex flex-row text-sm font-medium gap-5 text-gray-700">
          {links.map((item) => {
            return (
              <li
                key={item.id}
                className="hover:text-blue-400 transition-all duration-300"
              >
                <a href={item.url}>{item.text}</a>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="hidden md:flex flex-row gap-5 text-base text-blue-400">
        {social.map((item) => {
          return (
            <span
              className="hover:text-blue-800 transition-all divide-purple-300"
              key={item.id}
            >
              <a href={item.url}>{item.icon}</a>
            </span>
          );
        })}
      </div>
      <button
        onClick={handleClick}
        style={{ transform: hamburgerRotate }}
        className="md:hidden text-blue-400 hover:text-blue-800 transition-all duration-700"
      >
        <IoMenu />
      </button>

      <div
        ref={navRef}
        className="block md:hidden absolute transition-all overflow-hidden duration-700 left-0 mx-5 top-16 right-0 bottom-0"
        style={{ height: navHeight, borderBottom: navBorder }}
      >
        <nav>
          <ul className="flex flex-col text-base p-5 font-medium gap-5 text-gray-700">
            {links.map((item) => {
              return (
                <li
                  key={item.id}
                  className="hover:text-blue-400 transition-all duration-300"
                >
                  <a href={item.url}>{item.text}</a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
