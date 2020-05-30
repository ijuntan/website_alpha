import React from 'react';
import {Grid,Card,Button,Divider} from '@material-ui/core';
import Mmorpglogo from '../Images/mmorpg.png';
import Survivallogo from '../Images/survival.png';
import feature1 from '../Images/sword.png';
import feature2 from '../Images/friends.png';
import feature3 from '../Images/community.png';
import { Link } from 'react-router-dom';
import '../PageStyling.css';
import './HomeScreen.css'


const HomeScreen = () => {
    const players = 10;
    return(
        <div>  
            <Grid container >
                <Grid container class='background' >   
                    <Grid 
                        container item xs={12} justify='center' alignItems='flex-end' 
                        style={{ minHeight: '60vh'}}
                    >
                        <div class='psgText'>
                            PLaNET SG
                        </div> 
                    </Grid>
                    <Grid 
                        container item xs={12} justify='center' alignItems='flex-start' 
                        style={{ minHeight: '40vh'}}
                    >
                        <div class='introText'>
                            Join other {players} players right now!
                        </div>
                    </Grid>
                </Grid>
            
                <Grid container className='ipGrid'>  
                    <Grid container item xs={7} justify='flex-end' alignItems='center'>
                        <div class='ipButton' style={{padding:'1vw 8vw 1vw'}}>
                            <Button disableRipple disabled> 
                                <div>
                                    IP : play.planetsg.xyz
                                </div>
                            </Button>
                        </div>
                    </Grid>
                    <Grid container item xs={5} justify='center' alignItems='center'>
                        <div class='ipButton'>
                            <Button variant='contained' onClick={()=>navigator.clipboard.writeText('play.planetsg.xyz')}> 
                                <div>
                                    Copy the ip
                                </div>
                            </Button>
                        </div>
                    </Grid>
                </Grid>

                <Grid container style={{backgroundColor:'white'}}>

                    {/* Blank space */}
                    <div style={{minHeight:'10vh',width:'100vw'}}></div>
                    
                    <Grid container item xs={12} style={{height:'30vh'}} justify='center' alignItems='center'>  
                        <div class='featureIntroText'>
                            PLANETSG is the server for you!
                        </div>
                    </Grid>

                    {/* Blank space */}
                    <div style={{minHeight:'10vh',width:'100vw'}}></div>

                    <Grid container item xs={12} lg={6} justify='center' alignItems='center'>  
                        <div class='featureWrap'>
                            <Card class='cardShadow'>
                                <img src={feature1} alt='f1' class='featurePic' />
                                <div class='featureText'>
                                    A unique PVP experience giving <br/>
                                    you endless customizations <br/>
                                    and possibilities <br/>
                                </div>
                            </Card>
                        </div>
                    </Grid>

                    <Grid container item xs={12} lg={6} justify='center' alignItems='center'> 
                        <div class='featureWrap'>
                            <Card class='cardShadow'>
                                <img src={feature2} alt='f2' class='featurePic'/>
                                <div class='featureText'>
                                    Venture on quests with your <br/>
                                    friends with our captivating <br/>
                                    MMORPG experience <br/>
                                </div>
                            </Card>
                        </div>
                    </Grid>

                    <Grid container item xs={12} justify='center' alignItems='center'> 
                        <div class='featureWrap'>
                            <Card class='cardShadow'>
                                <img src={feature3} alt='f3' class='featurePic'/>
                                <div class='featureText'>
                                    Closely-knit community with <br/>
                                    players young and old from <br/>
                                    all over the world <br/>
                                </div>
                            </Card>
                        </div>
                    </Grid>

                    {/* Blank space */}
                    <div style={{minHeight:'30vh',width:'100vw'}}></div>
                </Grid>

                <Grid container className='backgroundDirt'> 
                    <Grid container item xs={12} justify='center' alignItems='center'>
                        <div class='modeText' style={{fontSize:'7vw',paddingTop:'5vh'}}>
                            MODES
                        </div>
                    </Grid>

                    <Grid container item xs={12} justify='center' alignItems='center'>
                        <div class='modeIntroText'>
                            PlanetSG offers you several modes...
                        </div>
                    </Grid>

                    <Grid container item lg={6} xs={12} justify='center' alignItems='center'>
                        <div component={Link} to='/mmorpg' style={{textDecoration:'none'}}>
                            <img 
                                src={Mmorpglogo} 
                                alt='MMORPG logo' 
                                class='modeLogo'                            
                            />
                            <div class='modeText'>MMORPG</div>
                        </div>
                    </Grid>

                    <Grid container item lg={6} xs={12} justify='center' alignItems='center'>
                        <div component={Link} to='/survival' style={{textDecoration:'none'}}>
                            <img 
                                src={Survivallogo} 
                                alt='MMORPG logo' 
                                class='modeLogo'                        
                            />
                            <div class='modeText'>Survival</div>
                        </div>
                    </Grid>

                    <div style={{minHeight:'20vh',width:'100vw'}}></div>
                </Grid>
                
                
                <Grid container style={{backgroundColor:'white',paddingBottom:'30vh'}}>

                    {/* Blank space */}
                    <div style={{minHeight:'30vh',width:'100vw'}}></div>

                    <Grid container item lg={6} xs={12} justify='center' alignItems='center'> 
                        <iframe  
                            src="https://discordapp.com/widget?id=335042716557770753&theme=dark" 
                            allowtransparency="true" 
                            frameBorder="0"
                            style={{height:'60vh',width:'40vh'}}
                        />
                    </Grid>

                    <Grid container item lg={6} xs={12} direction='column'>
                        <Grid 
                            container 
                            alignItems='center' 
                            justify='center'
                            style={{minHeight:'40vh'}}
                        >
                            <div class='discordText'>
                                This server is so community-packed that you'll
                                be suprised! Come and join us on our adventure baby!
                            </div>
                        </Grid>
                        <Grid 
                            container
                            alignItems='center' 
                            justify='center'
                            style={{minHeight:'40vh'}}
                        >
                            <Button
                                style={{backgroundColor:'#99aab5',padding:'2vw'}}
                                title='Click to join'
                            >
                                    <div class='joinText'>
                                        Join our discord now!
                                    </div>
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
    
}

export default HomeScreen;
