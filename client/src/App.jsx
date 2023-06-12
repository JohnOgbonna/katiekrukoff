import {React, useState} from 'react';
import NavBarMobile from './components/navbar/navbarMobile';
import NavBar from './components/navbar/navbar';
import Homepage from './pages/homepage/homepage';
import Workpage from './pages/workpage/workpage';
import Dancepage from './pages/dancepage/dancepage';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'



function App() {
  let [section, changeSection] = useState('home')
  return (
    <Router>
      <div className='App'>
        <NavBarMobile changeSection = {changeSection}/>
        <NavBar changeSection = {changeSection}/>
        <Routes>
          <Route path="/" exact element={<Homepage/>} />
          <Route path="work" element={<Workpage />} />
          <Route path="dance" element={<Dancepage />} />
        </Routes>


      </div>
    </Router>
  );
}

export default App;
