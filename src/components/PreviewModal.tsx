import { useContext } from "react"
import "../global.css"
import { PreviewContext } from "../context/PreviewContext"

import closeModalBtnIcon from "../assets/cross-circle-icon.svg"
import playBtnIcon from "../assets/play-button-svgrepo-com.svg"

interface PreviewModalPropsType {
  previewHeader: string | null,
  previewImage: string | null,
  previewBgColor: string | null,
  previewText: string | null,
  previewType: string | null,
  previewDate?: string | null,
  previewCategorisation?: string | null,
  previewDuration?: string | null,
  previewNumberOfListeners?: number | null,
}

const PreviewModal = ({previewHeader, previewImage, previewText, previewType, previewBgColor, previewCategorisation, previewDate, previewDuration, previewNumberOfListeners}: PreviewModalPropsType) => {

  const previewContext = useContext(PreviewContext)

  if (!previewContext) {
    throw new Error("PreviewContext must be used within PreviewContextProvider")
  }

  const {setViewPreview} = previewContext


  return (
    <section className="fixed flex justify-center items-center p-5 w-[100%] h-[100%] top-0 left-0 z-50 bg-[#1d1c1c59] modal">

        

        <div className="bg-white flex flex-col w-full rounded-3xl lg:flex-row lg:mr-[150px] lg:ml-[150px] modalMainContainer">

            {previewBgColor && previewImage?
            <div className="w-full flex justify-center items-center rounded-t-3xl p-10 xs:relative lg:rounded-l-3xl lg:rounded-t-none lg:rounded-tl-3xl modalImageContainer" 
            style={{backgroundColor: previewBgColor}}>
              <img src={previewImage} alt="article image" className="w-[100px]" />

              <button onClick={() => setViewPreview(false)} className="absolute top-2 right-2">
                <img src={closeModalBtnIcon} alt="close" className="w-[50px]" />
              </button>
            </div>
            : null}

            
            <div className="p-5 modalInfoContainer">
                {previewHeader && <h2 className="text-[24px] font-[700] text-center mb-5 lg:text-left previewHeader">{previewHeader}</h2>}

                {previewText && <p className="md:text-[18px] mb-5 previewText">{previewText}</p>}

                {previewType === "popularCourses" && (

                  <div className="popularCoursesInfoContainer">
                    <p className="text-[14px] opacity-80 2xl:text-[16px] info">Author: Francis Chad</p>
                    <p className="text-[14px] opacity-80 2xl:text-[16px] info">Duration: +13h</p>
                    <p className="text-[14px] opacity-80 2xl:text-[16px] info">Lifetime Support</p>

                    <div className="flex justify-between items-center mt-5 previewFooter">
                      <p className="text-[16px] font-[700] md:text-[18px]">Price: 80$</p>
                      <button className="border-none bg-[#91eb7c] text-[#294b5e] font-[700] p-3 pr-[50px] pl-[50px] rounded-2xl hover:shadow-lg">Buy</button>
                    </div>
                  </div>

                )}

                {previewType === "podcasts" && previewCategorisation && previewNumberOfListeners && previewDate && previewDuration? (
                    <div className=" podcastsInfoContainer">
                      <p className="text-[14px] opacity-80 2xl:text-[16px]">{previewDate}</p>
                    
                    <div className="flex gap-1 items-center durationContainer">
                      <img src={playBtnIcon} alt="play" className="w-[18px] md:w-[20px]"/>
                      <p className="text-[14px] opacity-80 2xl:text-[16px]">{previewDuration}</p>
                    </div>

                    <div className="flex justify-between items-center mt-5 previewFooter">
                      <p className="text-[16px] font-[700] md:text-[18px]">{previewCategorisation}</p>
                      <button className="border-none bg-[#91eb7c] text-[#294b5e] font-[700] p-3 rounded-2xl hover:shadow-lg">+{previewNumberOfListeners} Listeners</button>
                    </div>
                  </div>
                ) : null}

                {previewType === "articles" && previewCategorisation &&(
                  <div className=" flex justify-between items-center mt-5 previewFooter">
                      <p className="text-[16px] font-[700] md:text-[18px]">{previewCategorisation}</p>
                      <button className="border-none bg-[#91eb7c] text-[#294b5e] font-[700] p-3 rounded-2xl hover:shadow-lg">Read More</button>
                  </div>
                )}
            </div>


            
        </div>
        
    </section>
  )
}

export default PreviewModal