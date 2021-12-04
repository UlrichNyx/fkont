import * as React from 'react';
import Navbar from '../components/Navbar';
import './JournalPage.css';

function JournalPage()
{
    return(
        <div className="journal-page">
            <Navbar highlightColor="primary" textColor="white" defaultValue="/journal"/>
            <div className="journal-content-container">
                <p> Coming soon... </p>
            </div>
        </div>
    )
}

export default JournalPage;