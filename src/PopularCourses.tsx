
import reactLogo from "./assets/react-logo.svg"
import bootstrapLogo from "./assets/bootstrap-logo.svg"
import javascriptLogo from "./assets/javascript-logo.svg"
import responsiveDesignLogo from "./assets/responsive-design-logo.png"
import phpLogo from "./assets/php-logo.svg"
import nodejsLogo from "./assets/nodejs-logo.svg"

interface courseLogoAndHeaderType {
    logo: string,
    header: string,
    mainBgColor: string,
    discountBtnBgColor: "#91eb7c",
}

const PopularCourses = () => {
    const courseLogoAndHeader: courseLogoAndHeaderType[] = [
        {logo: reactLogo, header: "Learn React With Mini Projects", mainBgColor: "#015667", discountBtnBgColor: "#91eb7c"},
        {logo: bootstrapLogo, header: "Complete Bootstrap Course", mainBgColor: "#1e025c", discountBtnBgColor: "#91eb7c"},
        {logo: javascriptLogo, header: "100 Days Of Javascript", mainBgColor: "black", discountBtnBgColor: "#91eb7c"},
        {logo: responsiveDesignLogo, header: "Learn Responsive Design", mainBgColor: "#f2d6d5", discountBtnBgColor: "#91eb7c"},
        {logo: phpLogo, header: "Learn PHP With Mini Projects", mainBgColor: "#6b7cb0", discountBtnBgColor: "#91eb7c"},
        {logo: nodejsLogo, header: "Coding Api With NodeJS", mainBgColor: "#45473c", discountBtnBgColor: "#91eb7c"}
    ]

    return (
        <div className="p-5 pt-[70px] pb-[70px] popularCoursesBody">
            <h2 className="text-[20px] font-[700]">Popular Courses</h2>
            <div className="grid grid-cols-2 p-5 gap-6 lg:grid-cols-3 popularCoursesContainer">
                {courseLogoAndHeader.map((course, index) => (
                    <div key={index} className="flex flex-col gap-1 individualCourseContainer">
                        
                            <div className="p-3 rounded-2xl bg-white flex flex-col gap-2 lg:flex-row hover:cursor-pointer courseInfoContainer">

                                <div className="p-3 w-full rounded-2xl lg:w-[100px] lg:h-fit courseImgContainer" style={{backgroundColor: course.mainBgColor}}>
                                    <img src={course.logo} alt="course" className="w-full"/>
                                </div>

                                <div className="flex-grow courseInfoContainer">
                                        
                                    <h3  className="text-[18px] font-[700] pb-2">{course.header}</h3>
                                        
                                    <p className="text-[14px] opacity-50 info">Author: Francis Chad</p>
                                    <p className="text-[14px] opacity-50 info">Duration: +13h</p>
                                    <p className="text-[14px] opacity-50 info">Lifetime Support</p>
                                </div>
                                    
                            </div>
                                

                            <div className="p-3 rounded-2xl lg:flex lg:justify-between bg-white text-center coursePriceContainer">
                                <div className="priceContainer">
                                    <h3 className="text-[18px] font-[700] price">Price: 80$</h3>
                                    <p className="text-[14px] opacity-50 line-through oldPrice">Old Price: 100$</p>
                                </div>

                                <button className="text-[14px] font-[700] text-[#294b5e] p-2 w-full lg:w-fit lg:pl-[30px] lg:mt-0 lg:pr-[30px] rounded-2xl mt-3 hover:shadow-lg discountBtn" style={{backgroundColor: course.discountBtnBgColor}}>20% Discount</button>
                            </div> 
                    </div>
                    
                ))}
            </div>
        </div>
    )
}

export default PopularCourses