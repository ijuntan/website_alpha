import React from 'react';
import { AppBar,Toolbar,Typography,CssBaseline,Button,Grid,
        MenuItem,useScrollTrigger,Zoom,Fab,Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { usePopupState,bindHover,bindPopover } from 'material-ui-popup-state/hooks';
import Popover from 'material-ui-popup-state/HoverPopover';
import { Link } from 'react-router-dom';
import '../PageStyling.css';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  header:{
    textAlign:'center',
    height:100,
  },
  bgcolor:{
    backgroundColor:'#286086'
  },
  button:{
    color:'white',
    width:'100%',
    height:100,
  },
  menu:{
    backgroundColor:'white',
    color:'gray',
    justifyContent:'left',
    paddingTop:'15px',
    paddingBottom:'15px',
    fontFamily:'MinecraftTen'
  }
}));

function ScrollTop(props) {
  const { children } = props;
  const classes = useStyles();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}


export default function StaticHeader(props) {
    const classes = useStyles();
    const popupStateFeatures = usePopupState({ variant: 'popover', popupId: 'featuresMenu' });
    const popupStateAbout = usePopupState({ variant: 'popover', popupId: 'aboutMenu' });
    return (
        <React.Fragment>
        <CssBaseline />
        <AppBar className={classes.bgcolor}>
            <Toolbar>
                <Grid xs={4} spacing={0} className={classes.header}>
                    <Button className={classes.button} component={Link} to='/home'>
                        <Typography variant="h1" class='minecraftFont'>
                        Home
                        </Typography>
                    </Button>
                </Grid>
                <Divider orientation='vertical' flexItem/>
                <Grid xs={4} className={classes.header} >
                    <Button 
                        className={classes.button} 
                        {...bindHover(popupStateFeatures)}
                    >
                        <Typography variant="h1" class='minecraftFont' >
                        Features
                        </Typography>
                    </Button>
                    <Popover
                        {...bindPopover(popupStateFeatures)}
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
                        disableRestoreFocus
                        disableScrollLock
                        style={{'&:focus':{backgroundColor:'navy'}}}
                    >
                        <MenuItem className={classes.menu} component={Link} to='/custom-mobs'>Custom Mobs</MenuItem>
                        <MenuItem className={classes.menu} >Custom Enchants</MenuItem>
                        <MenuItem className={classes.menu} >Player Warps</MenuItem>
                    </Popover>
                </Grid>
                <Divider orientation='vertical' flexItem/>
                <Grid xs={4} spacing={0} className={classes.header}>
                  <Button className={classes.button}>
                      <Typography variant="h1" class='minecraftFont'>
                      Vote
                      </Typography>
                  </Button>
                </Grid>
                <Divider orientation='vertical' flexItem/>
                <Grid xs={4} spacing={0} className={classes.header}>
                  <Button 
                    className={classes.button}
                    {...bindHover(popupStateAbout)}
                  >
                      <Typography variant="h1" class='minecraftFont'>
                      About
                      </Typography>
                  </Button>
                  <Popover
                    {...bindPopover(popupStateAbout)}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                    transformOrigin={{ vertical: 'top', horizontal: 'center' }}
                    disableRestoreFocus
                    disableScrollLock
                  >
                    <MenuItem className={classes.menu} >Shop</MenuItem>
                    <MenuItem className={classes.menu} >Discord</MenuItem>
                    <MenuItem className={classes.menu} >Developer Team</MenuItem>
                  </Popover>
              </Grid>
            </Toolbar>
        </AppBar>
        <Toolbar id="back-to-top-anchor" />

        <ScrollTop {...props}>
            <Fab color="transparent" size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
            </Fab>
        </ScrollTop>
        </React.Fragment>
  );
}
