import React from 'react';
import {Grid,Button} from '@material-ui/core';
import Arrow from '@material-ui/icons/KeyboardArrowRight';
import '../PageStyling.css';

const VoteScreen = () => {
    return(
        <div>
            <Grid container>
                <div style={{minHeight:'20vh',width:'100vw',backgroundColor:'white'}}/>
                <div class='background2' >   
                    <Grid 
                        container item xs={12} justify='center' alignItems='flex-start' 
                    >
                        <div id='votingText'>
                            Voting
                        </div> 
                    </Grid>
                </div>

                <Grid 
                    container 
                    item xs={12} 
                    style={{height:'30vh',backgroundColor:'white'}} 
                    alignItems='center'
                >
                    <div id='introVotingText'>
                        You can vote for PlanetSG 6 times every day to gain freebies such as 10k in-game cash 
                        and vote keys! Open these up and gain some awesome loot, absolutely free of charge!
                    </div>
                </Grid>

                <Grid 
                    container 
                    item xs={12} 
                    style={{backgroundColor:'white'}} 
                    justify='center'
                >
                    <div style={{width:'100%',backgroundColor:'#7DB46CFF',marginBottom:'10vh'}}>
                        <div id='sitesText'>
                            S I T E S
                        </div>
                    </div>
                </Grid>

                <Grid container style={{backgroundColor:'white'}} spacing={8}>
                    {
                        [
                            {text:'minecraft-mp.com',href:'https://minecraft-mp.com/server/243302/vote/'},
                            {text:'minecraftservers.org',href:'https://minecraftservers.org/vote/572538'},
                            {text:'minecraft-server.net',href:'https://minecraft-server.net/vote/Kangaroozy/'},
                            {text:'topg.org',href:'https://topg.org/Minecraft/in-592870'},
                            {text:'topminecraftservers.org',href:'https://topminecraftservers.org/vote/10278'},
                            {text:'minevotes.com',href:'https://www.minevotes.com/vote/618'},
                        ].map((item)=>(
                            <Grid container item xs={4} justify='center' alignItems='center' >
                                <Arrow/>
                                <a 
                                    href={item.href} 
                                    style={{textDecoration:'none'}}
                                    target='_blank'  
                                    rel='noopener  noreferrer' 
                                >
                                    <Button id='votingButton'>
                                        <div>
                                            {item.text}
                                        </div>
                                    </Button>
                                </a>
                            </Grid>
                        ))
                    }
                </Grid>

                <div style={{minHeight:'20vh',width:'100vw',backgroundColor:'white'}}/>

            </Grid>
        </div>
    )
}

export default VoteScreen;
