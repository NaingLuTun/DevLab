import mainLogo from "./assets/dev-lab-logo.png"


const Nav = () => {
  return (
    <div className="flex items-center pr-5 pl-5 navBar">
        <div className="flex items-center logoAndLinksContainer">
            <img src={mainLogo} alt="logo" className="w-[50px]"/>
            <a href="">Home</a>
            <a href="">Courses</a>
            <a href="">About</a>
            <a href="">Contact Us</a>
        </div>
        <div className="supportAndAccountContainer">
            <img src="" alt="support" className="w-[20px] rounded-full p-1 bg-slate-400 supportIcon"/>
            <img src="" alt="account" />
        </div>
    </div>
  )
}

export default Nav