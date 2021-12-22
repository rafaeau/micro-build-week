import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Container } from 'react-bootstrap'
import Carousel from './components/Carousel'
import FeaturedPosts from './components/FeaturedPosts'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  return (
      <Container>
        <Navbar categories={[`Business`, `Entertainment`, `General`, `Health`, `Science`, `Sports`,` Technology`]}/>
        <Carousel/>
        <FeaturedPosts/>
      </Container>
  )
}
export default App
