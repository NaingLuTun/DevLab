import { useContext } from "react"
import headphoneImg from "../assets/headphone-symbol-svgrepo-com.svg" 
import playButtonImg from "../assets/play-button-svgrepo-com.svg"
import { PreviewContext } from "../context/PreviewContext"


interface podcastCardsType {
    bgColor: string,
    mainCardImg: string,
    cardTitle: string,
    categorisation: string,
    date: string,
    duration: string,
    numberOfLitsteners: number,
    previewText: string,
}

const Podcasts = () => {

    const previewContext = useContext(PreviewContext)

    if(!previewContext) {
        throw new Error("PreviewContext must be used within PreviewContextProvider")
    }

    const { setViewPreview, setPreviewBgColor, setPreviewHeader, setPreviewImage, setPreviewText, setPreviewType, setPreviewCategorisation, setPreviewDate, setPreviewDuration , setPreviewNumberOfListeners} = previewContext

    const podcastCards: podcastCardsType[] = [
        {
            bgColor: "#292cff",
            mainCardImg: headphoneImg,
            cardTitle: "Learn Coding",
            categorisation: "Most Played",
            date: "19 Sept 2024",
            duration: "01:35:20",
            numberOfLitsteners: 400,
            previewText: "Listen to Learn Coding podcast for engaging discussions on coding essentials, tips, and industry insights. Whether you're a beginner or looking to sharpen your skills, this episode dives into key programming concepts, languages, and real-world applications to help you on your coding journey.",
        },
        {
            bgColor: "#ff2982",
            mainCardImg: headphoneImg,
            cardTitle: "Learn UI",
            categorisation: "Most Liked",
            date: "21 Jun 2024",
            duration: "01:15:17",
            numberOfLitsteners: 300,
            previewText: "Explore the art of user interface design with the Learn UI podcast! This episode breaks down essential UI principles, best practices, and design trends, helping you create visually stunning and user-friendly interfaces. Perfect for designers and developers eager to enhance their UI skills.",
        },
        {
            bgColor: "#ffbb29",
            mainCardImg: headphoneImg,
            cardTitle: "Learn UX",
            categorisation: "Most Commented",
            date: "10 Aug 2024",
            duration: "01:06:15",
            numberOfLitsteners: 300,
            previewText: "Delve into the world of user experience design with the Learn UX podcast! Uncover the strategies behind creating intuitive, user-centered designs that truly connect with people. From research techniques to UX best practices, this episode offers valuable insights to improve the way you craft seamless user experiences."
        },
        {
            bgColor: "#29ffa6",
            mainCardImg: headphoneImg,
            cardTitle: "Learn Basic CS",
            categorisation: "Trending",
            date: "15 Oct 2024",
            duration: "01:12:18",
            numberOfLitsteners: 200,
            previewText: "Embark on your journey into the world of computer science with the Learn Basic CS podcast! This episode simplifies complex concepts, from algorithms to data structures, making them accessible for beginners. Whether you're just starting out or looking to refresh your knowledge, this podcast provides the foundational skills you need to thrive in the tech landscape."
        },
    ]

    const handleViewPodcast = (header: string, image: string, bgColor: string, text: string, categorisation: string, date: string, duration: string, numberOfLitsteners: number) => {
        setPreviewBgColor(bgColor)
        setPreviewHeader(header)
        setPreviewImage(image)
        setPreviewText(text)
        setPreviewCategorisation(categorisation)
        setPreviewDate(date)
        setPreviewDuration(duration)
        setPreviewNumberOfListeners(numberOfLitsteners)
        setPreviewType("podcasts")
        setViewPreview(true)
    }

  return (
    <section id="podcasts" className="p-5 pt-[70px] pb-[70px] podcastsSection">
        <div className="flex justify-between items-center w-full podcastsSectionHeaderContainer">
            <h2 className="text-[20px] font-[700] text-nowrap lg:text-[26px]">Weekly Podcasts</h2>
            <button>See all {">"}</button>  
        </div>

        <div className="grid grid-cols-2 p-3 gap-4 md:p-5  podcastsCardsContainer">

            {podcastCards.map((card, index) => (
                <div key={index} className="flex flex-col bg-white shadow-normal rounded-2xl xs:text-center  individualPodcastCardsContainer">
                    <div onClick={() => handleViewPodcast(card.cardTitle, card.mainCardImg, card.bgColor, card.previewText, card.categorisation, card.date, card.duration, card.numberOfLitsteners)} className="p-3 bg-white rounded-t-2xl  hover:cursor-pointer lg:flex lg:items-center lg:gap-3 podcastMainInfoContainer">
                        <div style={{backgroundColor: card.bgColor}} className="p-2 flex justify-center items-center rounded-2xl mb-3 lg:mb-0 podcastCardImgContainer">
                            <img src={headphoneImg} alt="podcast" className="w-[50px]" />
                        </div>
                        
                        <div className="podcastCardInfo">
                            <p className="font-[700] mb-2">{card.cardTitle}</p>

                            <p className="text-[14px]">{card.date}</p>
                            <p className="text-[14px]">{card.categorisation}</p>
                        </div>
                        
                    </div>

                    <div className="p-3 bg-white rounded-b-2xl w-full lg:flex podcastDurationAndListenersContainer">
                        <div className="flex items-center w-full mb-2 gap-2 xs:justify-center lg:mb-0 displayDurationContainer">
                            <img src={playButtonImg} alt="play" className="w-[16px] md:w-[18px] lg:w-[20px]" />
                            <span>{card.duration}</span>
                        </div>

                        <button onClick={() => handleViewPodcast(card.cardTitle, card.mainCardImg, card.bgColor, card.previewText, card.categorisation, card.date, card.duration, card.numberOfLitsteners)} className="border-none bg-[#91eb7c] text-[#294b5e] font-[700] p-2 rounded-2xl w-full hover:shadow-lg lg:w-[200px]">+{card.numberOfLitsteners} Listeners</button>
                    </div>

                </div>

                
            ))

            }

        </div>

        
        
    </section>
  )
}

export default Podcasts