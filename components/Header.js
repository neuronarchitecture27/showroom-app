import Image from "next/image"
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UsersIcon,
  UserCircleIcon
} from "@heroicons/react/solid"
import { useState } from "react"
function Header() {
  const [hoverOn, setHoverOn] = useState(false)
  const changeText = () => {
    console.log("Hover On")
    setHoverOn(!hoverOn)
  }

  {/**
Change color when mouse hovers over header: 
Style settings: 
hover:bg-red-300 hover:transform hover:transition-colors hover:duration-300 hover:ease-in-out
*/}

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10" onMouseEnter={changeText}>
        {/**Left */}
        <div>
          <div className="relative flex items-center h-10 cursor-pointer my-auto">
            <Image 
              src="https://links.papareact.com/qd3"
              fill={true}
              objectFit="contain"
              objectPosition="left"
              alt="logo"
            />
          </div>
        </div>
        {/**Medium */}
          <div className="flex items-center md:border-2 rounded-full p-2 md:shadow-sm ">
              <input
               className="pl-5 flex-grow bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400" 
               type="text" 
               placeholder="Start your Search" />
              <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-auto" />
          </div>
        {/**Right */}
        <div className="flex items-center justify-end text-gray-500 space-x-4">
            <p className="hidden md:inline cursor-pointer">Become a host</p>
            <GlobeAltIcon className="h-6 cursor-pointer" />
            <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
              <MenuIcon className="h-6 cursor-pointer" />
              <UserCircleIcon className="h-6" />
            </div>
            </div>
    </header>
  )
}

export default Header