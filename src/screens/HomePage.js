import {Link} from 'react-router-dom';
import * as React from 'react';
import './HomePage.css';
import Navbar from '../components/Navbar';
import Typewriter from 'typewriter-effect';
import cursor from '../images/cursor.png';
import {Carousel} from 'react-carousel-minimal';
import images from '../images';


function HomePage()
{
    const data = [
        {image: images.slide_1,},
        {image: images.slide_2,},
        {image: images.slide_3,},
        {image: images.slide_4,},
        {image: images.slide_5,},
        {image: images.slide_7,},
        {image: images.slide_8,},
        {image: images.slide_9,},
        {image: images.slide_10,},
        {image: images.slide_11,},
        {image: images.slide_12,},
        {image: images.slide_13,},
        {image: images.slide_14,},
        {image: images.slide_15,},
        {image: images.slide_16,},
        {image: images.slide_17,},
        {image: images.slide_18,},
        {image: images.slide_19,},
        {image: images.slide_20,},
        {image: images.slide_21,},
        {image: images.slide_22,},
        {image: images.slide_23,},
        {image: images.slide_24,},
        {image: images.slide_25,},
        {image: images.slide_26,},
        {image: images.slide_27,},

    ];

    const [imageIndex, setImageIndex] = React.useState(0);

    const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
      }
      const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
      }
    const [value, setValue] = React.useState('one');
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
    const [isChatDone, setChatDone] = React.useState(false);
    return (
            <div className="home-page">
                <Navbar highlightColor="primary" textColor="white" defaultValue="/"/>
                
                <div className='hp-content-container'>
                
                  <div className='hp-banner'>
                  <h1 style={{color:'white'}}> Welcome to my personal website!</h1>
                  <h3 style={{color:'white'}}>My name is Filippos Kontogiannis.</h3>
                  
                  <div className='hp-carousel-container'>
                <Carousel
                data={data}
                time={100000}
                width="1000px"
                height="50vh"
                captionStyle={captionStyle}
                radius="10px"
                captionPosition="bottom"
                automatic={true}
                dots={true}
                pauseIconColor="white"
                pauseIconSize="40px"
                slideBackgroundColor="darkgrey"
                slideImageFit="cover"
                thumbnails={true}
                thumbnailWidth="100px"
                style={{
                  textAlign: "center",
                  maxWidth: "1000px",
                  maxHeight: "50vh",
                  margin: "40px auto",
                }}
                />
                </div>
                </div>
                
                <div className="middle-container">
                    <Typewriter 
                    options={{
                        cursor:'',
                        deleteSpeed: 0,
                        delay:10,
                        skipAddStyles: false,
                        wrapperClassName:'text-wrapper'
                    }}
                    onInit={(typewriter) => {
                        typewriter.callFunction(() => {console.log('Open dialog box here');})
                        .typeString("Let's get you started by taking a look at my CV.")
                        .callFunction(() => {setChatDone(true);})
                        .start();}}
                    />
                    
                    {isChatDone
                        ?<div style={{display:'flex', flexDirection:'row', paddingLeft:'36%'}}>
                            <img style={{width:25, height:25, marginTop:'10%'}}src={cursor}></img>
                            <Link to='/cv' style={{color:'white', fontSize:16, paddingTop:'10%'}}> Let's begin!</Link>
                        </div>
                        :null

                    }


                  
                        
                
                </div>
            </div>
            </div>
      );
}




export default HomePage;