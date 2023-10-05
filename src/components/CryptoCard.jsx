
import '../css/index.css'
import { useContext } from 'react';
import AppContext from '../context/AppContext';

const CryptoCard = ({val,id}) => {
    let baseUrl = "https://www.cryptocompare.com";
    const {darker} = useContext(AppContext);

    const usdObject = val.DISPLAY && val.DISPLAY.USD;

    const darkclassName = darker ? 'pt-2 flex iming darkhover' : 'pt-2 flex iming lighthover';
    
if (usdObject) {
  let style1 = {
    color : usdObject.CHANGEPCTDAY < 0 ? "#ff0000" : "#00ff00"
}

  return (
    <div className={darkclassName} id={id}>
                                        <div className='imagetxt cryp'>{id+1}</div>
                                        <div className="logo ml-4 footer content cryp">
                                                <img className = 'mr-2' src={baseUrl + "" + val.CoinInfo.ImageUrl} alt="logo" width="30px" />
 
                                        </div>
                                        <div className='imagetxt cryp'>{val.CoinInfo.FullName} <span>({val.CoinInfo.Internal})</span></div>
                                        <div className='cryp'>{usdObject.PRICE}</div>
                                        <div className='cryp' style = {style1}>{(usdObject.CHANGEPCTDAY > 0) ? "+" : ""}{usdObject.CHANGEPCTDAY}{"%"}</div> 
                                        <div className='cryp'>{usdObject.VOLUME24HOUR}</div>
                                        <div className='cryp'>{usdObject.MKTCAP}</div>
                                        
                                        </div>
                        
  )
} else {
  console.error('USD object not found in the provided data.');
  
}
  
}

export default CryptoCard
