import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Container } from 'react-bootstrap'
import Carousel from './components/Carousel'
import FeaturedPosts from './components/FeaturedPosts'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Navbar from './components/Navbar'
import Header  from './components/Header'
function App() {
  return (
     
      <Container>
         <Navbar  />
         <Header categories={[`Business`, `Entertainment`, `General`, `Health`, `Science`, `Sports`,` Technology`]} />
         <hr/>
        <Carousel/>
        <FeaturedPosts/>
      </Container>
  )
}
export default App
