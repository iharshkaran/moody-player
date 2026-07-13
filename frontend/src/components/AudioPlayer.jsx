import React from "react";

const AudioPlayer = ({ currentSong }) => {

    if (!currentSong) return (
        <div className="fixed bottom-0 left-0 w-full h-16 bg-[#1e1e1e] flex justify-center items-center">
            <div className="w-5xl flex justify-center items-center border-r border-l border-t  border-[#444] py-4 px-12">
                <h2 className="text-white font-semibold">
                    No song selected
                </h2>
            </div>
        </div>
    );

    return (

        <div className="fixed bottom-0 left-0 w-full h-16 bg-[#1e1e1e]  flex justify-center items-center">

            <div className="w-5xl flex justify-between items-center border-r border-l border-t border-[#444] py-4 px-12">
            <div>
                <h2 className="text-white font-semibold">
                    {currentSong.title}
                </h2>

                <p className="text-gray-400 text-sm">
                    {currentSong.artist}
                </p>

            </div>

            <audio
                controls
                autoPlay
                src={currentSong.audio}
                className="w-[480px] h-12"
            />
            </div>

        </div>

    );
};

export default AudioPlayer;