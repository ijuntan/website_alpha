import React from 'react';
import {Grid,Card,Button} from '@material-ui/core';
import Mmorpglogo from '../Images/mmorpg.png';
import Survivallogo from '../Images/survival.png';
import feature1 from '../Images/sword.png';
import feature2 from '../Images/community.png';
import feature3 from '../Images/friends.png';
import { Link } from 'react-router-dom';
import '../PageStyling.css';
import './HomeScreen.css'


const HomeScreen = () => {
    const players = 10;
    return(
        <div>  
            <Grid container style={{backgroundColor:'white'}}>
                <Grid container class='background' >   
                    <Grid 
                        container item xs={12} justify='center' alignItems='flex-end' 
                        style={{ minHeight: '50vh'}}
                    >
                        <div class='psgText'>
                            PLaNET SG
                        </div> 
                    </Grid>
                    <Grid 
                        container item xs={12} justify='center' alignItems='flex-start' 
                        style={{ minHeight: '50vh'}}
                    >
                        <div class='introText'>
                            Join other {players} players right now!
                        </div>

                        <Grid container item xs={12} style={{paddingBottom:'20vh'}} justify='center' alignItems='center'>
                        <Button title='Click to copy' onClick={()=>navigator.clipboard.writeText('play.planetsg.xyz')}>
                            <Card squared class='ipCard'>
                                <div class='ipText'>
                                    IP: play.planetsg.xyz
                                </div>
                            </Card>
                        </Button>

                    </Grid>
                    </Grid>
                    
                </Grid>
            
                <Grid container className='featureGrid'>
                    
                    <Grid container item xs={12} className='featureIntroText' justify='center' alignItems='center'>  
                        <div>
                            PLANETSG is the server for you!
                        </div>
                    </Grid>

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
                </Grid>

                <Grid container className='backgroundDirt' spacing={3}> 
                    <Grid container item xs={12} justify='center' alignItems='center'>
                        <div class='modeTitleText'>
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
                </Grid>
                
                <Grid container className='discordGrid'>

                    <Grid container item lg={6} xs={12} justify='center' alignItems='center'> 
                        <iframe  
                            src="https://discordapp.com/widget?id=335042716557770753&theme=dark" 
                            allowtransparency="true" 
                            frameBorder="0"
                            title='discord'
                            style={{height:'60vh',width:'40vh'}}
                        />
                    </Grid>

                    <Grid container item lg={6} xs={12} direction='column'>
                        <Grid 
                            container 
                            alignItems='center' 
                            justify='center'
                            className='discordText'
                        >
                            <div>
                                This server is so community-packed that you'll
                                be suprised! Come and join us on our adventure baby!
                            </div>
                        </Grid>
                        <Grid 
                            container
                            alignItems='center' 
                            justify='center'
                            className='joinText'
                        >
                            <Button
                                style={{backgroundColor:'#99aab5',padding:'2vh'}}
                                title='Click to join'
                            >
                                    <div>
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
