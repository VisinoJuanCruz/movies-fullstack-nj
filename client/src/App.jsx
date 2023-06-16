import './App.css'
import { PokemonCardContainer } from './components/PokemonCardContainer/PokemonCardContainer'
import { Route, Routes } from "react-router-dom";


function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<PokemonCardContainer/>} />
      </Routes>
    </div>
  )
}

export default App
