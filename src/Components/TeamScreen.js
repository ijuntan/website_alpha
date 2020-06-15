import React from 'react';
import {Grid} from '@material-ui/core';
import imbad from '../Images/imbadatthisgame.png';
import fanta from '../Images/fantasg.png';
import yuko from '../Images/yuko.png'
import '../PageStyling.css';
import './RnT.css'

const Staff = [
    //Owner
    {name:'Kangaroozy',lg:12,style:'rulesText'},
    {name:'Owner',lg:12,style:'rulesText2'},
    //Co-Owner & Manager
    {name:'Hans',lg:6,style:'rulesText'},
    {name:'RussGoller',lg:6,style:'rulesText'},
    {name:'Co-Owner',lg:6,style:'rulesText2'},
    {name:'Manager(?)',lg:6,style:'rulesText2'},
    //Administrator
    {name:'Administrator',lg:12,style:'rulesText'},
    {name:'Zyduk',lg:6,style:'rulesText2'},
    {name:'imbadatthisgame',lg:6,style:'rulesText2',img:imbad},
    //Senior Maoderator
    {name:'Senior Moderator',lg:12,style:'rulesText'},
    {name:'CallMeBigBrain',lg:6,style:'rulesText2'},
    {name:'yeet(?)',lg:6,style:'rulesText2'},
    //Moderator
    {name:'Moderator',lg:12,style:'rulesText'},
    {name:'MirChad',lg:4,style:'rulesText2'},
    {name:'FantaSG',lg:4,style:'rulesText2',img:fanta},
    {name:'NashShadows',lg:4,style:'rulesText2'},
    //Junior Moderator
    {name:'Junior Moderator',lg:12,style:'rulesText'},
    {name:'Leanne95',lg:12,style:'rulesText2'},
    //Web Developer
    {name:'Web Developer',lg:12,style:'rulesText'},
    {name:'Juntan',lg:12,style:'rulesText2'},
    //Discord Moderator
    {name:'Discord Moderator',lg:12,style:'rulesText'},
    {name:'goat',lg:4,style:'rulesText2'},
    {name:'uski12',lg:4,style:'rulesText2'},
    {name:'shio',lg:4,style:'rulesText2'},
    //Helper
    {name:'Helper',lg:12,style:'rulesText'},
    {name:'RBFloat',lg:4,style:'rulesText2'},
    {name:'BeatsFever',lg:4,style:'rulesText2'},
    {name:'Jaeise',lg:4,style:'rulesText2'},
    {name:'Teejay',lg:4,style:'rulesText2'},
    {name:'Khaigon',lg:4,style:'rulesText2'},
    {name:'Yukoris',lg:4,style:'rulesText2'},
    //Builder
    {name:'Builder',lg:12,style:'rulesText'},
    {name:'lemon',lg:4,style:'rulesText2'},
    {name:'smallbrainTH0Ts',lg:4,style:'rulesText2'},
    {name:'MRCSTY',lg:4,style:'rulesText2'},
    {name:'woahehe',lg:4,style:'rulesText2'},
    {name:'OHIO',lg:4,style:'rulesText2'},
    {name:'UpinIpin',lg:4,style:'rulesText2'},
]

const VoteScreen = () => {
    return(
        <div>
            <Grid container style={{backgroundColor:'white'}}>
                <div style={{minHeight:'20vh',width:'100vw',backgroundColor:'white'}}/>
                <div class='background2' >   
                    <Grid 
                        container item xs={12} justify='center' alignItems='flex-start' 
                    >
                        <div id='titleText'>
                            Team
                        </div> 
                    </Grid>
                </div>

                <Grid 
                    container 
                    item xs={12} 
                    style={{height:'30vh'}} 
                    alignItems='center'
                    justify='center'
                >
                    <div id='introTitleText'>
                        They are the lovely team that has built up today's PlanetSG
                    </div>
                </Grid>

                <Grid container>
                    {
                        Staff.map((item)=>(
                            <Grid container item xs={12} lg={item.lg} justify='center' alignItems='center'>
                                <div id=''>
                                    <img src={item.img} alt={item.name}/>
                                </div>
                                <div id={item.style}>
                                    {item.name}
                                </div>
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
