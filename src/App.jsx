import { Route, Routes } from 'react-router-dom'
import './App.css'
import {Home} from './pages/Home'
import {RequestAppointment} from './pages/RequestAppointment'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/requestappointment' element={<RequestAppointment/>}/>
      </Routes>
    </>
  )
}

export default App;
