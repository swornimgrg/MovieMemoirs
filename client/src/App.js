import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"; 
import HomePage from "./pages/HomePage";
import { MoviesContextProvider } from './context/MoviesContext';
import NavigationBar from './layouts/NavigationBar';

function App() {

  return (
    <MoviesContextProvider>
    <div className="App">
  <NavigationBar />
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
