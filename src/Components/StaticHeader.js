import React,{useEffect,useState} from 'react';
import { AppBar,Toolbar,CssBaseline,Button,Grid,
        MenuItem,useScrollTrigger,Zoom,Fab } from '@material-ui/core';
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
    backgroundColor:'#286086'
  },
  button:{
    color:'white',
    width:'100%',
    height:'100%',
  },
  menu:{
    backgroundColor:'white',
    color:'gray',
    justifyContent:'center',
    paddingTop:'12px',
    paddingBottom:'12px',
    fontFamily:'Minecraft',
    width:'100%',
    maxWidth:'1000px',
    fontSize:'1.2vw'
  },
  menuFont:{
    fontSize:'2.2vw',
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
    const [headerWidth, setHeaderWidth] = useState("7.5vw")
    const listenScrollEvent = () => {
        window.scrollY > 300
          ? setHeaderWidth("6vw")
          : setHeaderWidth("7.5vw")
      }
    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
      window.addEventListener("scroll", listenScrollEvent)
  })

    return (
        <React.Fragment>
          <CssBaseline />
            <AppBar style={{backgroundColor:'#286086'}}>
                <Toolbar style={{padding:0}}>
                    <Grid container className={classes.header} style={{height:headerWidth}}>
                        <Button className={classes.button} component={Link} to='/home' >
                          <div className={classes.menuFont}>
                            Guides
                          </div>
                        </Button>
                    </Grid>

                    <Grid container className={classes.header} >
                        <Button 
                            className={classes.button} 
                            {...bindHover(popupStateFeatures)}
                        >
                          <div className={classes.menuFont}>
                            Modes
                          </div>
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

                    <Grid container className={classes.header}>
                      <Button className={classes.button} component={Link} to='/vote'>
                        <div className={classes.menuFont}>
                          Vote
                        </div>
                      </Button>
                    </Grid>

                    <Grid container justify='center' alignItems='center' component={Link} to='/map' target="_blank">
                      <img 
                          src={PSGlogo} 
                          alt='Planet SG logo' 
                          class='psgLogo'
                      />
                    </Grid>

                    <Grid container className={classes.header} justify='center'>
                      <a href='https://discord.gg/7nF8X9' 
                        target='_blank'  
                        rel='noopener  noreferrer' 
                        style={{textDecoration:'none',width:'100%'}}
                      >
                        <Button className={classes.button}>
                          <div className={classes.menuFont}>
                            Discord
                          </div>
                        </Button>
                      </a>
                    </Grid>

                    <Grid container className={classes.header} justify='center'>
                      <a href='https://mcplanetsg.craftingstore.net/' 
                        target='_blank'  
                        rel='noopener  noreferrer' 
                        style={{textDecoration:'none',width:'100%'}}
                      >
                        <Button className={classes.button}>
                          <div className={classes.menuFont}>
                            Shop
                          </div>
                        </Button>
                      </a>
                    </Grid> 

                    <Grid container className={classes.header}>
                      <Button 
                        className={classes.button}
                        {...bindHover(popupStateAbout)}
                        onClick
                      >
                        <div className={classes.menuFont}>
                            About
                        </div>
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
