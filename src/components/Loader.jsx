
import loadergif from '../assets/spinner09.gif'
const Loader = () => {
  return (
    <div className='flex justify-center items-center p-10'>
      <img className = 'center content-evenly' src={loadergif} alt="loading..."/>
    </div>
  )
}

export default Loader
