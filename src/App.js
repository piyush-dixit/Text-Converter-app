import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Textform from './component/Textform';
import React from 'react';
import About from './component/About';
import { BrowserRouter,Routes,Route, createBrowserRouter,RouterProvider } from 'react-router-dom';
import Contact from './component/Contact';


function App() {
return (
    <div>
    <BrowserRouter>
       <Navbar title="Text Converter App" dis="About"/> 
       <Routes>
        <Route path="/" element={<Textform heading={"Enter the Text"}/>}/>
       <Route path="/about" element={<About/>}/>
       <Route path="/contact" element={<Contact/>}/>

       
       </Routes>
    </BrowserRouter>
</div> 
    
  );
}

export default App;
