import Article from "./components/Article"
import Comments from "./components/Comments"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Nav from "./components/Nav"
import Podcasts from "./components/Podcasts"
import PopularCourses from "./components/PopularCourses"

import { PreviewContextProvider } from "./context/PreviewContext"


function App() {

  return (
    <>
      <PreviewContextProvider>
        <Nav />
        <Header />
        <PopularCourses />
        <Comments />
        <Podcasts />
        <Article />
        <Footer />
      </PreviewContextProvider>
      
    </>
  )
}

export default App
