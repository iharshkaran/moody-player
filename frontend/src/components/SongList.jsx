import React from "react";

const SongList = ({ songs, setCurrentSong }) => {

    return (
        <div className="h-[88%] w-full p-6 bg-[#2e2e2e] rounded-2xl mt-2">

            <h1 className="text-xl font-bold text-white">
                Recommended Songs
            </h1>

            <div id="song-list" className="w-full h-[90%] flex flex-col gap-4 mt-4 overflow-auto">

                {songs.map((song) => (

                    <div
                        key={song._id}
                        className="w-full h-16 flex items-center justify-between p-4 bg-[#3e3e3e] rounded-lg hover:bg-[#5e5e5e] transition"
                    >

                        <div>

                            <h2 className="text-white font-semibold">
                                {song.title}
                            </h2>

                            <p className="text-xs text-gray-400">
                                {song.artist}
                            </p>

                        </div>

                        <button
                            type="button"
                            onClick={() => setCurrentSong(song)}
                            className="w-10 h-10 rounded-full bg-white text-black hover:scale-110 transition"
                        >
                            <i className="ri-play-fill text-xl"></i>
                        </button>

                    </div>

                ))}

            </div>

        </div>
    );
};

export default SongList;