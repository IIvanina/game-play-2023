import { Routes, Route } from 'react-router-dom'
import Header from "./components/Header/Header.jsx"
import Home from "./components/Home/Home.jsx"
import GameList from './components/GameList/GameList.jsx'
import GameCreate from './components/GameCreate/GameCreate.jsx'
import Login from './components/Login/Login.jsx'
function App() {

  return (
    <div id="box">
      <Header />

          <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/games' element={<GameList />} />
                <Route path='/games/create' element={<GameCreate />} />
                <Route path='/login' element={<Login />} />
          </Routes>
      
    </div>
  )
}

export default App
