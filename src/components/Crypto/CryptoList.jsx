import CryptoCard from './CryptoCard';
import '../../css/index.css'
const CryptoList = ({cryptos,search,id1}) => {
  return (
    <div>
        {cryptos
                        .filter((val) => {
                            return val.CoinInfo.FullName.toLowerCase().includes(search.toLowerCase());
                        })
                        .map((val, id) => {
                            return (
                              <>
                                <CryptoCard key={id} val={val} id={id1+id}/>
                                <div className='hri'> <hr/></div>
                                </>
                            );
                        })}
      
    </div>
  )
}

export default CryptoList
