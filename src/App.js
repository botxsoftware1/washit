import "./App.css";
import { Our } from "./ourservice";
import { Testimonials } from "./testimonials";
import { Footer } from "./footer";
import Header from "./Header";
import React,{useState,useEffect} from 'react';
import BarLoader from "react-spinners/BarLoader";
import logoloader from './image/loader.gif';

import "bootstrap/dist/css/bootstrap.min.css";




function App() {
const [loading, setloading] = useState(false);

useEffect(() => {
  setloading(true)
  setTimeout(()=>{
    setloading(false)
  }, 1500)
}, [])
  

  return (
    <div className="App">
      {
        loading ?
        <div className="loader">
          <img src={logoloader} size={50}/>
        <BarLoader color={'#85B8F1'} loading={loading} size={30} />
        </div>
        : 
        <div>
      <Header />
      <Our />
      <Testimonials />
      <Footer />
      </div>
      }
     
    </div>
  );
}

export default App;
