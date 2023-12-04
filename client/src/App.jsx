import { Routes, Route } from 'react-router-dom'
import Header from "./components/Header/Header.jsx"
import Home from "./components/Home/Home.jsx"
import GameList from './components/GameList/GameList.jsx'
import GameCreate from './components/GameCreate/GameCreate.jsx'
import Login from './components/Login/Login.jsx'
import Register from './components/Register/Register.jsx'
import GameDetails from './components/GameDetails/GameDetails.jsx'
function App() {

  return (
    <div id="box">
      <Header />

          <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/games' element={<GameList />} />
                <Route path='/games/create' element={<GameCreate />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/games/:gameId' element={<GameDetails />} />
          </Routes>
      
    </div>
  )
}

export default App
