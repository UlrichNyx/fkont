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
import ReactHtmlParser from 'react-html-parser';
import ReactToPdf from 'react-to-pdf';
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';


import databaseText from '../cv.json';

  

function CVPage()
{
    const ref = React.createRef();
    const [years, setYears] = React.useState('2018-2022');
    const handleYearChange = (event) => {
        setYears(event.target.value);
    };
    const [subject, setSubject] = React.useState('Computer Science');
    const handleSubjectChange = (event) => {
        setSubject(event.target.value);
    };

    const makeBold = (item, keywords) => {
        
        for(const x in keywords)
        {
            var re = new RegExp(keywords[x], 'g')
            item = item.replace(re, '<i>'+keywords[x]+ '</i>');
            
        }
        return (
                item
            );
        
    }

    // Turn database into objects
    var tempArray = JSON.parse(JSON.stringify(databaseText));
    var textContent = [];
    for(const x in tempArray)
    {
        textContent.push(tempArray[x]);
    }
    // set textContent = tempContent

    const textComponents = () =>
    {
        const education = [];
        const projects = [];
        const work = [];
        for(const x in textContent)
        {
            
            for(const t in textContent[x].tags)
            {
                if(textContent[x].tags[t] == subject && textContent[x].dateIndex == years)
                {
                    if(textContent[x].section == "Education")
                    {
                        const text = textContent[x].text;
                        education.push(<li className='text-bold'>{ReactHtmlParser(makeBold(text, textContent[x].keywords))}</li>);
                        break;
                    }
                    else if(textContent[x].section == "Project")
                    {
                        const text = textContent[x].text;
                        projects.push(<li className='text-bold'>{ReactHtmlParser(makeBold(text, textContent[x].keywords))}</li>);
                        break;
                    }
                    else if(textContent[x].section == "Work")
                    {
                        const text = textContent[x].text;
                        work.push(<li className='text-bold'>{ReactHtmlParser(makeBold(text, textContent[x].keywords))}</li>);
                        break;
                    }
                }
            }
        }
        return(
            <div className='cv-margins'>
                {education.length != 0
                ?<div>
                        <div className="text-flexbox-row">
                            <SchoolIcon/>
                            <h2>Education</h2>
                        </div>
                        <ul>
                        {education}
                        </ul>
                        </div>
                : <p> Congrats! You found the easter egg! Unfortunately there's nothing here. ://</p>
                }
                
                    

                {projects.length != 0
                ?
                    <div>
                    <div className="line"/>
                        <div className="text-flexbox-row">
                            <MusicNoteIcon/>
                            <h2>Projects and extracurriculars</h2>
                        </div>
                    <ul>
                        {projects}
                    </ul>
                    </div>
                :null
                }
                

                { work.length != 0
                 ? <div>
                     <div className="line"/>
                        <div className="text-flexbox-row">
                            <WorkIcon/>
                            <h2> Work Experience </h2>
                        </div>
                        <ul>
                            {work}
                        </ul>
                    </div>
                 : null
                }
                
            </div>
        );
    }
    
    return (
        <div className="cv-page">
            <Navbar highlightColor="primary" textColor="white" defaultValue="/cv"/>
            <div className="cv-middle-container" ref={ref}>
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
                            </Select>
                            <FormHelperText> Please select the subject you wanna see the relevant CV of.</FormHelperText>
                        </FormControl>
                        </Box>
                        <div style={{marginBottom:'2%'}}>
                            <ReactToPdf scale={0.7} x={-10}targetRef={ref} filename="cv.pdf">
                                {({toPdf}) => (
                                    <Button endIcon={<DownloadIcon/>}onClick={toPdf}>Download PDF</Button>
                                )}
                            </ReactToPdf>
                        </div>
                        
                    </div>
                    {textComponents()}
            </div>
        </div>
      );
}



export default CVPage;