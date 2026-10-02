import './css/App.css'
import Favorites from './pages/Favorites'
import Home from "./pages/Home"
import {Routes, Route} from "react-router-dom"
import NavBar from './components/NavBar'
import LandingPage from "./pages/LandingPage"

function App() {

  return (
    <>
    <NavBar />

    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/favorites" element={<Favorites />}/>
        <Route path="/landingPage" element={<LandingPage />}/>
      </Routes>
    </main>
    </>
  )
}


export default App
