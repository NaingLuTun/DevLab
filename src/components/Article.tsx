import semanticHTMLImg from "../assets/semantic-html-article-img.png"
import webSecurityImg from "../assets/web-security-article-img.png"
import javascriptBestPractice from "../assets/javascrip-best-practice-article-img.png"
import newInCsImg from "../assets/new-in-cs-article-img.png"
import { useContext } from "react"
import { PreviewContext } from "../context/PreviewContext"

interface ArticlesType {
    image: string,
    blogTitle: string,
    categorisation: string,
    previewText: string,
}

const Article = () => {

    const previewContext = useContext(PreviewContext)

    if(!previewContext) {
        throw new Error("PreviewContext must be used within PreviewContextProvider")
    }

    const {viewPreview, setViewPreview, setPreviewHeader, setPreviewImage, setPreviewCategorisation, setPreviewText, setPreviewType} = previewContext

    const articles:ArticlesType[] = [
        {
            image: newInCsImg,
            blogTitle: "What's new in CS?",
            categorisation: "Most Viewed",
            previewText: "Stay ahead of the curve with our latest blog article, What's New in CS? Dive into the exciting advancements and emerging trends in computer science, from cutting-edge technologies like artificial intelligence and quantum computing to innovative programming languages and frameworks. Explore how these developments are shaping the future of tech and what they mean for aspiring developers and seasoned professionals alike."
        },
        {
            image: javascriptBestPractice,
            blogTitle: "Javascript best practices",
            categorisation: "Most Liked",
            previewText: "Unlock the full potential of your JavaScript projects with our blog article, JavaScript Best Practices. Discover essential coding techniques, performance optimization tips, and effective debugging strategies that will enhance your code quality and maintainability. Whether you're a novice or an experienced developer, these best practices will help you write cleaner, more efficient JavaScript and elevate your programming skills to the next level."
        },
        {
            image: webSecurityImg,
            blogTitle: "Get to know about cyber security",
            categorisation: "Most Commented",
            previewText: "Enhance your understanding of the digital landscape with our article, Get to Know About Cyber Security. Explore the fundamental concepts of cybersecurity, including common threats, protective measures, and the importance of safeguarding personal and organizational data. This guide provides essential insights for anyone looking to navigate the complexities of online security and protect themselves in an increasingly connected world"
        },
        {
            image: semanticHTMLImg,
            blogTitle: "Semantic HTML",
            categorisation: "Trending",
            previewText: "Unlock the power of web accessibility and SEO with our article on Semantic HTML. Discover how using meaningful HTML tags enhances the structure and readability of your web content, making it more understandable for both users and search engines. This guide covers the principles of semantic markup, best practices, and practical examples, empowering you to create cleaner, more effective web pages that provide a better experience for everyone."
        }
    ]

    const handleViewArticle = (header: string, image: string, categorisation: string, text: string ) => {
        setPreviewHeader(header)
        setPreviewImage(image)
        setPreviewCategorisation(categorisation)
        setPreviewText(text)
        setPreviewType("articles")
        setViewPreview(true)
    }

  return (
    <section id="article" className="p-5 pt-[70px] pb-[70px] bg-white articleSection">
        <div className="flex justify-between items-center w-full mb-3 articleSectionHeaderContainer">
            <h2 className="text-[20px] font-[700] text-nowrap lg:text-[26px]">Blog Articles</h2>
            <button className="seeAllBtn">See all {">"}</button>
        </div>

        <div className="grid grid-cols-1 gap-4 p-3 md:grid-cols-2 articlesContainer">
            {articles.map((article, index) => (
                <div key={index} className="flex flex-col gap-2 individualArticleContainer">
                    <div onClick={() => handleViewArticle(article.blogTitle, article.categorisation, article.image, article.previewText)} className="p-3 w-full bg-blue-100 rounded-2xl shadow-normal hover:cursor-pointer articleImgAndTitleContainer">
                        <img src={article.image} alt="image" className="w-full mb-3 rounded-2xl articleImage" />
                        <p className="text-[18px] text-[#294b5e] font-[500]">{article.blogTitle}</p>
                    </div>

                    <div className="p-3 flex justify-between items-center w-full bg-blue-100 rounded-2xl shadow-normal articlecategorisationContainer">
                        <p className="text-[#294b5e] text-[14px] 2xl:text-[16px]">{article.categorisation}</p>
                        <button onClick={() => handleViewArticle(article.blogTitle, article.categorisation, article.image, article.previewText)} className="border-none bg-[#91eb7c] text-[#294b5e] font-[700] p-2 pl-3 pr-3 rounded-2xl hover:shadow-lg readMoreBtn">Read more {">"}</button>
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Article