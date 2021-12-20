import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Jumbotron from './components/Jumbotron'
import { Container } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <Container>
        <Jumbotron/>
      </Container>
    </div>
  )
}

export default App
