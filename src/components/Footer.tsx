import instagramIcon from "../assets/instagram-svgrepo-com.svg"
import facebookIcon from "../assets/facebook-176-svgrepo-com.svg"
import linkedinIcon from "../assets/linkedin-svgrepo-com.svg"
import twitterIcon from "../assets/twitter-svgrepo-com.svg"

const Footer = () => {
  return (
    <footer className="p-10 pt-[70px] pb-[70px] bg-[#1894c9] rounded-t-3xl md:p-20 footerSection">
        <div className="flex justify-evenly w-full footerLinksContainer">

            <div className="flex flex-col gap-12 w-fit lg:w-full lg:flex-row lg:justify-around lg:gap-0 footerLinksSubContainer">
                <div className="siteLinksContainer">
                    <h3 className="text-[18px] text-white mb-2 siteLinksHeader">Site Links</h3>

                    <ul>
                        <li className="text-white hover:underline hover:decoration-white hover:underline-offset-2 hover:decoration-[2px] linkLists"><a href="#popularCourses">Popular Courses</a></li>

                        <li className="text-white hover:underline hover:decoration-white hover:underline-offset-2 hover:decoration-[2px] linkLists"><a href="#comments">Comments</a></li>

                        <li className="text-white hover:underline hover:decoration-white hover:underline-offset-2 hover:decoration-[2px] linkLists"><a href="#podcasts">Podcasts</a></li>

                        <li className="text-white hover:underline hover:decoration-white hover:underline-offset-2 hover:decoration-[2px] linkLists"><a href="#article">Article</a></li>
                    </ul>
                </div>

                <div className="otherPagesLinksContainer">
                    <h3 className="text-[18px] text-white mb-2 otherPagesLinksHeader">Other Pages</h3>

                    <ul>
                        <li className="text-white hover:underline hover:decoration-white hover:underline-offset-2 hover:decoration-[2px] linkLists"><a href="#">404 Page</a></li>

                        <li className="text-white hover:underline hover:decoration-white hover:underline-offset-2 hover:decoration-[2px] linkLists"><a href="#">Login|Register</a></li>

                        <li className="text-white hover:underline hover:decoration-white hover:underline-offset-2 hover:decoration-[2px] linkLists"><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>
            </div>

            <div className="flex flex-col gap-12 w-fit lg:w-full lg:flex-row lg:justify-around lg:gap-0 footerLinksSubContainer">

                <div className="socialLinksContainer">
                    <h3 className="text-[18px] text-white mb-2 socialLinksHeader">Social Links</h3>

                    <ul>
                        <li className="text-white hover:underline hover:decoration-white hover:underline-offset-2 hover:decoration-[2px] linkLists">
                            <img src={instagramIcon} alt="instagram" className="inline w-[18px] mr-2 hover:cursor-pointer"/>
                            <a href="#" className="inline">Instagram</a>
                        </li>

                        <li className="text-white hover:underline hover:decoration-white hover:underline-offset-2 hover:decoration-[2px] linkLists">
                            <img src={facebookIcon} alt="facebook" className="inline w-[18px] mr-2 hover:cursor-pointer"/>
                            <a href="#" className="inline">Facebook</a>
                        </li>

                        <li className="text-white hover:underline hover:decoration-white hover:underline-offset-2 hover:decoration-[2px] linkLists">
                            <img src={linkedinIcon} alt="linkedin" className="inline w-[18px] mr-2 hover:cursor-pointer"/>
                            <a href="#" className="inline">Linkedin</a>
                        </li>

                        <li className="text-white hover:underline hover:decoration-white hover:underline-offset-2 hover:decoration-[2px] linkLists">
                            <img src={twitterIcon} alt="twitter" className="inline w-[18px] mr-2 hover:cursor-pointer"/>
                            <a href="#" className="inline">Twitter</a>
                        </li>
                    </ul>
                </div>

                <div className="collaborationLinksContainer">
                    <h3 className="text-[18px] text-white mb-2 collaborationLinksHeader">Collaboration</h3>

                    <ul>
                        <li className="text-white hover:underline hover:decoration-white hover:underline-offset-2 hover:decoration-[2px] linkLists"><a href="#">Work With Us</a></li>

                        <li className="text-white hover:underline hover:decoration-white hover:underline-offset-2 hover:decoration-[2px] linkLists"><a href="#">Affiliate</a></li>

                        <li className="text-white hover:underline hover:decoration-white hover:underline-offset-2 hover:decoration-[2px] linkLists"><a href="#">Support</a></li>
                    </ul>
                </div>

            </div>
            
        </div>
    </footer>
  )
}

export default Footer