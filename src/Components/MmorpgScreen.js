import React from 'react';
import {Grid, Typography,CardMedia,Card, CardContent} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import '../PageStyling.css';

const useStyles = makeStyles((theme) => ({
card:{
    height:'100vh',
    backgroundColor:'white',
    display:'flex',
    textAlign:'center',
    justifyContent:'center',
    borderStyle:'solid solid none',
    borderColor:'black',
},
}));


function MmorpgScreen() {
    const classes = useStyles();

    return(
        <div class='background3'>
            <Grid container>
                <Grid xs={12} style={{ minHeight: '65vh'}} >   
                    <Typography class='caption2' style={{marginBottom:0,textShadow: '-5px 0 black, 0 5px black, 5px 0 black, 0 -5px black'}}>MMORPG</Typography>
                    <Typography class='caption2' style={{fontSize:'40px',fontWeight:'lighter'}}>Asia's first MMORPG ever! <br/> Come and join with your friends!</Typography>
                </Grid>
                
                <Grid container xs={12} spacing={2} >
                    <Grid item xs={12} > 
                        <Card className={classes.card} style={{marginLeft:20}} > 
                            <CardContent >
                                <Typography style={{fontFamily:'MinecraftTen',fontSize:40}}>Welcome to the land of </Typography>
                                <hr style={{margin: '30px -20px 20px',width:'100vw'}}/>
                                
                                <Typography style={{fontFamily:'MinecraftTen',fontSize:80,color:'gray'}}>What To Do?</Typography>

                                <CardMedia>
                                </CardMedia>

                            </CardContent>   
                        </Card>
                    </Grid>
                </Grid>

            </Grid>
        </div>
    )
}

export default MmorpgScreen;