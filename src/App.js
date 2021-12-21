import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import MyFooter from './components/MyFooter'
import SinglePostList from './components/SinglePostList'
import MainPosts from './MainPosts'


function App() {
  return (
    <div className="App">
      <SinglePostList />
      <MainPosts />
      <MyFooter />
    </div>
  )
}

export default App
