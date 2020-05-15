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
},
}));



function VoteScreen(){
    const classes = useStyles();
    return(
        <div class='background2'>  
            <Grid container>
                <Grid xs={12} style={{ minHeight: '65vh'}}>   
                    <Typography class='caption2'>Voting</Typography>
                </Grid>
                
                <Grid xs={12}>
                    <Card className={classes.card} >                 
                        
                    </Card>
                </Grid>

                <Grid xs={12}> 
                    <Footer/>
                </Grid>
            </Grid>
        </div>
    )
}


export default VoteScreen;