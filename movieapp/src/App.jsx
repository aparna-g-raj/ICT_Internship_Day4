import './App.css'
import Navbar from './components/Navbar'
import Add from './components/Add'
import {Routes,Route} from 'react-router-dom'
import View from './components/View'


function App() {

  return (
    <>
    <h3>Welcome to Movie App</h3>
     <Navbar/>
     <Routes>
        <Route path='/' element={<View/>}></Route>
        <Route path='/add' element={<Add/>}></Route>
      </Routes>

    </>

  )
}

export default App
