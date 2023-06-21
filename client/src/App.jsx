import './App.css'
import { Home } from './views/home/Home'
//import { PokemonCardContainer } from './components/PokemonCardContainer/PokemonCardContainer'
import { Route, Routes } from "react-router-dom";
import {Header} from './components/header/Header.jsx'




function App() {

  return (
    <div>
      <Header/>
      <Routes>
<<<<<<< HEAD
        
        <Route path="/" element={<PokemonCardContainer/>} />
=======
        <Route path="/" element={<Home/>} />
>>>>>>> 78289764b3320c37db19da83c4f0efb9106d8660
      </Routes>
    </div>
  )
}

export default App
