import React from 'react';
import {Grid,Box} from '@material-ui/core';
import '../PageStyling.css';
import './MnS.css'

function MmorpgScreen() {
    return(
        <div>
            <Grid container>
                <Grid container class='background2' >   
                    <Grid 
                        container item xs={12} justify='center' alignItems='flex-end' 
                        style={{ minHeight: '20vh'}}
                    >
                        <div id='bigText'>
                            MMORPG
                        </div> 
                    </Grid>
                    <Grid 
                        container item xs={12} justify='center' alignItems='flex-start' 
                        style={{ minHeight: '25vh'}}
                    >
                        <div class='introText'>
                            Welcome to Asia's first mmorpg server!
                        </div>
                    </Grid>

                    <Grid container>
                        <Grid className='castle' item xs={2}>
                            <Box />
                        </Grid>

                        <Grid item xs={3}></Grid>

                        <Grid className='castle' item xs={2}>
                            <Box />
                        </Grid>

                        <Grid item xs={3}></Grid>

                        <Grid className='castle' item xs={2}>
                            <Box />
                        </Grid>
                    </Grid>
                </Grid>

                <Grid container item xs={12} style={{height:'100vh',backgroundColor:'white'}}>
                    <div>
                    </div>
                </Grid>

            </Grid>
        </div>
    )
}

export default MmorpgScreen;