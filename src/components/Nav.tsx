import mainLogo from "../assets/dev-lab-logo.png"
import supportIcon from "../assets/support-icon.svg"
import userIcon from "../assets/user-icon.svg"

import { useState } from "react"

const Nav = () => {

  const [menuActive, setMenuActive] = useState<boolean>(false)

  const handleMenuClick = () => {
    setMenuActive(!menuActive)
  }
  return (
    <div className="flex items-center justify-between p-3 pr-5 pl-5 bg-white border-b-[3px] border-opacity-70 lg:pr-10 lg:pl-10 navBar">
        <div className="flex items-center logoAndLinksContainer">

            <div className="relative menuContainer">
              <span onClick={handleMenuClick} className={`${menuActive? "active":""} hover:cursor-pointer lg:hidden menuBtn`}>
                <span className=" menuIcon"></span>
              </span>

              {menuActive && 
              <div className="absolute bg-white flex flex-col top-[50px] left-[10px] border-black border-[2px] rounded-xl p-2 z-20 menuListContainer">
                <a href="#home" className="pt-3 pb-2 pl-3 pr-[40px] border-b border-slate-400 font-[600] text-nowrap hover:text-[#1894c9]">Home</a>
                <a href="#popularCourses" className="pt-2 pb-2 pl-3 pr-[40px] border-b border-slate-400 font-[600] text-nowrap hover:text-[#1894c9]">Courses</a>
                <a href="#articles" className="pt-2 pb-2 pl-3 pr-[40px] border-b border-slate-400 font-[600] text-nowrap hover:text-[#1894c9]">Articles</a>
                <a href="#podcasts" className="pt-2 pb-2 pl-3 pr-[40px] border-b border-slate-400 font-[600] text-nowrap hover:text-[#1894c9]">Podcasts</a>
                <a href="#" className="pt-2 pb-2 pl-3 pr-[40px] border-b border-slate-400 font-[600] text-nowrap hover:text-[#1894c9]">About</a>
                <a href="#" className="pt-2 pb-3 pl-3 pr-[40px] font-[600] text-nowrap hover:text-[#1894c9]">Contact Us</a>
              </div>}

              
            </div>
            
            <img src={mainLogo} alt="logo" className="w-[50px] mr-2 ml-2 lg:mr-5 lg:ml-5 mainLogo"/>

            <div className="hidden lg:flex w-full gap-5 largeScreenMenuListContainer">
              <a href="#home" className="p-3 font-[600] text-nowrap hover:text-[#1894c9]">Home</a>
                <a href="#popularCourses" className="p-3 font-[600] text-nowrap hover:text-[#1894c9]">Courses</a>
                <a href="#articles" className="p-3 font-[600] text-nowrap hover:text-[#1894c9]">Articles</a>
                <a href="#podcasts" className="p-3 font-[600] text-nowrap hover:text-[#1894c9]">Podcasts</a>
                <a href="#" className="p-3 font-[600] text-nowrap hover:text-[#1894c9]">About</a>
                <a href="#" className="p-3 font-[600] text-nowrap hover:text-[#1894c9]">Contact Us</a>
              </div>
            
        </div>
        <div className="flex gap-2 lg:gap-4 supportAndAccountContainer">
            <img src={supportIcon} alt="support" className="w-[35px] rounded-full p-1 bg-blue-100 supportIcon"/>
            <img src={userIcon} alt="account" className="w-[35px] rounded-full p-1 bg-blue-100 supportIcon" />
        </div>
    </div>
  )
}

export default Nav