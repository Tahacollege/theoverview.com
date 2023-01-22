import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Cards from './Cards';
import Anime_Data from './Anime_data';
import Hollywood_data from "./Hollywood_data"
import Bollywood_data from "./Bollywood_data"
import best_of_all from './best_of_all';
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
function Write(){
  var homepage=best_of_all.map(item=>{
    return <Cards {...item}/>
  })
  const[carddata,chnagecard]=React.useState(homepage)
  const[count,chnagecount]=React.useState(0)
  /*React.useEffect(()=>{
    fetch ("https://anime-db.p.rapidapi.com/anime")
  .then(res=>res.json())
  .then(data=>animeapi(data))
  },[count])*/
  function home(){
    var anime=Anime_Data.map(item=>{
      return <Cards {...item}/>
    })
    chnagecard(anime)
    chnagecount(1)
  }
  function holly(){
    var hollywood=Hollywood_data.map(item=>{
      return <Cards {...item}/>
    })
    chnagecard(hollywood)
    chnagecount(2)
  }
  function bolly(){
    var bollywood=Bollywood_data.map(item=>{
      return <Cards {...item}/>
    })
    chnagecard(bollywood)
    chnagecount(3)
  }
  var display;
  if(count===0){
    display="100px 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 100px"
  }
  else if(count==2){
    display="100px 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 100px"
  }
  console.log(count)
  return(
    <div className='container' id="container" style={{gridTemplateRows: display}}>
    <div className="child header">
    <h1 className='heading'>Must  W@tch series </h1>
    <br />
    <button className='btn' onClick={home}>Anime</button>
    <button className='btn'onClick={holly}>Hollywood</button>
    <button className='btn' onClick={bolly}>Bollywood</button>
    </div>   
      {carddata}
            <div className="child fotter">
              <p>Credits:- Taha </p>
              <br />
              <p>Email: tcollegewala30@gmail.com</p>
              <br />
              <p> Full Stack Web Developer</p>
              <a href="https://www.instagram.com/mr_taha30/?next=%2F"><img src='./images/images.jpg' className='fotterimagesinsta'></img></a>
              <a href='https://github.com/Tahacollege'><img src='./images/download (3).png' className='fotterimagesgithub'></img></a>
             <a href='https://www.linkedin.com/in/taha-collegewala-9669b3250/'><img src='./images/download (4).png' className='fotterimageslinkdin'></img></a>
              
            </div>
    </div>
  )
}
ReactDOM.render(<Write />, document.getElementById("root"))
