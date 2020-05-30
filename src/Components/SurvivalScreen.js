import React from 'react';
import {Grid,Typography,CardMedia,Card,Divider} from '@material-ui/core';
import Arrow from '@material-ui/icons/KeyboardArrowRight';
import Wave from '../Images/wave.png';
import '../PageStyling.css';
import './MnS.css'


function SurvivalScreen() {
    return(
        <div>
            <Grid container>
                <Grid container class='background3' >   
                    <Grid 
                        container item xs={12} justify='center' alignItems='flex-end' 
                        style={{ minHeight: '20vh'}}
                    >
                        <div class='bigText'>
                            Survival
                        </div> 
                    </Grid>
                    <Grid 
                        container item xs={12} justify='center' alignItems='flex-start' 
                        style={{ minHeight: '20vh'}}
                    >
                        <div class='introText'>
                            Yes, it's your favorite vanilla server!
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
                    <div id='featureSmallText'>
                        PlanetSG Survival Server's economy is broken at the moment because of divus.
                        So here's some features about the server!
                    </div>
                </Grid>

                <Grid container style={{backgroundColor:'white'}} spacing={5}>
                    {
                        [
                            {text:'feature1'},
                            {text:'feature2'},
                            {text:'feature3'},
                        ].map((item)=>(
                            <Grid container item xs={12} justify='center' alignItems='center'>
                                <Arrow/>
                                <div id='featureSmallerText' >
                                    {item.text}
                                </div>
                            </Grid>
                        ))
                    }
                    <div style={{minHeight:'10vh',width:'100vw'}}></div>
                </Grid>
            </Grid>
        </div>
    )
}

export default SurvivalScreen;