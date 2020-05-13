import React,{ Component } from 'react';
import {Grid,Box,Divider, Typography} from '@material-ui/core';
import Footer from './Footer';
import PSGlogo from '../Images/ww.jpg';
import Mmorpglogo from '../Images/mmorpg.png';
import Survivallogo from '../Images/survival.png';
import Booklogo from '../Images/book.png'
import '../PageStyling.css';

class HomeScreen extends Component{
    render(){
        return(
            <div class='background'>  
                <Grid container
                    spacing={0}
                    direction="column"
                    style={{ minHeight: '100vh'}}
                >

                    <Grid xs={4} style={{ minHeight: '60vh'}}
                    >   
                        <img src={Mmorpglogo} alt='MMORPG logo' class='mmorpglogo'/>
                        <Typography class='caption' style={{left:'19%'}} >MMORPG</Typography>
                        <img src={PSGlogo} alt='Planet SG logo' class='psglogo'/>
                        <img src={Survivallogo} alt='Survival logo' class='survivallogo'/>
                        <Typography class='caption' style={{left:'81%'}} >SURVIVAL</Typography>
                    </Grid>
                    
                    <Grid xs={4}style={{marginTop:'20vh'}}>
                        <Box class='box'>                 
                            <img src={Booklogo} alt='Introduction' class='booklogo' />
                            <Typography variant='h2' style={{fontFamily:'MinecraftTen',paddingLeft:'100px'}}>
                                Welcome to PlanetSG!
                            </Typography>    
                        </Box>
                    </Grid>
                    <Divider variant='middle' light='true'/>
                    <Grid xs={4}>
                        <Box style={{height:'50vh',width:'98.75vw',backgroundColor:'white'}}>
                            
                        </Box>
                    </Grid>

                    <Grid xs={4} >
                        <Box style={{height:'50vh',width:'98.75vw',backgroundColor:'white'}}>
                            
                        </Box>
                    </Grid>
                </Grid>
                <Footer/>
            </div>
        )
    }
}

export default HomeScreen