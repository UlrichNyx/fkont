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
                        <p style={{color:"white"}}>
                            This section was inspired by an experience from my past. 
                            One day as I was heading to uni for labs, sleepless and stressed,
                            I was looking for a way to turn things around. What I did on that day,
                            changed my life forever. Let me coin this term:

                            <p style={{color:'white', fontWeight:'bold'}}> Environment-Independent Completionism</p>

                            <ul>
                                <li> Step 1: Write down everything and anything you have ever wanted to do, no matter how small or impossible.</li>
                                <li> Step 2: Devise a plan. There are some things you are naturally better at when you are younger (e.g. physical exercise).</li>
                                <li> Step 3: Organize the tasks into sections and aim to tackle each section at any point in your life.</li>
                                <li> Step 4: Come up with an intial every-day plan and stick with it.</li>
                                <li> Step 5: Adapt your plan according to whats happening, but be reasonable and fair.</li>
                            </ul>

                            I am still experimenting with this method and there are some things that I have to come to terms with eventually.
                            For example, due to the fact that the list is extensive, it may also be impossible. I suppose the cure to that is 
                            enjoying the journey itself. No matter, this section is built for me to organize and "show-off" my achievements.

                            <p>This website is still under construction so it will take some time for me to write out everything.</p>
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