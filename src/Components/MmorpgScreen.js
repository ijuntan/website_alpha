import React from 'react';
import {Grid, Typography,CardMedia,Card} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Footer from './Footer';
import '../PageStyling.css';

const useStyles = makeStyles((theme) => ({
card:{
    height:'100vh',
    backgroundColor:'white',
    alignItems:"center",
    display:'flex',
    borderStyle:'solid solid none',
    borderColor:'black',
},
}));



function MmorpgScreen(){
    const classes = useStyles();
    return(
        <div class='background2'>  
            <Grid container>
                <Grid xs={12} style={{ minHeight: '65vh'}}>   
                    <Typography class='caption2'>MMORPG</Typography>
                </Grid>
                
                <Grid container xs={12} spacing={2}>
                    
                    <Grid item xs={12} sm={9}>
                        <Card className={classes.card} style={{marginLeft:20}} >                 
                            
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Card className={classes.card} > 
                            
                        </Card>
                    </Grid>
                    
                </Grid>

                <Grid xs={12}> 
                    <Footer/>
                </Grid>
            </Grid>
        </div>
    )
}


export default MmorpgScreen;