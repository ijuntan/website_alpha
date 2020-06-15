import React from 'react';
import {Grid,Button,Card} from '@material-ui/core';
import Wave from '../Images/wave.png';
import Book from '../Images/book.png';
import Pet from '../Images/tamepet.png'
import Elytra from '../Images/elytra.png'
import { Slide } from 'react-slideshow-image';
import '../PageStyling.css';
import './MnS.css'


const slideImages = [
    'images/slide1.png',
    'images/slide2.png',
    'images/slide3.png',
    'images/slide4.png',
    'images/slide5.png',
    'images/slide6.png',
    'images/slide7.png',
    'images/slide8.png',
    'images/slide9.png',
    'images/slide10.png',
    'images/slide11.png',
    'images/slide12.png',
    'images/slide13.png',
    'images/slide14.png',
    'images/slide15.png',
    'images/slide16.png',
    'images/slide17.png',
    'images/slide18.png',
    'images/slide19.png',
    'images/slide20.png',
    'images/slide21.png',
];

const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
    pauseOnHover: true,
    onChange: (oldIndex, newIndex) => {
      console.log(`slide transition from ${oldIndex} to ${newIndex}`);
    }
}

function SurvivalScreen() {
    return(
        <div>
            <Grid container>
                <Grid container class='background3' >   
                    <Grid 
                        container item xs={12} justify='center' alignItems='flex-end' 
                        style={{ minHeight: '20vh'}}
                    >
                        <div id='bigText'>
                            Survival
                        </div> 
                    </Grid>
                    <Grid 
                        container item xs={12} justify='center' alignItems='flex-start' 
                        style={{ minHeight: '20vh'}}
                    >
                        <div class='introText'>
                            Where the fun never ends!
                        </div>
                    </Grid>

                    <Grid container item xs={12}>
                        <img src={Wave} alt='wave' style={{width:'100%'}}/>
                    </Grid>
                </Grid>

                <Grid 
                    container 
                    item xs={12} 
                    style={{height:'25vh',backgroundColor:'white'}} 
                    justify='center' 
                >
                    <div id='featureText'>
                        Features
                    </div>
                </Grid>

                <Grid 
                    container 
                    item xs={12} 
                    style={{height:'25vh',backgroundColor:'white'}} 
                    justify='center' 
                >
                    <div id='featureTextCaption'>
                        PlanetSG Survival Server's economy is broken at the moment because of divus.
                        So here's some features about the server!
                    </div>
                </Grid>

                <Grid container style={{backgroundColor:'white'}} spacing={0}>
                    {
                        [
                            {text:'MCMMO & MyPet',img:Pet,text2:'Level up your skills and hang out with your favourite Minecraft animals on PlanetSG today!'},
                            {text:'/Fly',img:Elytra,text2:'Sick & tired of money-grabbing servers locking /fly behind donor ranks? Get your /fly on your first day one PlanetSG!'},
                            {text:'Epic Voting & Playing Rewards',img:Book,text2:'The more you vote and play, the more reward keys and money you get!'},
                        ].map((item)=>(
                            <Grid container item lg={4} xs={12} justify='center' alignItems='center'>
                                <div>
                                    <img src={item.img} alt={item.text} class='featurePic'/>
                                    <div id='featureImgText'>
                                        {item.text}
                                    </div>
                                    <div id='featureImgCaption'>
                                        {item.text2}
                                    </div>
                                </div>
                            </Grid>
                        ))
                    }
                    <Grid container item xs={12} id='ipColorText' justify='center' alignItems='center'>
                        Join Us Now! 
                    </Grid>
                    <Grid container item xs={12} style={{paddingBottom:'20vh'}} justify='center' alignItems='center'>
                        <Button title='Click to copy' onClick={()=>navigator.clipboard.writeText('play.planetsg.xyz')}>
                            <Card squared id='ipCard'>
                                <div id='ipText'>
                                    IP: play.planetsg.xyz
                                </div>
                            </Card>
                        </Button>
                    </Grid>
                    <div style={{minHeight:'10vh',width:'100vw'}}></div>
                </Grid>
                
                <Grid container item xs={12} justify='center' alignItems='center' id='galleryText'>
                    <div>
                        Gallery
                    </div>
                </Grid>

                <Grid container item xs={12} justify='center' alignItems='center' style={{backgroundColor:'white'}}>
                    <div className="slideContainer">
                        <Slide {...properties}>
                            {
                                slideImages.map((item,index) => (
                                    <div className="eachSlide">
                                        <img src={slideImages[index]} class='slideImg' alt={index}/>
                                    </div>
                                ))
                            }
                        </Slide>
                    </div>
                </Grid>

                <div style={{minHeight:'10vh',width:'100vw',backgroundColor:'white'}}></div>   
            </Grid>
        </div>
    )
}

export default SurvivalScreen;