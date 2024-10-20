import headphoneImg from "../assets/headphone-symbol-svgrepo-com.svg" 
import playButtonImg from "../assets/play-button-svgrepo-com.svg"

const Podcasts = () => {
  return (
    <section className="p-5 pt-[70px] pb-[70px] podcastsSection">
        <div className="flex justify-between items-center w-full podcastsSectionHeaderContainer">
            <h2 className="text-[20px] font-[700] text-nowrap lg:text-[26px]">Weekly Podcasts</h2>
            <button>See all {">"}</button>  
        </div>

        <div className="grid grid-cols-2 p-3 gap-4 md:p-5  podcastsCardsContainer">

            <div className="flex flex-col gap-2 individualPodcastCardsContainer">
                <div className="p-2 bg-white rounded-2xl shadow-normal hover:cursor-pointer lg:flex lg:items-center lg:gap-3 podcastMainInfoContainer">
                    <div className="p-2 flex justify-center items-center bg-[#292cff] rounded-2xl mb-3 lg:mb-0 podcastCardImgContainer">
                        <img src={headphoneImg} alt="podcast" className="w-[50px]" />
                    </div>
                    
                    <div className="podcastCardInfo">
                        <p className="font-[700] mb-2">Learn Coding</p>

                        <p className="text-[14px]">20 Oct 2024</p>
                        <p className="text-[14px]">Most Played</p>
                    </div>
                    
                </div>

                <div className="p-3 bg-white rounded-2xl w-full shadow-normal lg:flex podcastDurationAndListenersContainer">
                    <div className="flex items-center w-full mb-2 gap-2 lg:mb-0 displayDurationContainer">
                        <img src={playButtonImg} alt="play" className="w-[16px]" />
                        <span>01:35:20</span>
                    </div>

                    <button className="border-none bg-[#91eb7c] text-[#294b5e] p-2 rounded-2xl w-full hover:shadow-lg lg:w-[200px]">+300 Listeners</button>
                </div>
            </div>

            <div className="flex flex-col gap-2 individualPodcastCardsContainer">
                <div className="p-2 bg-white rounded-2xl shadow-normal hover:cursor-pointer lg:flex lg:items-center lg:gap-3 podcastMainInfoContainer">
                    <div className="p-2 flex justify-center items-center bg-[#ff2982] rounded-2xl mb-3 lg:mb-0 podcastCardImgContainer">
                        <img src={headphoneImg} alt="podcast" className="w-[50px]" />
                    </div>
                    
                    <div className="podcastCardInfo">
                        <p className="font-[700] mb-2">Learn UI</p>

                        <p className="text-[14px]">20 Oct 2024</p>
                        <p className="text-[14px]">Most Liked</p>
                    </div>
                </div>

                <div className="p-3 bg-white rounded-2xl shadow-normal lg:flex podcastDurationAndListenersContainer">
                    <div className="flex items-center w-full mb-2 gap-2 lg:mb-0 displayDurationContainer">
                        <img src={playButtonImg} alt="play" className="w-[16px]" />
                        <span>01:15:21</span>
                    </div>

                    <button className="border-none bg-[#91eb7c] text-[#294b5e] p-2 rounded-2xl w-full hover:shadow-lg lg:w-[200px]">+200 Listeners</button>
                </div>
            </div>

            <div className="flex flex-col gap-2 individualPodcastCardsContainer">
                <div className="p-2 bg-white rounded-2xl shadow-normal hover:cursor-pointer lg:flex lg:items-center lg:gap-3 podcastMainInfoContainer">
                    <div className="p-2 flex justify-center items-center bg-[#ffbb29] rounded-2xl mb-3 lg:mb-0 podcastCardImgContainer">
                        <img src={headphoneImg} alt="podcast" className="w-[50px]" />
                    </div>
                    
                    <div className="podcastCardInfo">
                        <p className="font-[700] mb-2">Learn UX</p>

                        <p className="text-[14px]">20 Oct 2024</p>
                        <p className="text-[14px]">Most Commented</p>
                    </div>
                </div>

                <div className="p-3 bg-white rounded-2xl shadow-normal lg:flex podcastDurationAndListenersContainer">
                    <div className="flex items-center w-full mb-2 gap-2 lg:mb-0 displayDurationContainer">
                        <img src={playButtonImg} alt="play" className="w-[16px]" />
                        <span>01:05:33</span>
                    </div>

                    <button className="border-none bg-[#91eb7c] text-[#294b5e] p-2 rounded-2xl w-full hover:shadow-lg lg:w-[200px]">+150 Listeners</button>
                </div>
            </div>
            
            <div className="flex flex-col gap-2 individualPodcastCardsContainer">
                <div className="p-2 bg-white rounded-2xl shadow-normal hover:cursor-pointer lg:flex lg:items-center lg:gap-3 podcastMainInfoContainer">
                    <div className="p-2 flex justify-center items-center bg-[#29ffa6] rounded-2xl mb-3 lg:mb-0 podcastCardImgContainer">
                        <img src={headphoneImg} alt="podcast" className="w-[50px]" />
                    </div>
                    
                    <div className="podcastCardInfo">
                        <p className="font-[700] mb-2">Learn Basic CS</p>

                        <p className="text-[14px]">20 Oct 2024</p>
                        <p className="text-[14px]">Trending</p>
                    </div>
                </div>

                <div className="p-3 bg-white rounded-2xl shadow-normal lg:flex podcastDurationAndListenersContainer">
                    <div className="flex items-center w-full mb-2 gap-2 lg:mb-0 displayDurationContainer">
                        <img src={playButtonImg} alt="play" className="w-[16px]" />
                        <span>01:09:14</span>
                    </div>

                    <button className="border-none bg-[#91eb7c] text-[#294b5e] p-2 rounded-2xl w-full hover:shadow-lg lg:w-[200px]">+150 Listeners</button>
                </div>
            </div>

        </div>
        
    </section>
  )
}

export default Podcasts