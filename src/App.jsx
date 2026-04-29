import Header from "./templete/Header"
import Slider from "./components/Slider"
import Categories from "./components/Categories"
import CardGallery from "./components/CardGallery"
import Recommendations from "./components/Recommendations"
import SectionIdeas from "./components/SectionIdeas"
import Form from "./components/Form"
import Footer from "./templete/Footer"
import "./styles/styles.css"


function App() {

  return (
    <>
      <Header/>
      <Slider />
      <Categories />
      <CardGallery />
      <Recommendations />
      <SectionIdeas />
      <Form />
      <Footer />
    </>
  )
}

export default App
