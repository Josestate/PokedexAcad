import { Route, Routes } from 'react-router-dom'
import './App.css'
import { useSelector } from 'react-redux'
import HomePage from './pages/HomePage'
import PokedexPage from './pages/PokedexPage'
import PokeInfo from './pages/PokeInfo'
import { ProtectedRoutes } from './pages/ProtectedRoutes'

function App() {

  const trainer = useSelector( states => states.trainer )

  console.log('trainer', trainer)

  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route element={<ProtectedRoutes />}>
          <Route path='/pokedex' element={<PokedexPage />}/>
          <Route path='/pokedex/:name' element={<PokeInfo />}/>
        </Route>
      </Routes>

    </div>
  )
}

export default App
