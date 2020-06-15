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

const drawerWidth = '40vw';

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
  button:{
    color:'white',
    width:'100%',
    height:'100%',
    "&:hover": {
      backgroundColor: 'transparent',
      color: 'blue',
      textShadow: '0 4px gray'
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
  },
  listText:{
    fontSize:'2.5vh'
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
  const [headerStyle, setHeaderStyle] = useState("header");
  const [open,setOpen] = useState(false);
  const [openModes,setOpenModes] = useState(false);
  const [openAbout,setOpenAbout] = useState(false);

  const listenScrollEvent = (event) => {
    if (window.scrollY < 300) {
      return setHeaderStyle("header")
    } 
    else {
      return setHeaderStyle("header2")
    } 
  }
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
  });

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const handleDrawerModes = () => {
    setOpen(!open);
    setOpenModes(!openModes)
  };

  const handleDrawerAbout = () => {
    setOpen(!open);
    setOpenAbout(!openAbout)
  };

  const handleOpenModes = () => {
    setOpenModes(!openModes)
  }

  const handleOpenAbout = () => {
    setOpenAbout(!openAbout)
  }

    return (
        <React.Fragment>
          <CssBaseline />
            <AppBar style={{backgroundColor:'#99ccff'}}>
              <Toolbar style={{padding:0}}>
              <Hidden mdUp implementation="css">
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
                      <ListItemText>
                        <div className={classes.listText}>
                          Home
                        </div>
                      </ListItemText>
                  </ListItem>

                  <ListItem button onClick={handleOpenModes}>
                      <ListItemText>
                        <div className={classes.listText}>
                          Modes
                        </div>
                      </ListItemText>
                  </ListItem>
                  {
                  openModes===true
                  ?
                  <div>
                    <ListItem button display={openModes} onClick={handleDrawerModes} component={Link} to='/mmorpg'>
                        <ListItemText>
                          <div className={classes.listItemText}>
                            MMORPG
                          </div>
                        </ListItemText>
                    </ListItem>

                    <ListItem button display={openModes} onClick={handleDrawerModes} component={Link} to='/survival'>
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
                      <ListItemText>
                        <div className={classes.listText}>
                          Vote
                        </div>
                      </ListItemText>
                  </ListItem>

                  <a href='https://discord.gg/7nF8X9' 
                    target='_blank'  
                    rel='noopener  noreferrer' 
                    style={{textDecoration:'none',width:'100%'}}
                  >
                    <ListItem button >
                        <ListItemText style={{color:'black'}}>
                          <div className={classes.listText}>
                            Discord
                          </div>
                        </ListItemText>
                    </ListItem>
                  </a>

                  <a href='https://mcplanetsg.craftingstore.net/' 
                    target='_blank'  
                    rel='noopener  noreferrer' 
                    style={{textDecoration:'none',width:'100%'}}
                  >
                    <ListItem button >
                        <ListItemText style={{color:'black'}}>
                          <div className={classes.listText}>
                            Shop
                          </div>
                        </ListItemText>
                    </ListItem>
                  </a>

                  <ListItem button onClick={handleOpenAbout}>
                      <ListItemText>
                        <div className={classes.listText}>
                          About
                        </div>
                      </ListItemText>
                  </ListItem>
                  {
                  openAbout===true
                  ?
                  <div>
                    <ListItem button display={openAbout} onClick={handleDrawerAbout} component={Link} to='/rules'>
                        <ListItemText >
                          <div className={classes.listItemText}>
                            Rules
                          </div>
                        </ListItemText>
                    </ListItem>

                    <ListItem button display={openAbout} onClick={handleDrawerAbout} component={Link} to='/team'>
                      <ListItemText >
                        <div className={classes.listItemText}>
                          Team
                        </div>
                      </ListItemText>
                    </ListItem>
                  </div>
                  :
                  null
                  }
                  
                  </Drawer>
                </Hidden>

                <div className={headerStyle} >
                    <Button className={classes.button} component={Link} to='/home' disableRipple >
                      <div className={classes.menuFont}  >
                        Home
                      </div>
                    </Button>
                </div>

                <div className={headerStyle} >
                    <Button 
                        className={classes.button} 
                        {...bindHover(popupStateFeatures)}
                        disableRipple
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

                <div className={headerStyle} >
                  <Button className={classes.button}  component={Link} to='/vote' disableRipple>
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

                <div className={headerStyle} justify='center' >
                  <a href='https://discord.gg/7nF8X9' 
                    target='_blank'  
                    rel='noopener  noreferrer' 
                    style={{textDecoration:'none',width:'100%'}}
                  >
                    <Button className={classes.button} disableRipple>
                      <div className={classes.menuFont}>
                        Discord
                      </div>
                    </Button>
                  </a>
                </div>

                <div className={headerStyle} justify='center' >
                  <a href='https://mcplanetsg.craftingstore.net/' 
                    target='_blank'  
                    rel='noopener  noreferrer' 
                    style={{textDecoration:'none',width:'100%'}}
                  >
                    <Button className={classes.button} disableRipple>
                      <div className={classes.menuFont}>
                        Shop
                      </div>
                    </Button>
                  </a>
                </div> 

                <div className={headerStyle} >
                  <Button 
                    className={classes.button}
                    {...bindHover(popupStateAbout)}
                    disableRipple
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
                    <MenuItem className={classes.menu} component={Link} to='/rules'>Rules</MenuItem>
                    <MenuItem className={classes.menu} component={Link} to='/team'>Team</MenuItem>
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
