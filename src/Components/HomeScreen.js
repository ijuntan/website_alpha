import React from 'react';
import {Grid,Typography,CardMedia,Card,Button,makeStyles} from '@material-ui/core';
import Footer from './Footer';
import Mmorpglogo from '../Images/mmorpg.png';
import Survivallogo from '../Images/survival.png';
import backgroundDiscord from '../Images/bg2.png';
import feature1 from '../Images/potion.png';
import feature2 from '../Images/quest.png';
import feature3 from '../Images/dungeondoor.png';
import WidgetBot from '@widgetbot/react-embed'

import { Link } from 'react-router-dom';
import '../PageStyling.css';

const useStyles = makeStyles((theme) => ({
    card:{
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center',
        display:'flex',
    },
    cardfeature:{
        backgroundColor:'white',
        height:'80vh',
        paddingTop:'100px',
        textAlign:'center',
        marginTop:'0px'
    },
    psgtext:{
        fontWeight:'bold',
        color:'white',
        fontSize:'150px',
        fontFamily:'MinecraftTen',
        textShadow: '-5px 0 black, 0 5px black, 5px 0 black, 0 -5px black',
        marginTop:'50px'
      },
    iptext:{
        fontWeight:'lighter',
        color:'white',
        fontSize:'40px',
        fontFamily:'MinecraftTen',
        padding:'0px 20px 10px'
    },
    introtext:{
        fontWeight:'lighter',
        color:'white',
        fontSize:'50px',
        fontFamily:'Balsamiq',
        paddingTop:'50px',
        paddingBottom:'50px'
    },
    imgpic:{
        height:'200px',
        width:'200px',
    },
    featuretext:{
        fontWeight:'lighter',
        color:'black',
        fontSize:'30px',
        fontWeight:'bolder',
        paddingTop:'20px',
        fontFamily:'UniSans'
    },
    modetext:{
        color:'black',
        fontSize:'60px',
        fontFamily:'MinecraftTen',
    },
    discordtext:{
        color:'black',
        fontSize:'60px',
        fontFamily:'MinecraftTen',
        position: 'relative',
        top:'-250px',
        left:'225px',
        color:'white'
    },
    jointext:{
        fontWeight:'bolder',
        color:'white',
        fontSize:'40px',
        fontFamily:'UniSans',
        padding:'0px 20px 10px'
    }
}));

function HomeScreen(){
    const classes = useStyles();
    return(
        <div class='background'>  

            <Grid container xs={12}>
                <Grid container xs={12} style={{ minHeight: '100vh'}} justify='center' alignItems='center' display='flex'>   
                    <Grid xs={12} container justify='center' alignItems='center' display='flex'>
                        <Typography 
                            className={classes.psgtext}>
                        PLANET SG
                        </Typography> 
                    </Grid>
                    <Card>
                        <Button onClick={()=>navigator.clipboard.writeText('play.planetsg.xyz')}
                            style={{backgroundColor:'navy'}}
                            title='Click to copy the IP'
                        >
                                <Typography className={classes.iptext}>IP: play.planetsg.xyz</Typography>
                        </Button>
                    </Card>
                </Grid>
            
                <Grid xs={12}>
                    <Card 
                        className={classes.card} 
                        style={{height:'30vh',
                                backgroundColor:'brown'
                            }} 
                            square={true}
                    >      
                        <Typography className={classes.introtext}>
                            PlanetSG is the perfect server for you if you like...
                        </Typography>
                    </Card>
                </Grid>

                <Grid container xs={12} >
                    <Grid xs={4}>  
                        <Card
                            className={classes.cardfeature}
                            square={true}
                        >
                            <img src={feature1} alt='f1' className={classes.imgpic}/>
                            <Typography className={classes.featuretext}>Custom Mobs</Typography>
                        </Card>
                    </Grid>

                    <Grid xs={4}> 
                        <Card
                            className={classes.cardfeature}
                            square={true}
                        >
                            <img src={feature2} alt='f2' className={classes.imgpic}/>
                            <Typography className={classes.featuretext}>Custom Mobs</Typography>
                        </Card>
                    </Grid>

                    <Grid xs={4}> 
                        <Card
                            className={classes.cardfeature}
                            square={true}
                        >
                            <img src={feature3} alt='f3' className={classes.imgpic}/>
                            <Typography className={classes.featuretext}>Custom Mobs</Typography>
                        </Card>
                    </Grid>
                </Grid>
                    
                <Grid xs={12}>
                    <Card 
                        className={classes.card} 
                        style={{height:'50vh',
                                backgroundColor:'brown'
                            }} 
                            square={true}
                    >      
                        <Typography className={classes.introtext} style={{fontFamily:'UniSans'}}>
                            RANDOM TEXT
                        </Typography>
                    </Card>
                </Grid>

                <Grid xs={12}>  
                    <Card
                        className={classes.cardfeature}
                        square={true}
                        style={{display:'flex',height:'90vh',justifyContent:'center'}}
                    >
                        <CardMedia component={Link} to='/mmorpg' style={{marginRight:'80px',textDecoration:'none'}}>
                            <img 
                                src={Mmorpglogo} 
                                alt='MMORPG logo' 
                                class='modelogo'                            
                            />
                            <Typography className={classes.modetext}>MMORPG</Typography>
                        </CardMedia>
                        
                        <Typography className={classes.modetext} style={{fontSize:'150px'}}>MODES</Typography>

                        <CardMedia component={Link} to='/survival' style={{marginLeft:'80px',textDecoration:'none'}}>
                            <img 
                                src={Survivallogo} 
                                alt='MMORPG logo' 
                                class='modelogo'   
                                                             
                            />
                            <Typography className={classes.modetext}>Survival</Typography>
                        </CardMedia>
                    </Card>
                </Grid>
                
                <Grid xs={12}>
                    <Card
                        className={classes.card}
                        style={{height:'110vh',justifyContent:'flex-start',paddingLeft:'100px'}}
                        square={true}
                    >
                        <div>
                            <img src={backgroundDiscord} alt='yes' class='backgroundDiscord'/>
                            <Typography className={classes.discordtext}>intro</Typography>
                            <Button
                                style={{backgroundColor:'#99aab5',marginLeft:'50px',top:'-50px',position:'relative',paddingTop:'20px'}}
                                title='Click to join'
                            >
                                    <Typography className={classes.jointext}>
                                        Join our discord now!
                                    </Typography>
                            </Button>
                        </div>

                        <WidgetBot
                            server="335042716557770753"
                            channel="335042716557770753"
                            width="400"
                            height="600"
                            shard="https://e.widgetbot.io"
                            style={{marginLeft:'150px'}}
                        />
                    
                    </Card>
                </Grid>

                <Grid xs={12}> 
                    <Footer/>
                </Grid>
            </Grid>

                
        </div>
    )
    
}

export default HomeScreen;
