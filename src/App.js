import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Container } from 'react-bootstrap'
import MyFooter from './components/MyFooter'
import MainPosts from './MainPosts'
import Carousel from './components/Carousel'
import FeaturedPosts from './components/FeaturedPosts'
import Navbar from './Components/Navbar'

function App() {
  return (
    <>
      <Navbar categories={[`business`, `entertainment`, `general`, `health`, `science`, `sports`,` technology`]}/>
      <Container>
        <Carousel />
        <FeaturedPosts />
      </Container>
      <MainPosts />
      <MyFooter />
    </>
  )
}

export default App
