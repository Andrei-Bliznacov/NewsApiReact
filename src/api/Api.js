
import NewsData from './NewsData';
import React,{useEffect,useState} from 'react';

function Api() {
    const [data,setData] = useState([])
    useEffect(() =>{
     fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=01970b55eb754dd2a54c65ce6080f884')
     .then(response => response.json())
     .then(json => setData(json))
    }, [])
    // console.log(data.articles);
    const arrArtic = data.articles;
    const newsBbc = arrArtic?.map((e,i) =>{
        
    return (
       
     <NewsData key={i} title={e.title} img={e.urlToImage} discr={e.description} url={e.url}/>
     )
    })

  return (
    <>
    {newsBbc}
    </>
  )
}

export default Api