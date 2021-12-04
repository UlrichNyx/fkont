import * as React from 'react';
import './CVPage.css';
import Box from '@mui/material/Box';
import Navbar from '../components/Navbar';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import MusicNoteIcon from '@mui/icons-material/MusicNote';

  

function CVPage()
{
    const [years, setYears] = React.useState('2018-2022');
    const handleYearChange = (event) => {
        setYears(event.target.value);
    };
    const [subject, setSubject] = React.useState('Computer Science');
    const handleSubjectChange = (event) => {
        setSubject(event.target.value);
    };
    return (
        <div className="cv-page">
            <Navbar highlightColor="primary" textColor="white" defaultValue="/cv"/>
            <div className="cv-middle-container">
                <h1>Filippos Kontogiannis</h1>
                    <div className="flexbox-row">
                        <Box sx={{ maxWidth: '100%'}}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Year Range</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={years}
                            label="Year Range"
                            helperText="Please select a year range to see the relevant achievements from"
                            onChange={handleYearChange}
                            >
                            <MenuItem value={'2000-2017'}>2000 - 2017: Primary and Secondary Education (IB) 🇬🇷</MenuItem>
                            <MenuItem value={'2018-2022'}>2018 - 2022: Higher Education and Internships (UoS) 🇬🇧</MenuItem>
                            <MenuItem value={'2022-2025'}>2022 - 2025: Work experience in the United Kingdom 🇬🇧</MenuItem>
                            </Select>
                            <FormHelperText> Please select a year range to view the relevant academic or work experience.</FormHelperText>
                        </FormControl>
                        </Box>
                        <Box sx={{ maxWidth: '100%'}}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Subject</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={subject}
                            label="Subject"
                            helperText="Please select the subject you wanna see the relevant CV of."
                            onChange={handleSubjectChange}
                            >
                            <MenuItem value={'Computer Science'}> MEng in Computer Science</MenuItem>
                            <MenuItem value={'Game Development'}> Game Development</MenuItem>
                            <MenuItem value={'Application Development'}> Application Development</MenuItem>
                            <MenuItem value={'Authorship'}> Authorship</MenuItem>
                            </Select>
                            <FormHelperText> Please select the subject you wanna see the relevant CV of.</FormHelperText>
                        </FormControl>
                        </Box>
                    </div>
                    
                <div className="flexbox-row">
                    <SchoolIcon/>
                    <h2>Education</h2>
                </div>
                <ul>
                <li> Educational achievements go here.</li>
                </ul>

                <div className="line"/>
                
                <div className="flexbox-row">
                    <MusicNoteIcon/>
                    <h2>Projects and extracurriculars</h2>
                    
                </div>
                <ul>
                    <li> Projects and extracurriculars go here.</li>
                </ul>
                <div className="line"/>
                <div className="flexbox-row">
                    <WorkIcon/>
                    <h2> Work Experience </h2>
                </div>
                <ul>
                    <li> Work experience goes here.</li>
                    </ul>
            </div>
        </div>
      );
}



export default CVPage;