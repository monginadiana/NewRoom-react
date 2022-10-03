import Home from './Home';
import './App.css';
import Navbar from './Navbar';
import Form from './Form';
import SingleNews from './SingleNews';
import {Routes,Route} from "react-router-dom"
import {useState, useEffect} from 'react'
import Container from './Container';

function App() {
  const[news, setNews]= useState([])
  

  useEffect(()=>{
    fetch("http://localhost:3000/news")
    .then((response)=> response.json())
    .then((data)=>setNews(data))

  },[])
  function formB(value){
    fetch("http://localhost:3000/news",{
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify(value)
    }).then((response)=> response.json())
    .then((data)=>setNews([...news,data]))


  }
  


  return (
    <div className="App">
    <Navbar/>
    <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/news" element={<Container news={news}/>}/>
    <Route exact path="/news/:id" element={<SingleNews/>}/>
    <Route exact path="/news/new" element={<Form blognews={formB}/>}/>
    </Routes>
    </div>
  );
}

export default App;
