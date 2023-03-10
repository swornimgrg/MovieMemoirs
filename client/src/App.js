import React from 'react'
import NavigationBar from "./components/layouts/NaviagtionBar";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"; 
import HomePage from "./components/pages/HomePage";
import { MoviesContextProvider } from './context/MoviesContext';

function App() {

  return (
    <MoviesContextProvider>
    <div className="App">
   <NavigationBar/>
   <Router>
     <Routes>
       <Route path="/" element={<HomePage/>} />
     </Routes>
   </Router>
    </div>
    </MoviesContextProvider>
  );
}

export default App;
