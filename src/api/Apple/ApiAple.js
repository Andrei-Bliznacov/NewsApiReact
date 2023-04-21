import React,{useEffect,useState} from 'react';
import AppleNews from './AppleNews';

function ApiAple() {
    const [data,setData] = useState([])
    useEffect(() =>{
        fetch('https://newsapi.org/v2/everything?q=apple&from=2023-03-25&to=2023-03-25&sortBy=popularity&apiKey=01970b55eb754dd2a54c65ce6080f884')
     .then(response => response.json())
     .then(json => setData(json))
    }, [])
    // console.log(data);
    const arrArtic = data.articles;
    const newsApple = arrArtic?.map((e,i) =>{
        
    return (
       
     <AppleNews key={i} title={e.title} img={e.urlToImage} discr={e.description} url={e.url}/>
     )
    })
  return (
    <>
    {newsApple}
    </>
  )
  }


export default ApiAple