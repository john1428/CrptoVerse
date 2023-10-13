
import '../../css/news.css'
import AppContext from "../../context/AppContext";
import { useContext } from 'react';
const NewsCard = ({val}) => {

    const {darker} = useContext(AppContext)

    const handleOnClick = () =>{
        window.open(val.url, '_blank');
    }


  return (
    <div  className= {darker ? 'mainNewsCardDark' : 'mainNewsCardLight' }  onClick={handleOnClick}>


        {/* <span className='sourceinfo'>{val.source_info.name}</span> */}
        <div className='newsflex'>
        {/* <p className='p-5'>{val.title}</p> */}
        <img className='imageclass' src={val.imageurl} width='150px' height='125px'/>
        <p className='p-5'>{val.title}</p>
        <span className='sourceinfo' style={{color:'grey'}}>{val.source_info.name}</span>
        </div>
        {/* <p className='p-5' style={{color:'grey'}}>category : {val.categories}</p> */}
        
      
    </div>
  )
}

export default NewsCard
