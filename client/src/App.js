import './App.css';
import Navbar from "./components/Navbar/Navbar";
import axios from 'axios'

import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

import { Routes, Route } from "react-router-dom";
import PhoneDetails from './pages/AboutPage/PhoneDetails';
import { useEffect, useState } from 'react';



function App() {

  const [phoneList, setPhoneList] = useState([])

  useEffect(() => {
    getPhonesList()
  }, [])

  const getPhonesList = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/phones`)
      return setPhoneList(response.data)
    } catch(err) {
      console.log (err) 
    }
  }

  return (
    <div className="App">
      <Navbar phoneList={phoneList}/>
      
      <Routes>
        <Route  path="/" element={<HomePage />} />

        <Route path="/phoneDetails/:phoneId" element={<PhoneDetails phoneList={phoneList}/>} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>      
    </div>
  );
}

export default App;
