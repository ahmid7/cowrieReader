import HeroPage from "./Pages/HeroPage"
import ChooseConsultation from "./Pages/ChooseConsultation"
import Result from "./Pages/Result"
import "./globalstyle.css"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HeroPage/>}/>
        <Route path='/consult' element={<ChooseConsultation/>}/>
        <Route path='/result' element={<Result/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
