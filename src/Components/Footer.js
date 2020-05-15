import React from 'react';
import {Card, CardContent, makeStyles} from '@material-ui/core';
import '../PageStyling.css';

const useStyles = makeStyles((theme) => ({
    footer:{
        fontFamily: 'sans-serif',
        fontWeight: 'bolder',
        backgroundColor: '#696969',
        textAlign: 'left',
        color: 'white',
    },
    }));

function Footer() {
    const classes = useStyles();
    return(
        <div>
            <Card className={classes.footer}>
                <CardContent>
                    <p>Directed by juntan</p>
                </CardContent>
            </Card>
        </div>
    )
}

export default Footer;