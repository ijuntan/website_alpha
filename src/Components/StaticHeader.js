import React,{useEffect,useState} from 'react';
import { AppBar,Toolbar,CssBaseline,Button,Grid,Divider,ListItem,ListItemText,
        MenuItem,useScrollTrigger,Zoom,Fab,Drawer,IconButton,Hidden } from '@material-ui/core';
import MenuIcon  from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { makeStyles,useTheme } from '@material-ui/core/styles';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { usePopupState,bindHover,bindPopover } from 'material-ui-popup-state/hooks';
import Popover from 'material-ui-popup-state/HoverPopover';
import PSGlogo from '../Images/ww.jpg';
import { Link } from 'react-router-dom';
import '../PageStyling.css';

const drawerWidth = 150;

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  menu:{
    backgroundColor:'white',
    color:'gray',
    justifyContent:'center',
    paddingTop:'12px',
    paddingBottom:'12px',
    fontFamily:'Minecraft',
    width:'100%',
    fontSize:'1.2vw'
  },
  menuFont:{
    fontSize:'2.2vw',
    fontFamily:'MinecraftTen'
  },
  header:{
    textAlign:'center',
    backgroundColor:'#99ccff'
  },
  button:{
    color:'white',
    width:'100%',
    height:'100%',
    "&:hover": {
      backgroundColor: 'transparent'
    }
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth, 
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  listItemText:{
    paddingLeft:'2vh',
    fontSize:'2vh'
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
  const theme = useTheme();
  const popupStateFeatures = usePopupState({ variant: 'popover', popupId: 'featuresMenu' });
  const popupStateAbout = usePopupState({ variant: 'popover', popupId: 'aboutMenu' });
  const [headerWidth, setHeaderWidth] = useState("7.5vw");
  const [open,setOpen] = useState(false);
  const [openMMORPG,setOpenMMORPG] = useState(false);
  const [openSurvival,setOpenSurvival] = useState(false);
  const listenScrollEvent = () => {
      window.scrollY > 300
        ? setHeaderWidth("6vw")
        : setHeaderWidth("7.5vw")
    }
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent)
  })

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const handleOpenMMORPG = () => {
    setOpenMMORPG(!openMMORPG)
  }

  const handleOpenSurvival = () => {
    setOpenSurvival(!openSurvival)
  }

    return (
        <React.Fragment>
          <CssBaseline />
            <AppBar style={{backgroundColor:'#99ccff'}}>
              <Toolbar style={{padding:0}}>
              <Hidden smUp implementation="css">
                <IconButton
                  color="inherit"
                  onClick={handleDrawerToggle}
                  >
                    <MenuIcon />
                </IconButton>
                
                <Drawer
                    className={classes.drawer}
                    variant="temporary"
                    anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                    open={open}
                    onClose={handleDrawerToggle}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    ModalProps={{
                      keepMounted:true
                    }}
                    >
                    
                  <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerToggle}>
                      {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                  </div>

                  <Divider/>

                  <ListItem button component={ Link } to='/home'>
                      <ListItemText>Home</ListItemText>
                  </ListItem>

                  <ListItem button onClick={handleOpenMMORPG}>
                      <ListItemText>Modes</ListItemText>
                  </ListItem>
                  {
                  openMMORPG===true
                  ?
                  <div>
                    <ListItem button display={openMMORPG} component={Link} to='/mmorpg'>
                        <ListItemText>
                          <div className={classes.listItemText}>
                            MMORPG
                          </div>
                        </ListItemText>
                    </ListItem>

                    <ListItem button display={openMMORPG} component={Link} to='/survival'>
                      <ListItemText >
                        <div className={classes.listItemText}>
                          Survival
                        </div>
                      </ListItemText>
                    </ListItem>
                  </div>
                  :
                  null
                  }

                  <ListItem button component={ Link } to='/vote'>
                      <ListItemText>Vote</ListItemText>
                  </ListItem>

                  <a href='https://discord.gg/7nF8X9' 
                    target='_blank'  
                    rel='noopener  noreferrer' 
                    style={{textDecoration:'none',width:'100%'}}
                  >
                    <ListItem button >
                        <ListItemText style={{color:'black'}}>Discord</ListItemText>
                    </ListItem>
                  </a>

                  <a href='https://mcplanetsg.craftingstore.net/' 
                    target='_blank'  
                    rel='noopener  noreferrer' 
                    style={{textDecoration:'none',width:'100%'}}
                  >
                    <ListItem button >
                        <ListItemText style={{color:'black'}}>Shop</ListItemText>
                    </ListItem>
                  </a>

                  <ListItem button onClick={handleOpenSurvival}>
                      <ListItemText>About</ListItemText>
                  </ListItem>
                  {
                  openSurvival===true
                  ?
                  <div>
                    <ListItem button display={openSurvival}>
                        <ListItemText >
                          <div className={classes.listItemText}>
                            Rules
                          </div>
                        </ListItemText>
                    </ListItem>

                    <ListItem button display={openSurvival}>
                      <ListItemText >
                        <div className={classes.listItemText}>
                          Developer Team
                        </div>
                      </ListItemText>
                    </ListItem>
                  </div>
                  :
                  null
                  }
                  
                  </Drawer>
                </Hidden>

                <div class='header' style={{height:headerWidth}}>
                    <Button  className={classes.button} component={Link} to='/home' >
                      <div className={classes.menuFont} >
                        Home
                      </div>
                    </Button>
                </div>

                <div class='header' style={{height:headerWidth}}>
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
                </div>

                <div class='header' style={{height:headerWidth}}>
                  <Button className={classes.button} varian='raised' component={Link} to='/vote'>
                    <div className={classes.menuFont}>
                      Vote
                    </div>
                  </Button>
                </div>

                <Grid container justify='center' alignItems='center' component={Link} to='/map' target="_blank">
                  <img 
                      src={PSGlogo} 
                      alt='Planet SG logo' 
                      class='psgLogo'
                  />
                </Grid>

                <div class='header' justify='center' style={{height:headerWidth}}>
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
                </div>

                <div class='header' justify='center' style={{height:headerWidth}}>
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
                </div> 

                <div class='header' style={{height:headerWidth}}>
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
                </div>
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
