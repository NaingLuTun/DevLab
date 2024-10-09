import commentImg1 from "./assets/comment-img-1.svg"
import commentImg2 from "./assets/comment-img-2.svg"
import commentImg3 from "./assets/comment-img-3.svg"
import commentImg4 from "./assets/comment-img-4.svg"
import commentImg5 from "./assets/comment-img-5.svg"
import commentImg6 from "./assets/comment-img-6.svg"

interface commentsType {
    image: string,
    comment: string,
}

const Comments = () => {
    const comments: commentsType[] = [
        {image: commentImg1, comment: "Best courses!"},
        {image: commentImg2, comment: "Very informative!"},
        {image: commentImg3, comment: "I learned a lot!"},
        {image: commentImg4, comment: "Great teachers."},
        {image: commentImg5, comment: "Clear instructors!"},
        {image: commentImg6, comment: "Very enjoyable!"},
    ]

  return (
    <section className="p-5 pt-[70px] bg-white commentSection">
        <h2 className="text-[20px] font-[700] text-nowrap mb-3 lg:text-[26px] commentSectionHeader">Students Comments</h2>

        <div className="flex flex-col gap-3 lg:flex-row lg:items-center commentsBody">
            <p className="text-[#1f307c] lg:w-[50%] 2xl:text-[18px]"> 
                These are our students comments. This will help you choose courses better. Also you can contact us for more info!
            </p>

            <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:w-[50%]  commentsContainer">
                {comments.map((cmt, index) => (
                    <div key={index} className="flex items-center gap-2 p-1 rounded-full bg-[#0f415a] shadow-normal individualCommentsContainer">
                        <img src={cmt.image} alt="profile" className="w-[32px] bg-blue-200 rounded-full p-[2px]"/>
                        <p className="text-[14px] text-white text-nowrap 2xl:text-[16px] comments">{cmt.comment}</p>
                    </div>

                ))}
                
            </div>
        </div>
    </section>
  )
}

export default Comments