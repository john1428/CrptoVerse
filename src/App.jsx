import {Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Navcomponents/Contact'
import Notfound from './components/Notfound'
import News from './components/News'
import Navbar from './components/Navbar'
import ContactFooter from './components/ContactFooter'
import AppContextProvider from './context/AppContextProvider'
import BuyCryptos from './components/BuyCryptos'
import { useState } from 'react'
const App = () =>{
  

    const [filtered,setFiltered] = useState('');


  return (
  <AppContextProvider>
    <Navbar filtercryptos = {setFiltered}/>
    
    <Routes>
        <Route path='/' element={<Home searched = {filtered}/>} />
        <Route path="/contact" element = {<Contact/>}/>
        <Route path="/news" element = {<News/>}/>
        <Route path="/buycryptos" element={<BuyCryptos/>}/>
        <Route path="*" element={<Notfound/>}/>
        
     </Routes>

      <div id = "targetSection">
        <ContactFooter/>
        </div>
  </AppContextProvider>
  )
}

export default App;
