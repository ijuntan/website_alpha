import React from 'react';
import {Grid,Typography,CardMedia,Card,Divider,makeStyles} from '@material-ui/core';
import Footer from './Footer';
import PSGlogo from '../Images/ww.jpg';
import Mmorpglogo from '../Images/mmorpg.png';
import Survivallogo from '../Images/survival.png';
import Booklogo from '../Images/book.png';
import { Link } from 'react-router-dom';
import '../PageStyling.css';

const useStyles = makeStyles((theme) => ({
    card:{
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center',
        display:'flex',
    },
    booklogo:{
        height:'150px',
        width:'150px',
        marginRight:'100px'
    },
    divider:{
        backgroundColor:'black',
        marginLeft:'100px'
    },
    }));

function HomeScreen(){
    const classes = useStyles();
    return(
        <div class='background'>  

            <Grid container>
                <Grid xs={12} style={{ minHeight: '80vh'}}>   
                    <CardMedia component={Link} to='/mmorpg'>
                        <img 
                            src={Mmorpglogo} 
                            alt='MMORPG logo' 
                            class='mmorpglogo'
                        />
                        <Typography class='caption' style={{left:'19%'}}>MMORPG</Typography>
                    </CardMedia>
                    
                    <img 
                        src={PSGlogo} 
                        alt='Planet SG logo' 
                        class='psglogo' 
                        onClick={()=>navigator.clipboard.writeText('COPYPASTE')}
                    />
                    <Typography class='middle'>Join over<br/>[plugin]players<br/>right now!</Typography>

                    <CardMedia component={Link} to='/survival'>
                        <img 
                            src={Survivallogo} 
                            alt='Survival logo' 
                            class='survivallogo'
                        />
                        <Typography class='caption' style={{left:'81%'}} >SURVIVAL</Typography>
                    </CardMedia>
                </Grid>
            
                <Grid xs={12}>
                    <Card 
                        className={classes.card} 
                        style={{height:'50vh',
                                borderBottom:'5px solid black',
                                borderTop:'5px solid black',
                            }} 
                        square={true}
                    >         
                        <img 
                            src={Booklogo} 
                            alt='Introduction' 
                            className={classes.booklogo}
                        />
                        <Typography variant='h2' style={{fontFamily:'MinecraftTen'}}>
                            Welcome to PlanetSG!
                        </Typography>   
                    </Card>
                </Grid>

                <Grid xs={12} >
                    <Card 
                        className={classes.card} 
                        style={{height:'50vh',
                                borderTop:'5px solid brown'
                            }} 
                        square={true}
                    >

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