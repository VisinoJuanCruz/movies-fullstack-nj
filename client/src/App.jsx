import './App.css'
import { Home } from './views/home/Home'
//import { PokemonCardContainer } from './components/PokemonCardContainer/PokemonCardContainer'
import { Route, Routes } from "react-router-dom";


function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </div>
  )
}

export default App
