import '../css/index.css'
import {useContext} from 'react'
import logo from '../assets/cryptologo.jpeg'
import {Link} from 'react-router-dom'
import { Link as ScrollLink} from 'react-scroll';
import AppContext from '../context/AppContext'
import { useLocation } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const Navbar = ({filtercryptos}) => {

    const {darker,setdarker} = useContext(AppContext);

    const location = useLocation();
    const locationpath = location.pathname

    const style1 = {
        backgroundColor : 'black',
        color:'white'
    }
    const style2 = {
        backgroundColor : 'white',
        color:'#000000'
    }
    
    function handleSearchChange(e){
        console.log(e.target.value);
        filtercryptos(e.target.value);
    }

    function handlebgtoggle(){
        darker ? setdarker(false) : setdarker(true)
    }

  return (
    <nav className='navbar-main' style = {darker ? style1 : style2}>

        <ul className='nav-ul-1' >
        <li><Link to='/'><img src={logo} width='50px' height='50px'/></Link></li>
        <span>CryptoVerse</span>
        <li> <Link to='/buycryptos'>BuyCrypto</Link></li>
        <li><Link to='/'>Markets</Link></li>
        <li><Link to='/news'>News</Link></li>
        <li><ScrollLink to="targetSection" smooth={true} duration={500}>Contact</ScrollLink></li>
        <li className='ml-10'>Welcome User</li>
        </ul>
        
        <ul className='nav-ul-2'>
        {locationpath === "/" ? <input
            type="text"
            placeholder="Search coins"
            className= "navinput"
            onChange = {handleSearchChange}
            style={{color:'white'}}
          /> : <></>
        }
        <li><Link to='/auth'>Login</Link></li>
        <li><Link to='/register'>Register</Link></li>
        <label className="switch">
            <input type="checkbox"/>
            <span onClick={handlebgtoggle} className="slider round"></span>
            </label>
        </ul>
      
    </nav>
  )
}

export default Navbar

//todos -> 
    // 1 -> navbar routes
    // 2-> crypto personal links
    // 3 -> graphs plot for cryptos
    // 4 -> News component
    // 5 -> Login/Register Component
