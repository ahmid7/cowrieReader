import HeroPage from "./Pages/HeroPage"
import ChooseConsultation from "./Pages/ChooseConsultation"
import Result from "./Pages/Result"
import "./globalstyle.css"
import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<HeroPage/>}/>
        <Route path='/consult' element={<ChooseConsultation/>}/>
        <Route path='/result' element={<Result/>}/>
      </Routes>
    </HashRouter>
  )
}

export default App
