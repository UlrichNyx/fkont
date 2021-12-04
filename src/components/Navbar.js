import { useHistory } from "react-router-dom";
import * as React from 'react';
import './Navbar.css';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

function Navbar({highlightColor, textColor, defaultValue})
{
    const history = useHistory();
    const [value, setValue] = React.useState(defaultValue);
    const handleChange = (event, newValue) => {
        setValue(newValue);
        history.push(newValue);
      };
    return (
            <Box sx={{ width: '100%' }}>
            <Tabs
                value={value}
                onChange={handleChange}
                textColor={highlightColor}
                indicatorColor={highlightColor}
                aria-label="secondary tabs example"
            >
                <Tab sx={{color:textColor, width:'20%'}} value="/" label="Home"/>
                <Tab value="/cv" sx={{color:textColor, width:'20%'}} label="CV" />
                <Tab value="/achievements" sx={{color:textColor, width:'20%'}} label="Achievements" />
                <Tab value="/journal" sx={{color:textColor, width:'20%'}} label="Journal" />
                <Tab value="/contact" sx={{color:textColor, width:'20%'}} label="Contact" />
            </Tabs>
            </Box>
      );
}




export default Navbar;