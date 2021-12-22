import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import MyFooter from './components/MyFooter'
import MainPosts from './MainPosts'
import { Container } from 'react-bootstrap'
import Carousel from './components/Carousel'
import FeaturedPosts from './components/FeaturedPosts'




function App() {
  return (
    <>
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
