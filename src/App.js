import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Container } from 'react-bootstrap'
import Carousel from './components/Carousel'
import FeaturedPosts from './components/FeaturedPosts'

function App() {
  return (
      <Container>
        <Carousel/>
        <FeaturedPosts/>
      </Container>
  )
}

export default App
