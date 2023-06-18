import './App.css'
import { PokemonCardContainer } from './components/PokemonCardContainer/PokemonCardContainer'
import { Route, Routes } from "react-router-dom";
import {Header} from './components/header/Header.jsx'




function App() {

  return (
    <div>
      <Header/>
      <Routes>
        
        <Route path="/" element={<PokemonCardContainer/>} />
      </Routes>
    </div>
  )
}

export default App
