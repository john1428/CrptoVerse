import { useContext, useEffect, useState } from "react";
import "../css/index.css";
import axios from "axios";
import Pagination from "./Crypto/Pagination";
import CryptoList from "./Crypto/CryptoList";
import Header from './Header';
import AppContext from "../context/AppContext";
import Loader from "./Loader";



function Home({searched}) {
  const [cryptos, setCryptos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const {darker} = useContext(AppContext);

  const [currentPage, setcurrentPage] = useState(1);

  const totalposts = 100;
  const postsperpage = 20;

  const modifycryptos = (updatedSearch) => setSearch(updatedSearch)

  console.log("parent dark mode is ", darker);

  const hitCryptoCompare = () => {
    setLoading(true);

    axios
      .get(
        `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=100&tsym=USD&api_key=${import.meta.env.VITE_APIKEY}`
      )
      .then((res) => {
        setCryptos(res.data.Data)
      })
      .catch((err) => console.error(err));
    
    setLoading(false);
  };

  useEffect(() => {
    hitCryptoCompare();
  }, []);

  const indexoflastpost = currentPage * postsperpage;
  const indexoffirstpost = indexoflastpost - postsperpage;
  const currentposts = cryptos.slice(indexoffirstpost, indexoflastpost);
  console.log("currentposts",currentposts)
  console.log("indexoffirstpost",indexoffirstpost)

  console.log("indexoflastpost",indexoflastpost)



  const totalpages = totalposts/postsperpage;
  const paginate = (pagenumber) => {
    switch (pagenumber) {
      case "<":
        currentPage > 1 && setcurrentPage(currentPage - 1);
        break;
      case ">":
        currentPage < totalpages && setcurrentPage(currentPage + 1);
        break;
      default:
        setcurrentPage(pagenumber);
    }
  };

    const darkstyle = {
        backgroundColor : 'black',
        color:'white'
    }
    const lightstyle = {
        backgroundColor : 'white',
        color:'#000000'
    }

    return (


      <div style = {darker ? darkstyle : lightstyle }>
        
          <>
          {/* <Navbar filtercryptos = {modifycryptos} setParentDarkMode = {handleDarkMode}/> */}
        
        <div className="outercontainer mx-auto" >
        <Header/>
          <div className="flex-container">
            <div>Rank</div>
            <div>Name</div>
            <div>Price</div>
            <div>Change</div>
            <div>24h Volume</div>
            <div>Market Cap</div>
          </div>
          {/* Mapping all the cryptos */}
          {loading ? <Loader/>:(
          <div>
            <CryptoList
              cryptos={currentposts}
              search={searched}
              id1={indexoffirstpost}
            />
            {/* Filtering to check for the searched crypto */}

            <Pagination
              postsperpage={postsperpage}
              totalPosts={cryptos.length}
              paginate={paginate}
            />
          </div>
          )}
        </div>
        
        </>
      </div>
    );
}

export default Home;
