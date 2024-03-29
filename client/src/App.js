import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"; 
import HomePage from "./pages/HomePage";
import { MoviesContextProvider } from './context/MoviesContext';
import NavigationBar from './layouts/NavigationBar';
import WatchMoviePage from './pages/WatchMoviePage';
import Footer from './layouts/Footer';

function App() {
 
  return (
    <MoviesContextProvider>
    <div className="App">
   <Router>
     <NavigationBar />
     <Routes>
       <Route path="/" element={<HomePage/>} />
       <Route path="/watch/:video_id" element={<WatchMoviePage/>} />
     </Routes>
     <Footer/>
   </Router>

    </div>
    </MoviesContextProvider>
  );
}

export default App;
