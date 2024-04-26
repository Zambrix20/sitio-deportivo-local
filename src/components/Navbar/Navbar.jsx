"use client";

import React, { useState } from "react";
import Image from "next/image";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="p-5 bg-white shadow md:flex md:items-center md:justify-between relative">
            <div className="flex justify-between items-center">
                <span>
                    <Image
                        className="h-10 inline cursor-pointer"
                        src="/logo-soccer1.png"
                        alt="futblogo"
                        width={40}
                        height={40}
                    />
                </span>
                <span
                    className="text-3xl cursor-pointer mx-2 md:hidden block"
                    onClick={toggleMenu}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                        <path d="M 5 9 L 5 11 L 45 11 L 45 9 L 5 9 z M 5 24 L 5 26 L 45 26 L 45 24 L 5 24 z M 5 39 L 5 41 L 45 41 L 45 39 L 5 39 z"></path>
                    </svg>
                </span>
            </div>
            <ul
                className={`md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] ${isOpen ? "opacity-100 top-20" : ""
                    } transition-all ease-in duration-500`}
            >
                <li className="mx-4 my-6 md:my-0">
                    <a href="#" className="text-xl hover:text-gray-500 duration-500">
                        Home
                    </a>
                </li>
                <li className="mx-4 my-6 md:my-0">
                    <a href="#" className="text-xl hover:text-gray-500 duration-500">
                        About
                    </a>
                </li>
                <li className="mx-4 my-6 md:my-0">
                    <a href="#" className="text-xl hover:text-gray-500 duration-500">
                        Contact
                    </a>
                </li>
                <button className="font-[Poppins] px-6 py-2 mx-4 bg-black text-white hover:bg-slate-600 duration-500 rounded">
                    Login
                </button>
            </ul>
        </nav>
    );
}

export default Navbar;
