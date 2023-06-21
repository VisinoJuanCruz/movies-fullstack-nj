import './App.css'
import { Home } from './views/home/Home'
//import { PokemonCardContainer } from './components/PokemonCardContainer/PokemonCardContainer'
import { Route, Routes } from "react-router-dom";
import {Header} from './components/header/Header.jsx'
import { Login } from './components/login/Login.jsx'




function App() {

  return (
    <div className="app-container">
      <Header/>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<Home/>} />
      </Routes>
    </div>
  )
}

export default App
