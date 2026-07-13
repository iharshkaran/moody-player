import React, { useState } from "react";
import FacialExpression from "./FacialExpression";
import SongList from "./SongList";
import AudioPlayer from "./AudioPlayer";
import Navbar from "./Navbar";

const Main = () => {

    const [songs, setSongs] = useState([]);
    const [currentSong, setCurrentSong] = useState(null);

    return (
        <div className="h-screen w-5xl mx-auto flex flex-col border-r border-l border-[#444] relative">

            <Navbar />

            <div className="h-[90%] w-full flex gap-6 px-12 py-6">
              <FacialExpression setSongs={setSongs} />

            <SongList
                songs={songs}
                setCurrentSong={setCurrentSong}
            />
            </div>

            <AudioPlayer currentSong={currentSong} />

        </div>
    );
};

export default Main;