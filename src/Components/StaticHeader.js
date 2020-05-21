import React,{useState} from 'react';
import { AppBar,Toolbar,Typography,CssBaseline,Button,Grid,
        MenuItem,useScrollTrigger,Zoom,Fab,Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { usePopupState,bindHover,bindPopover } from 'material-ui-popup-state/hooks';
import Popover from 'material-ui-popup-state/HoverPopover';
import PSGlogo from '../Images/ww.jpg';
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
    justifyContent:'center',
    paddingTop:'12px',
    paddingBottom:'12px',
    fontFamily:'MinecraftTen',
    width:'190px',
    fontSize:'18px'
  },
  psglogo:{
    position:'absolute',
    paddingTop:70,
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
    const [color,setColor] = useState('gray');
    const classes = useStyles();
    const popupStateFeatures = usePopupState({ variant: 'popover', popupId: 'featuresMenu' });
    const popupStateAbout = usePopupState({ variant: 'popover', popupId: 'aboutMenu' });
    return (
        <React.Fragment>
        <CssBaseline />
        <AppBar style={{backgroundColor:'#286086'}}>
            <Toolbar>
                <Grid xs={2} spacing={0} className={classes.header} >
                    <Button className={classes.button} component={Link} to='/home' >
                        <Typography variant="h1" class='minecraftFont'>
                        Home
                        </Typography>
                    </Button>
                </Grid>

                <Divider orientation='vertical' flexItem/>

                <Grid xs={2} className={classes.header} >
                    <Button 
                        className={classes.button} 
                        {...bindHover(popupStateFeatures)}
                    >
                        <Typography variant="h1" class='minecraftFont' >
                        Servers
                        </Typography>
                    </Button>
                    <Popover
                        {...bindPopover(popupStateFeatures)}
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
                        disableRestoreFocus
                        disableScrollLock
                    >
                        <MenuItem className={classes.menu} component={Link} to='/mmorpg'>MMORPG</MenuItem>
                        <MenuItem className={classes.menu} component={Link} to='/survival'>Survival</MenuItem>
                    </Popover>
                </Grid>

                <Divider orientation='vertical' flexItem/>

                <Grid xs={2} spacing={0} className={classes.header}>
                  <Button className={classes.button} component={Link} to='/vote'>
                      <Typography variant="h1" class='minecraftFont' >
                      Vote
                      </Typography>
                  </Button>
                </Grid>

                <Divider orientation='vertical' flexItem/>

                <Grid xs={2} container justify='center' alignItems='center' display='flex'>
                  <img 
                      src={PSGlogo} 
                      alt='Planet SG logo' 
                      className={classes.psglogo}
                  />
                </Grid>

                <Divider orientation='vertical' flexItem/>

                <Grid xs={2} spacing={0} className={classes.header}>
                  <a href='https://discord.gg/7nF8X9' target='_blank'  rel='noopener  noreferrer' style={{textDecoration:'none'}}>
                    <Button className={classes.button}>
                        <Typography variant="h1" class='minecraftFont'>
                        Discord
                        </Typography>
                    </Button>
                  </a>
                </Grid>

                <Divider orientation='vertical' flexItem/>

                <Grid xs={2} spacing={0} className={classes.header}>
                  <a href='https://mcplanetsg.craftingstore.net/' target='_blank' rel='noopener  noreferrer' style={{textDecoration:'none'}}>
                    <Button className={classes.button}>
                        <Typography variant="h1" class='minecraftFont'>
                        Shop
                        </Typography>
                    </Button>
                  </a>
                </Grid>
                

                <Divider orientation='vertical' flexItem/>

                <Grid xs={2} spacing={0} className={classes.header}>
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
                    <MenuItem className={classes.menu} >Rules</MenuItem>
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
