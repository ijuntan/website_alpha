import React from 'react';
import {Grid} from '@material-ui/core';
import './RnT.css';
import '../PageStyling.css';


const text = [
    {
        text:'1. Do not harass players or attempt to bully them off the server.',
        text2:`A player saying something mean every now and then is not harassment, you as a player can use the 
        /ignore add <username> feature to not have to listen to it. If the player continues to work around this 
        ignore to bully you, then it becomes harassment. PVP callouts in PVP chat are not harassment.`
    },
    {
        text:'2. Do not misuse channels beyond their intended function.',
        text2:` An occasional “funny comment” or “quip” in for example Trade chat is fine, but you are not to derail 
        channels for a purpose they are not intended. Do not spill or create drama in public chats, or engage in 
        excessive arguments that could be done in private message.`
    },
    {
        text:'3. Do not “Doxx” players, or reveal private information on the server.',
        text2:` Doxxing players is the intentional revelation of their real-life name, home address, or information 
        that could reasonably lead to their real-life identity being revealed. Revealing information that is already 
        known in the community, or easily google-able is not Doxxing.`
    },
    {
        text:'4. Do not use skins or builds that are clearly meant to evoke an erotic or racist sentiment.',
        text2:``
    },
    {
        text:'5. Respect the space and place of other roleplayers without forcing yourself into it.',
        text2:` Ask before forcing yourself into a scene, and do not engage in OOC actions on the sidelines that 
        make concentrating on the roleplay harder.`
    },
    {
        text:'6. Do not engage in inappropriate roleplay in public or with minors.',
        text2:` **Do not engage in excessively disgusting roleplay, excessively vulgar roleplay, meta-roleplay, 
        god-roleplay, or any other such mechanics of fail-roleplay.`
    },
    {
        text:'7. Do not use cheats, glitches, hacks, or modified clients to your advantage (including player radar!).',
        text2:`Some mods are allowed, always double-check with staff before using one.`
    },
    {
        text:`8. The use of Autoclickers or Macros is not allowed, including Keyboard/Mouse features that 
        are meant to give an edge during PVP are not allowed.`,
        text2:` The use of hacks or clients that give an edge during PVP are also not allowed.`
    },
    {
        text:`9. Anything that is seen to cause lag on the server is not allowed, and will be removed by staff 
        (this may also involve redstone machines).`,
        text2:` If you are unsure whether something causes lag, consult with staff.`
    },
    {
        text:'10. We do not force you to respect our staff, but we ask that you are patient and cordial with our Staff.',
        text2:` If a Staff member mistreats you, make a complaint on the discord under support ticket session. Do not 
        impersonate staff, waste their time, or backseat moderate.`
    },
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
                            Rules
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
                        Follow the fucking rules!
                    </div>
                </Grid>

                <Grid container style={{backgroundColor:'white'}} spacing={8}>
                    {
                        text.map((item)=>(
                            <Grid container item xs={12} justify='center' alignItems='center'  >
                                <div id='rulesText'>
                                    {item.text}
                                </div>
                                <div id='rulesText2'>
                                    {item.text2}
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
