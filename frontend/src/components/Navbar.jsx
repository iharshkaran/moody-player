import React from "react";

const Navbar = () => {
    return (
        <nav className="bg-[#1e1e1e] border-b border-[#444] py-4 px-12 w-full h-16 top-0 left-0">
            <div className="w-5xl flex justify-between items-center">
                <h1 className="text-2xl font-bold text-white">
                   🎵 Moody Player
                </h1>
            </div>
            <div className="absolute top-0 right-0 h-16 flex items-center gap-4 px-10">
                <a
                    href="https://github.com/iharshkaran/moody-player"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-3xl hover:text-gray-400 active:scale-95 transition duration-300 pl-5"
                >
                    <i className ="ri-github-fill"></i>
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
