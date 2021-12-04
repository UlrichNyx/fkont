import * as React from 'react';
import './AchievementsPage.css';
import Box from '@mui/material/Box';
import Navbar from '../components/Navbar';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';
import SchoolIcon from '@mui/icons-material/School';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import IconButton from '@mui/material/IconButton';
import FlareIcon from '@mui/icons-material/Flare';
import CloudIcon from '@mui/icons-material/Cloud';

function AchievementsPage()
{
    const [chapter, setChapter] = React.useState('Year-0');
    const [location, setLocation] = React.useState('Greece')
    //'https://wallpaperaccess.com/full/470732.jpg'
    const urls = {Greece:"https://images5.alphacoders.com/703/thumb-1920-703637.jpg", UK:"https://images5.alphacoders.com/703/thumb-1920-703637.jpg"};
    
    return (
        <div className="ach-page" style={{backgroundImage:"url(" + urls[location] +")"}}>
            <Navbar highlightColor="primary" textColor="white" defaultValue="/achievements"/>
            <div className="ach-middle-container">
                <div className="ach-timeline">
                    <Timeline position="left">
                        <TimelineItem>
                            <TimelineSeparator>
                            <TimelineDot color="primary" variant="outlined">
                                <div className='timeline-item'>
                                <IconButton onClick={() => {setChapter('Year-0'); setLocation('Greece');}}>
                                    <FlareIcon style={{fill: "white"}}/>
                                </IconButton>
                                </div>
                            </TimelineDot>

                            <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>Year-0</TimelineContent>
                        </TimelineItem>
                        
                        <TimelineItem>
                            <TimelineSeparator>
                            <TimelineConnector />
                            <TimelineConnector />
                            <TimelineConnector />
                            <TimelineDot color="primary" variant="outlined">
                            <div className='timeline-item'>
                                <IconButton onClick={() => {setChapter('The Elsecallers'); setLocation('UK');}}>
                                    <SchoolIcon style={{fill: "white"}}/>
                                </IconButton>
                                </div>
                            </TimelineDot>
                            <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>The Elsecallers</TimelineContent>
                            
                        </TimelineItem>
                        <TimelineItem>
                        <TimelineSeparator>
                        <TimelineConnector />   
                        <TimelineConnector />
                        <TimelineDot color="primary" variant="outlined">
                        <div className='timeline-item'>
                                <IconButton>
                                    <CloudIcon style={{fill: "gray"}}/>
                                </IconButton>
                                </div>
                        
                        </TimelineDot>
                            </TimelineSeparator>
                            <TimelineContent>On the Sen hills of Rain</TimelineContent>
                            
                        </TimelineItem>
                        <TimelineItem>
                        <TimelineSeparator>
                        <TimelineConnector />   
                        <TimelineConnector />
                        <TimelineDot color="primary" variant="outlined">
                        <div className='timeline-item'>
                                <IconButton disabled={true}>
                                <CloudIcon style={{fill: "gray"}}/>
                                </IconButton>
                                </div>
                        
                        </TimelineDot>
                            </TimelineSeparator>
                            <TimelineContent>Home of Amenan</TimelineContent>
                            
                        </TimelineItem>
                        <TimelineItem>
                        <TimelineSeparator>
                        <TimelineConnector />   
                        <TimelineConnector />
                        <TimelineDot color="primary" variant="outlined">
                        <div className='timeline-item'>
                                <IconButton disabled={true}>
                                <CloudIcon style={{fill: "gray"}}/>
                                </IconButton>
                                </div>
                        
                        </TimelineDot>
                            </TimelineSeparator>
                            <TimelineContent>Heart</TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                        <TimelineSeparator>
                        <TimelineConnector />   
                        <TimelineConnector />
                        <TimelineDot color="primary" variant="outlined">
                        <div className='timeline-item'>
                                <IconButton disabled={true}>
                                <CloudIcon style={{fill: "gray"}}/>
                                </IconButton>
                                </div>
                        
                        </TimelineDot>
                            </TimelineSeparator>
                            <TimelineContent>Land of the Free</TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                        <TimelineSeparator>
                        <TimelineConnector />   
                        <TimelineConnector />
                        <TimelineDot color="primary" variant="outlined">
                        <div className='timeline-item'>
                                <IconButton disabled={true}>
                                <CloudIcon style={{fill: "gray"}}/>
                                </IconButton>
                                </div>
                        
                        </TimelineDot>
                            </TimelineSeparator>
                            <TimelineContent>The Everwinter</TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                        <TimelineSeparator>
                        <TimelineConnector />   
                        <TimelineConnector />
                        <TimelineDot color="primary" variant="outlined">
                        <div className='timeline-item'>
                                <IconButton disabled={true}>
                                    <CloudIcon style={{fill: "gray"}}/>
                                </IconButton>
                                </div>
                        
                        </TimelineDot>
                            </TimelineSeparator>
                            <TimelineContent>Sweet unending summer</TimelineContent>
                        </TimelineItem>
                    </Timeline>
                </div>
                <div className="ach-text-container">
                <h1>{chapter}</h1> 
                {chapter=='Year-0'
                ? 
                <div>
                    <p> Something that has been a deciding factor in my life the past few years is a philosophy
                which upon a cold winter's day of going to labs without sleep took form and grew on me,
                giving me true purpose on the years to come (Thank you ECS!). A fancy term that I would like to coin this
                idea with is: 
                </p>
                    <div className="definition-box">
                        <p style={{fontWeight:'bold'}}>Environment-Independent Completionism</p>
                        <p>
                            Long story short, the dedication of one's life into
                            completing their dreams, no matter how ambitious or different they may be. With all that being
                            said: here is mine (and what I have crossed out so far)!
                        </p>
                    </div>
                </div>
                : null
                }     
            </div>
        </div>
    </div>
        
      );
}



export default AchievementsPage;