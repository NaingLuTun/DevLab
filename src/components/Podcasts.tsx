import headphoneImg from "../assets/headphone-symbol-svgrepo-com.svg" 
import playButtonImg from "../assets/play-button-svgrepo-com.svg"

interface podcastCardsType {
    bgColor: string,
    mainCardImg: string,
    cardTitle: string,
    categorisation: string,
    date: string,
    duration: string,
    numberOfLitsteners: number,
}

const Podcasts = () => {

    const podcastCards: podcastCardsType[] = [
        {
            bgColor: "#292cff",
            mainCardImg: headphoneImg,
            cardTitle: "Learn Coding",
            categorisation: "Most Played",
            date: "19 Sept 2024",
            duration: "01:35:20",
            numberOfLitsteners: 400
        },
        {
            bgColor: "#ff2982",
            mainCardImg: headphoneImg,
            cardTitle: "Learn UI",
            categorisation: "Most Liked",
            date: "21 Jun 2024",
            duration: "01:15:17",
            numberOfLitsteners: 300
        },
        {
            bgColor: "#ffbb29",
            mainCardImg: headphoneImg,
            cardTitle: "Learn UX",
            categorisation: "Most Commented",
            date: "10 Aug 2024",
            duration: "01:06:15",
            numberOfLitsteners: 300
        },
        {
            bgColor: "#29ffa6",
            mainCardImg: headphoneImg,
            cardTitle: "Learn Basic CS",
            categorisation: "Trending",
            date: "15 Oct 2024",
            duration: "01:12:18",
            numberOfLitsteners: 200
        },
    ]

  return (
    <section id="podcasts" className="p-5 pt-[70px] pb-[70px] podcastsSection">
        <div className="flex justify-between items-center w-full podcastsSectionHeaderContainer">
            <h2 className="text-[20px] font-[700] text-nowrap lg:text-[26px]">Weekly Podcasts</h2>
            <button>See all {">"}</button>  
        </div>

        <div className="grid grid-cols-2 p-3 gap-4 md:p-5  podcastsCardsContainer">

            {podcastCards.map((card, index) => (
                <div key={index} className="flex flex-col gap-2 individualPodcastCardsContainer">
                    <div className="p-3 bg-white rounded-2xl shadow-normal hover:cursor-pointer lg:flex lg:items-center lg:gap-3 podcastMainInfoContainer">
                        <div style={{backgroundColor: card.bgColor}} className="p-2 flex justify-center items-center rounded-2xl mb-3 lg:mb-0 podcastCardImgContainer">
                            <img src={headphoneImg} alt="podcast" className="w-[50px]" />
                        </div>
                        
                        <div className="podcastCardInfo">
                            <p className="font-[700] mb-2">{card.cardTitle}</p>

                            <p className="text-[14px]">{card.date}</p>
                            <p className="text-[14px]">{card.categorisation}</p>
                        </div>
                        
                    </div>

                    <div className="p-3 bg-white rounded-2xl w-full shadow-normal lg:flex podcastDurationAndListenersContainer">
                        <div className="flex items-center w-full mb-2 gap-2 lg:mb-0 displayDurationContainer">
                            <img src={playButtonImg} alt="play" className="w-[16px] md:w-[18px] lg:w-[20px]" />
                            <span>{card.duration}</span>
                        </div>

                        <button className="border-none bg-[#91eb7c] text-[#294b5e] font-[700] p-2 rounded-2xl w-full hover:shadow-lg lg:w-[200px]">+{card.numberOfLitsteners} Listeners</button>
                    </div>
                </div>
            ))

            }

        </div>
        
    </section>
  )
}

export default Podcasts