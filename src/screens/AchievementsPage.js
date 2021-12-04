import * as React from 'react';
import './AchievementsPage.css';
import Navbar from '../components/Navbar';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import IconButton from '@mui/material/IconButton';
import FlareIcon from '@mui/icons-material/Flare';

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
                    
                    </Timeline>
                </div>
                <div className="ach-text-container">
                <h1>{chapter}</h1> 
                {chapter=='Year-0'
                ? 
                <div>
                    <div className="definition-box">
                        <p>
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