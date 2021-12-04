import * as React from 'react';
import Navbar from '../components/Navbar';
import './ContactPage.css';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Divider from '@mui/material/Divider';
import {Link, Route} from 'react-router-dom';
function ContactPage()
{
    return(
        <div className="contact-page">
            <Navbar highlightColor="primary" textColor="white" defaultValue="/contact"/>
            <div className="contact-content-container">
            <h1> Contact Information </h1>
            <div className="contact-line"/>
            <div className = "contact-row">
            
                <div className="contact-field">
                    <PhoneIphoneIcon />
                    <p className="contact-hyperlink">+44 7376 009811</p>
               </div>
               
               <div className="contact-field">
                    <EmailIcon/> 
                    
                    <p className="contact-hyperlink"> kontogiannisfilippos99@gmail.com</p>
               </div>

               
            </div>
            <div className = "contact-row">
                
                <div className="contact-field">
                <a href="https://www.instagram.com/filipps_k/"
                target='_blank'
                rel="noopener">
                    <IconButton color="secondary" component="span">
                        <InstagramIcon/> 
                    </IconButton>
                </a>
               </div>

               
               <div className="contact-field">
               <a href="https://www.facebook.com/filipps.kontoyannis/"
                target='_blank'
                rel="noopener">
               <IconButton color="primary" component="span">
                    <FacebookIcon/> 
                </IconButton>
                </a>
               </div>
               <div className="contact-field">
               <a href="https://github.com/UlrichNyx"
                target='_blank'
                rel="noopener">
                    
               <IconButton component="span">
                        <GitHubIcon/> 
                    </IconButton> 
                </a>
               </div>

               <div className="contact-field">
               <a href="https://www.linkedin.com/in/filippos-kontogiannis-868504171/"
                target='_blank'
                rel="noopener">
               <IconButton color="primary" component="span">
                    <LinkedInIcon/> 
                </IconButton> 
                </a>
               </div>
            </div>
            <p> Thank you for visiting my website.</p>
            <p> Please come again.</p>
            <p>FK</p>
            </div>
        </div>
    )
}

export default ContactPage;