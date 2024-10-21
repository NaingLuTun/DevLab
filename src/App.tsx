import Article from "./components/Article"
import Comments from "./components/Comments"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Nav from "./components/Nav"
import Podcasts from "./components/Podcasts"
import PopularCourses from "./components/PopularCourses"


function App() {

  return (
    <>
      <Nav />
      <Header />
      <PopularCourses />
      <Comments />
      <Podcasts />
      <Article />
      <Footer />
    </>
  )
}

export default App
