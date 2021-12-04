import {Link} from 'react-router-dom';
import * as React from 'react';
import './HomePage.css';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Navbar from '../components/Navbar';

  

  

function HomePage()
{
    const [value, setValue] = React.useState('one');
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
    return (
        <div className="home-page">
            <Navbar highlightColor="primary" textColor="white" defaultValue="/"/>
            <div className="middle-container">
                <h1>Welcome, to my personal website.</h1>
                <h2>My name is Filippos Kontogiannis.</h2>

                <Link to='/cv' style={{color:'white', fontSize:22}}>Let's get you started by taking a look at my CV.</Link>
                
            </div>
            
        </div>
      );
}




export default HomePage;