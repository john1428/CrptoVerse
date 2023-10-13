import { useEffect, useState, useContext } from "react"
import axios from "axios";
import '../../css/news.css'
import NewsCard from "./NewsCard";
import Loader from "../Loader";
import AppContext from "../../context/AppContext";

const News = () => {

    const {darker} = useContext(AppContext)

    const [newsItems, setNewsItems] = useState([]);
    const [loading, setLoading] = useState(true);

    const properties = {
        backgroundColor : darker ? 'black' : 'white',
        color : darker ? 'black' : 'white'
    }

    const txtColor = {
        color : darker ? 'white' : 'black'
    }

    const brdrCardProperties = {
        border: darker ? '1px solid white' : '1px solid black',
        fontSize : '40px'
    }

    let key = "e85dfbd1513c55e45611ae7adb6c7ee588d4feb706a35451528303006597f258"

    useEffect(() =>{
        axios.get(`https://min-api.cryptocompare.com/data/v2/news/?lang=EN&api_key=${key}`)
        .then(res => setNewsItems(res.data.Data))
        .catch(err => console.log(err))

        setLoading(false);
    },[])

    console.log(newsItems)
  return (
    <div>
        
            <div style={properties}>

            <h1 className="text-center mx-auto pt-10 text-lg" style={txtColor} >Top News on Crypto</h1>
            
            {loading ? <Loader/>:(
            <div className="outerNews">
                        {newsItems.map((val,id)=>{
                        return (
                            <div key={id} className="news-main p-5 border-spacing-6" style = {brdrCardProperties}>
                                <NewsCard val={val}/>
                            </div>
                        )
                    })}
                    </div>
                    )}
            </div>
    
    </div>
  )
}

export default News
