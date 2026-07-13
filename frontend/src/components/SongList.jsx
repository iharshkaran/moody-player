import React from 'react'

const SongList = () => {
  return (
    <div className="h-3/5 w-full p-6 bg-[#2e2e2e] rounded-2xl  mt-1">
      <h1 className="text-xl font-bold text-white">Recommended Songs</h1>
      <div id="song-list" className="w-full h-[90%] flex flex-col gap-4 mt-4 overflow-auto">

        <div className="w-full h-16 flex items-center justify-between p-4 bg-[#3e3e3e] rounded-lg hover:bg-[#5e5e5e] transition duration-300 cursor-pointer">
            <div className="flex flex-col">
                <h2 className='text-white font-semibold'>Song Title 1</h2>
                <p className="text-[#888] text-xs mt-1"> Artist Name</p>
            </div>
            <div className="flex items-center gap-4">
                <i className="ri-pause-line border-2 rounded-full border-white text-xl text-white w-8 h-8 flex items-center justify-center"></i>
                <i className="ri-play-fill border-2 rounded-full border-white text-xl text-white w-8 h-8 flex items-center justify-center"></i>
            </div>
        </div>
        <div className="w-full h-16 flex items-center justify-between p-4 bg-[#3e3e3e] rounded-lg hover:bg-[#5e5e5e] transition duration-300 cursor-pointer">
            <div className="flex flex-col">
                <h2 className='text-white font-semibold'>Song Title 1</h2>
                <p className="text-[#888] text-xs mt-1"> Artist Name</p>
            </div>
            <div className="flex items-center gap-4">
                <i className="ri-pause-line border-2 rounded-full border-white text-xl text-white w-8 h-8 flex items-center justify-center"></i>
                <i className="ri-play-fill border-2 rounded-full border-white text-xl text-white w-8 h-8 flex items-center justify-center"></i>
            </div>
        </div>
        <div className="w-full h-16 flex items-center justify-between p-4 bg-[#3e3e3e] rounded-lg hover:bg-[#5e5e5e] transition duration-300 cursor-pointer">
            <div className="flex flex-col">
                <h2 className='text-white font-semibold'>Song Title 1</h2>
                <p className="text-[#888] text-xs mt-1"> Artist Name</p>
            </div>
            <div className="flex items-center gap-4">
                <i className="ri-pause-line border-2 rounded-full border-white text-xl text-white w-8 h-8 flex items-center justify-center"></i>
                <i className="ri-play-fill border-2 rounded-full border-white text-xl text-white w-8 h-8 flex items-center justify-center"></i>
            </div>
        </div>
        <div className="w-full h-16 flex items-center justify-between p-4 bg-[#3e3e3e] rounded-lg hover:bg-[#5e5e5e] transition duration-300 cursor-pointer">
            <div className="flex flex-col">
                <h2 className='text-white font-semibold'>Song Title 1</h2>
                <p className="text-[#888] text-xs mt-1"> Artist Name</p>
            </div>
            <div className="flex items-center gap-4">
                <i className="ri-pause-line border-2 rounded-full border-white text-xl text-white w-8 h-8 flex items-center justify-center"></i>
                <i className="ri-play-fill border-2 rounded-full border-white text-xl text-white w-8 h-8 flex items-center justify-center"></i>
            </div>
        </div>
        <div className="w-full flex items-center justify-between p-4 bg-[#3e3e3e] rounded-lg hover:bg-[#5e5e5e] transition duration-300 cursor-pointer">
            <div className="flex flex-col">
                <h2 className='text-white font-semibold'>Song Title 2</h2>
                <p className="text-[#888] text-xs mt-1"> Artist Name</p>
            </div>
            <div className="flex items-center gap-4">
                <i className="ri-pause-line border-2 rounded-full border-white text-xl text-white w-8 h-8 flex items-center justify-center"></i>
                <i className="ri-play-fill border-2 rounded-full border-white text-xl text-white w-8 h-8 flex items-center justify-center"></i>
            </div>
        </div>

        <div className="w-full flex items-center justify-between p-4 bg-[#3e3e3e] rounded-lg hover:bg-[#5e5e5e] transition duration-300 cursor-pointer">
            <div className="flex flex-col">
                <h2 className='text-white font-semibold'>Song Title 3</h2>
                <p className="text-[#888] text-xs mt-1"> Artist Name</p>
            </div>
            <div className="flex items-center gap-4">
                <i className="ri-pause-line border-2 rounded-full border-white text-xl text-white w-8 h-8 flex items-center justify-center"></i>
                <i className="ri-play-fill border-2 rounded-full border-white text-xl text-white w-8 h-8 flex items-center justify-center"></i>
            </div>
        </div>
        <div className="w-full flex items-center justify-between p-4 bg-[#3e3e3e] rounded-lg hover:bg-[#5e5e5e] transition duration-300 cursor-pointer">
            <div className="flex flex-col">
                <h2 className='text-white font-semibold'>Song Title 4</h2>
                <p className="text-[#888] text-xs mt-1"> Artist Name</p>
            </div>
            <div className="flex items-center gap-4">
                <i className="ri-pause-line border-2 rounded-full border-white text-xl text-white w-8 h-8 flex items-center justify-center"></i>
                <i className="ri-play-fill border-2 rounded-full border-white text-xl text-white w-8 h-8 flex items-center justify-center"></i>
            </div>
        </div>
      </div>
    </div>
  )
}
export default SongList