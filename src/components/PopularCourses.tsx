
import reactLogo from "../assets/react-logo.svg"
import bootstrapLogo from "../assets/bootstrap-logo.svg"
import javascriptLogo from "../assets/javascript-logo.svg"
import responsiveDesignLogo from "../assets/responsive-design-logo.png"
import phpLogo from "../assets/php-logo.svg"
import nodejsLogo from "../assets/nodejs-logo.svg"

import { PreviewContext } from "../context/PreviewContext"
import { useContext } from "react"

interface courseLogoAndHeaderType {
    logo: string,
    header: string,
    mainBgColor: string,
    discountBtnBgColor: "#91eb7c",
    previewText: string,
}


const PopularCourses = () => {

    const courseLogoAndHeader: courseLogoAndHeaderType[] = [
        {
            logo: reactLogo, 
            header: "Learn React With Mini Projects", 
            mainBgColor: "#015667", 
            discountBtnBgColor: "#91eb7c", 
            previewText: "Boost your React skills by building hands-on mini projects designed to teach you core concepts step by step. Whether you're just starting out or looking to solidify your knowledge, these fun, bite-sized challenges will help you master React fundamentals while creating real-world applications."
        },

        {
            logo: bootstrapLogo, 
            header: "Complete Bootstrap Course", 
            mainBgColor: "#1e025c", 
            discountBtnBgColor: "#91eb7c",
            previewText: "Master responsive web design with the Complete Bootstrap Course! Learn how to create modern, mobile-first websites using Bootstrap’s powerful grid system, components, and utilities. Whether you're a beginner or looking to enhance your front-end skills, this course will help you build professional-grade websites with ease."
        },

        {
            logo: javascriptLogo, 
            header: "100 Days Of Javascript", 
            mainBgColor: "black", 
            discountBtnBgColor: "#91eb7c",
            previewText: "Supercharge your JavaScript skills with the 100 Days of JavaScript challenge! Each day brings a new coding exercise or project, helping you deepen your understanding of core concepts and modern JavaScript techniques. Perfect for anyone looking to go from beginner to pro, one day at a time."
        },

        {
            logo: responsiveDesignLogo, 
            header: "Learn Responsive Design", 
            mainBgColor: "#f2d6d5", 
            discountBtnBgColor: "#91eb7c",
            previewText: "Unlock the secrets of building visually appealing, adaptable websites with Learn Responsive Design. This course will guide you through creating layouts that work seamlessly across devices of all sizes. From fluid grids to flexible media, you'll gain the skills needed to make your web designs look stunning on any screen."
        },

        {
            logo: phpLogo, 
            header: "Learn PHP With Mini Projects", 
            mainBgColor: "#6b7cb0", 
            discountBtnBgColor: "#91eb7c",
            previewText: "Kickstart your PHP journey by building practical mini projects in Learn PHP With Mini Projects. Through hands-on coding challenges, you'll master the fundamentals of server-side programming and create dynamic web applications. Ideal for beginners looking to quickly apply their PHP knowledge in real-world scenarios."
        },

        {
            logo: nodejsLogo, 
            header: "Coding Api With NodeJS", 
            mainBgColor: "#45473c", 
            discountBtnBgColor: "#91eb7c",
            previewText: "Discover the power of back-end development with Coding API with NodeJS. This course teaches you how to build fast, scalable APIs from scratch using Node.js and Express. Perfect for anyone looking to create robust server-side applications, handle data, and connect to front-end interfaces with ease."
        }
    ]

    const previewContext = useContext(PreviewContext)

    if(!previewContext) {
        throw new Error("PreviewContext must be used within PreviewContextProvider")
    }

    const {setViewPreview, setPreviewBgColor, setPreviewHeader, setPreviewImage, setPreviewText, setPreviewType} = previewContext

    const handleViewCourse = (header: string, image:string, bgColor:string, text:string ) => {
        setPreviewHeader(header)
        setPreviewImage(image)
        setPreviewBgColor(bgColor)
        setPreviewText(text)
        setPreviewType("popularCourses")
        setViewPreview(true)
    }

    return (
        <section id="popularCourses" className="p-5 pt-[70px] pb-[70px] popularCoursesSection">
            <div className="flex justify-between items-center w-full mb-3 popularCoursesHeaderContainer">
                <h2 className="text-[20px] font-[700] text-nowrap lg:text-[26px]">Popular Courses</h2>
                <button className="seeAllBtn">See all {">"}</button>
            </div>
            
            <div className="grid grid-cols-2 p-3 gap-4 md:gap-5 md:p-5 lg:grid-cols-3 popularCoursesContainer">
                {courseLogoAndHeader.map((course, index) => (
                    <div key={index} className="flex flex-col bg-white shadow-normal rounded-2xl individualCourseContainer">
                        
                            <div onClick={() => handleViewCourse(course.header, course.logo, course.mainBgColor, course.previewText)} className="p-3 flex flex-col gap-2 lg:gap-4 lg:flex-row hover:cursor-pointer courseInfoContainer">

                                <div className="p-3 w-full rounded-2xl lg:w-[100px] lg:h-fit courseImgContainer" style={{backgroundColor: course.mainBgColor}}>
                                    <img src={course.logo} alt="course" className="w-full"/>
                                </div>

                                <div className="flex-grow courseInfoContainer">
                                        
                                    <h3  className="text-[16px] font-[700] md:text-[18px] pb-2 text-center lg:text-left">{course.header}</h3>
                                        
                                    <p className="text-[14px] opacity-80 2xl:text-[16px] text-center lg:text-left info">Author: Francis Chad</p>
                                    <p className="text-[14px] opacity-80 2xl:text-[16px] text-center lg:text-left info">Duration: +13h</p>
                                    <p className="text-[14px] opacity-80 2xl:text-[16px] text-center lg:text-left info">Lifetime Support</p>
                                </div>
                                    
                            </div>
                                

                            <div className="p-3 lg:flex lg:justify-between text-center lg:items-center lg:pr-5 lg:pl-9 coursePriceContainer">
                                <div className="priceContainer">
                                    <h3 className="text-[24px] font-[700] md:text-[26px] price">80$</h3>
                                    <p className="text-[14px] opacity-60 line-through 2xl:text-[16px] oldPrice"> 100$</p>
                                </div>

                                <button onClick={() => handleViewCourse(course.header, course.logo, course.mainBgColor, course.previewText)} className="font-[700] text-[14px] text-[#294b5e] p-2 w-full lg:w-fit lg:pl-[70px] lg:mt-0 lg:pr-[70px] rounded-2xl mt-3 2xl:text-[16px] lg:max-h-[40px] hover:shadow-lg discountBtn" style={{backgroundColor: course.discountBtnBgColor}}>Buy</button>
                            </div> 
                    </div>
                    
                ))}
            </div>

        </section>
    )
}

export default PopularCourses