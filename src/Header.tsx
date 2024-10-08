import searchIcon from "./assets/search-icon.svg"

const Header = () => {
  return (
    <div className="p-5 pt-[70px] pb-[70px] flex flex-col items-center justify-center header">
        <h2 className="text-[20px] font-[700] text-nowrap lg:text-[26px]">Learn Coding Anywhere With <span className="text-[#1894c9] webName">DevLab</span></h2>
        <p className="subHeader">Learn Programming With Coach And Mentor!</p>
        
        <div className="pt-[30px] pb-[30px] flex gap-3 headerBtnContainer"> 
          <button className="p-2 w-[130px] text-white bg-[rgb(24,148,201)] rounded-lg hover:shadow-lg seeCoursesBtn headerBtn">See Courses</button>
          <button className="p-2 w-[130px] text-white bg-black rounded-lg hover:shadow-lg aboutBtn headerBtn">About Us</button>
        </div>

        <div className="flex justify-center items-center w-full relative lg:w-[fit] searchBarContainer">
          <input type="text" placeholder="Search  courses..." className="shadow-top-bottom w-full p-3 rounded-lg focus:outline-none lg:w-[600px] bg-white headerInput" />
          <img src={searchIcon} alt="search" className="w-[30px] absolute top-[9px] right-[12px] lg:right-[50%] lg:translate-x-[290px] hover:cursor-pointer searchIcon" />
        </div>
        
    </div>
  )
}

export default Header