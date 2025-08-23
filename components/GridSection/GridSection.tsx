import React from 'react'

const GridSection = () => {
    return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3  bg-amber-300 gap-4 w-full max-w-6xl">
        {/* Left box: Static */}
        <div className="bg-[#2c2c2c] text-white p-8 rounded-xl col-span-1 md:col-span-2">
          <h2 className="text-3xl font-bold mb-2">Shows up</h2>
          <p className="text-sm text-gray-300">
            Be found by more than just your followers — attract searchers looking for what you offer.
          </p>
        </div>

        {/* Right column with hover-expand */}
        <div className="flex flex-col gap-4">
          {/* Box 1 */}
          <div className="bg-[#2c2c2c] text-white p-6 rounded-xl transition-all duration-300 ease-in-out h-52 hover:h-64 overflow-hidden">
            <h3 className="text-lg font-bold">look proffecesonal</h3>
            <p className="text-sm text-gray-300 mt-1">
              A real website means instant trust, 24/7 visibility, and a hub for offers and clients.
            </p>
          </div>

          {/* Box 2 */}
          <div className="bg-[#2c2c2c] text-white p-6 rounded-xl transition-all duration-300 ease-in-out h-52 hover:h-64 overflow-hidden">
            <h3 className="text-lg font-bold">You own it, always.</h3>
            <p className="text-sm text-gray-300 mt-1">
              Gain full control of your brand, beyond any social feed or inbox delay.
            </p>
          </div>
        </div>
      </div>
    </div>
    )
}

export default GridSection