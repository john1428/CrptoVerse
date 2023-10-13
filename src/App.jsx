import {Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Navcomponents/Contact'
import Notfound from './components/Notfound'
import News from './components/News/News'
import Navbar from './components/Navbar'
import ContactFooter from './components/ContactFooter'
import AppContextProvider from './context/AppContextProvider'
import BuyCryptos from './components/Crypto/BuyCryptos'
import {UserProvider} from './context/userContext/index.js'
import LoginUser from './components/Login/LoginUser'
import { useState } from 'react'
const App = () =>{

    const [filtered,setFiltered] = useState('');


  return (
  <AppContextProvider>
    <UserProvider>
    <Navbar filtercryptos = {setFiltered}/>
    
    <Routes>
        <Route path='/' element={<Home searched = {filtered}/>} />
        <Route path="/contact" element = {<Contact/>}/>
        <Route path="/news" element = {<News/>}/>
        <Route path="/buycryptos" element={<BuyCryptos/>}/>
        <Route path="/auth" element={<LoginUser/>}/>
        <Route path="/register" element={<LoginUser/>}/>
        <Route path="*" element={<Notfound/>}/>
        
     </Routes>

      <div id = "targetSection">
        <ContactFooter/>
        </div>
        </UserProvider>
  </AppContextProvider>
  )
}

export default App;
