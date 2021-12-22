import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Container } from 'react-bootstrap'
import MyFooter from './components/MyFooter'
import MainPosts from './MainPosts'
import Carousel from './components/Carousel'
import FeaturedPosts from './components/FeaturedPosts'
import Navbar from './components/Navbar'
import Header  from './components/Header'

function App() {
  return (
     <>
      <Container>
         <Navbar  />
         <Header categories={[`Business`, `Entertainment`, `General`, `Health`, `Science`, `Sports`,` Technology`]} />
         <hr/>
        <Carousel/>
        <FeaturedPosts/>
      </Container>
      <MainPosts />
      <MyFooter />
    </>
  )
}

export default App
