import semanticHTMLImg from "../assets/semantic-html-article-img.png"
import webSecurityImg from "../assets/web-security-article-img.png"
import javascriptBestPractice from "../assets/javascrip-best-practice-article-img.png"
import newInCsImg from "../assets/new-in-cs-article-img.png"

interface ArticlesType {
    image: string,
    blogTitle: string,
    categorisation: string,
}

const Article = () => {

    const articles:ArticlesType[] = [
        {
            image: newInCsImg,
            blogTitle: "What's new in CS?",
            categorisation: "Most Viewed",
        },
        {
            image: javascriptBestPractice,
            blogTitle: "Javascript best practices",
            categorisation: "Most Liked",
        },
        {
            image: webSecurityImg,
            blogTitle: "Get to know about cyber security",
            categorisation: "Most Commented",
        },
        {
            image: semanticHTMLImg,
            blogTitle: "Semantic HTML",
            categorisation: "Trending",
        }
    ] 

  return (
    <section id="article" className="p-5 pt-[70px] pb-[70px] bg-white articleSection">
        <div className="flex justify-between items-center w-full mb-3 articleSectionHeaderContainer">
            <h2 className="text-[20px] font-[700] text-nowrap lg:text-[26px]">Blog Articles</h2>
            <button className="seeAllBtn">See all {">"}</button>
        </div>

        <div className="grid grid-cols-1 gap-4 p-3 md:grid-cols-2 articlesContainer">
            {articles.map((article, index) => (
                <div key={index} className="flex flex-col gap-2 individualArticleContainer">
                    <div className="p-3 w-full bg-blue-100 rounded-2xl shadow-normal articleImgAndTitleContainer">
                        <img src={article.image} alt="image" className="w-full mb-3 rounded-2xl articleImage" />
                        <p className="text-[18px] text-[#294b5e] font-[500]">{article.blogTitle}</p>
                    </div>

                    <div className="p-3 flex justify-between items-center w-full bg-blue-100 rounded-2xl shadow-normal articlecategorisationContainer">
                        <p className="text-[#294b5e] text-[14px] 2xl:text-[16px]">{article.categorisation}</p>
                        <button className="border-none bg-[#91eb7c] text-[#294b5e] font-[700] p-2 pl-3 pr-3 rounded-2xl readMoreBtn">Read more {">"}</button>
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Article