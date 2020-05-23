import React from 'react';
import {Grid,CardMedia,Card,Button,makeStyles} from '@material-ui/core';
import Mmorpglogo from '../Images/mmorpg.png';
import Survivallogo from '../Images/survival.png';
import backgroundDiscord from '../Images/bg2.png';
import feature1 from '../Images/potion.png';
import feature2 from '../Images/quest.png';
import feature3 from '../Images/dungeondoor.png';
import WidgetBot from '@widgetbot/react-embed'
import { Link } from 'react-router-dom';
import '../PageStyling.css';
import './HomeScreen.css'

// const useStyles = makeStyles((theme) => ({
    
// }));

function HomeScreen(){
    // const  = useStyles();
    return(
        <div>  
            <Grid container >
                <Grid container class='background' >   
                    <Grid 
                        container item xs={12} justify='center' alignItems='center' 
                        style={{ minHeight: '60vh'}}
                    >
                        <div class='psgText'>
                        PLaNET SG
                        </div> 
                    </Grid>
                    <Grid 
                        container item xs={12} justify='center' alignItems='center' 
                        style={{ minHeight: '40vh'}}
                    >
                        <Button onClick={()=>navigator.clipboard.writeText('play.planetsg.xyz')}
                            style={{backgroundColor:'#285d00'}}
                            title='Click to copy the IP'
                        >
                                <div class='ipText'>IP: play.planetsg.xyz</div>
                        </Button>
                    </Grid>
                </Grid>
            
                <Grid container item xs={12} >  
                    <div class='introText'>
                        PlanetSG is the server for you!
                    </div>
                </Grid>

                <Grid container>
                    <Grid container item xs={12}>  
                        <div style={{minHeight:'10vh',backgroundColor:'white',width:'100vw'}}></div>
                        <div class='featureWrap'>
                            <img src={feature1} alt='f1' class='featurePic'/>
                            <div class='featureText'>
                                A unique PVP experience giving <br/>
                                you endless customizations <br/>
                                and possibilities <br/>
                            </div>
                        </div>
                    </Grid>

                    <Grid container item xs={12}> 
                        <div class='featureWrap'>
                            <div class='featureText'>
                                Venture on quests with your <br/>
                                friends with our captivating <br/>
                                MMORPG experience <br/>
                            </div>
                            <img src={feature2} alt='f2' class='featurePic'/>
                        </div>
                    </Grid>

                    <Grid container item xs={12}> 
                        <div class='featureWrap'>
                            <img src={feature3} alt='f3' class='featurePic'/>
                            <div class='featureText'>
                                Closely-knit community with <br/>
                                players young and old from <br/>
                                all over the world <br/>
                            </div>
                        </div>
                        <div style={{minHeight:'10vh',backgroundColor:'white',width:'100vw'}}></div>
                    </Grid>
                </Grid>
                    
                <Grid container item xs={12} >  
                    <div class='introText' style={{minheight:'30vh',width:'100vw'}}>
                        Random Text
                    </div>
                </Grid>

                <div style={{minHeight:'20vh',backgroundColor:'white',width:'100vw'}}></div>

                <Grid container style={{minHeight:'100vh',backgroundColor:'white'}} justify='center' alignItems='center'>  
                    <Grid container item lg={4} xs={12} justify='center' alignItems='center'>
                        <CardMedia component={Link} to='/mmorpg' style={{textDecoration:'none'}}>
                            <img 
                                src={Mmorpglogo} 
                                alt='MMORPG logo' 
                                class='modeLogo'                            
                            />
                            <div class='modeText'>MMORPG</div>
                        </CardMedia>
                    </Grid>

                    <Grid container item lg={4} xs={12} justify='center' alignItems='center'>
                        <div class='modeText' style={{fontSize:'10vw'}}>
                            MODES
                        </div>
                    </Grid>

                    <Grid container item lg={4} xs={12} justify='center' alignItems='center'>
                        <CardMedia component={Link} to='/survival' style={{textDecoration:'none'}}>
                            <img 
                                src={Survivallogo} 
                                alt='MMORPG logo' 
                                class='modeLogo'                        
                            />
                            <div class='modeText'>Survival</div>
                        </CardMedia>
                    </Grid>
                    <div style={{minHeight:'20vh',backgroundColor:'white',width:'100vw'}}></div>
                </Grid>
                
                <Grid container style={{backgroundColor:'white',paddingBottom:'10vh'}}>
                    <Grid container style={{padding:'0vw 10vh 0vw'}} item lg={6} xs={12} direction='column' alignItems='center' justify='center'>
                        <Grid 
                            container 
                            item lg={6} 
                            style={{minHeight:'30vh',width:'100%'}} 
                            alignItems='center' 
                            justify='center'
                            class='background' 
                        >
                            <div class='discordText'>intro</div>
                        </Grid>
                        <Grid container item lg={6} style={{minHeight:'30vh',width:'100%'}} alignItems='center' justify='center'>
                            <Button
                                style={{backgroundColor:'#99aab5'}}
                                title='Click to join'
                            >
                                    <div class='joinText'>
                                        Join our discord now!
                                    </div>
                            </Button>
                        </Grid>
                    </Grid>

                    <Grid container item lg={6} xs={12} justify='center' alignItems='center'>
                        <WidgetBot
                            server="335042716557770753"
                            channel="335042716557770753"
                            shard="https://e.widgetbot.io"
                            height='50vh'
                            width='45vw'
                        />
                    </Grid>
                </Grid>

                
            </Grid>

                
        </div>
    )
    
}

export default HomeScreen;
