import { createTheme, AppBar, Container, ThemeProvider, Toolbar, Typography, Link, List, ListItem, Divider, Button, SwipeableDrawer, Drawer, IconButton, Switch } from '@material-ui/core'
import clsx from 'clsx';
import MenuIcon from '@material-ui/icons/Menu';
import { green } from '@material-ui/core/colors'
import Head from 'next/head'
import React, { useContext } from 'react'
import useStyles from '../utils/styles'
import NextLink from 'next/link';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Dvr, SettingsApplications } from '@material-ui/icons';
import {Store} from '../utils/Store'
import Cookies from 'js-cookie';

export default function Layout({children}) {
    const {state, dispatch} = useContext(Store)
    const {darkMode} = state
    const drawerWidth = 240;
    const theme = createTheme({
        palette: {
            type: darkMode ? 'dark' : 'light',
            typography: {
                h1: {
                    fontSize: '1.6rem',
                    fontWeight: 400,
                    margin: '1rem 0',
                },
                h2: {
                    fontSize: '1.4rem',
                    fontWeight: 400,
                    margin: '1rem 0',
                },
            },
            primary: {
                main: green[500],
            },
            secondary: {
                main: '#f44336',
            },
        },
    })
    
    const classes = useStyles((theme) => ({
        root: {
            display: 'flex',
        },
        appBar: {
            transition: theme.transitions.create(['margin', 'width'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
        },
        appBarShift: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
            transition: theme.transitions.create(['margin', 'width'], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        hide: {
            display: 'none',
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
            padding: theme.spacing(0, 1),
            // necessary for content to be below app bar
            ...theme.mixins.toolbar,
            justifyContent: 'flex-end',
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            marginLeft: -drawerWidth,
        },
        contentShift: {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
                marginLeft: 0,
        },
    }))
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const menuModuleName = ['FA Register', 'FA Identification', 'FA Validation','FA Ownership', 'FA Approval']
    const menuSetupName = ['Basic Setup', 'Module Setup']
    const darkModeChangeHandler = () => {
        dispatch({ type: darkMode ? 'DARK_MODE_OFF' : 'DARK_MODE_ON'})
        const newDarkMode = !darkMode
        Cookies.set('darkMode', newDarkMode ? 'ON' : 'OFF')
    }
    return (
        <div className={classes.root}>
            <Head>
                <title>Next Project</title>
            </Head>
            <CssBaseline />

            <ThemeProvider theme={theme}>
                <AppBar position="static" className={clsx(classes.navbar, {
                [classes.appBarShift]: open,
                })}>
                    <Toolbar>
                        <IconButton 
                            color="primary"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            className={clsx(classes.menuButton, open && classes.hide)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <NextLink href="/" passHref>
                            <Link>
                                <Typography>Next Project</Typography>
                            </Link>
                        </NextLink>
                        <div className={classes.grow}></div>
                        {/* <div> */}
                            <Switch checked={darkMode} onChange={darkModeChangeHandler}></Switch>
                            <NextLink href="/api/hello" passHref>
                                <Link>
                                    <Typography>Hello</Typography>
                                </Link>
                            </NextLink>
                            <NextLink href="/setup/basic/department" passHref>
                                <Link>
                                    <Typography>Department</Typography>
                                </Link>
                            </NextLink>
                        {/* </div> */}
                    </Toolbar>
                </AppBar>
                
                <Drawer
                    className={classes.drawer}
                    variant="persistent"
                    anchor="left"
                    open={open}
                    classes={{
                    paper: classes.drawerPaper,
                    }}
                >
                    <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                    </div>
                    <Divider />
                    <List>
                    {menuModuleName.map((text, index) => (
                        <ListItem button key={text} component="a" href={text.toLowerCase().replace(/\s/g, '-')}>
                            <ListItemIcon>{index % 2 === 0 ? <Dvr /> : <Dvr />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                    </List>
                    <Divider />
                    <List>
                    {menuSetupName.map((text, index) => (
                        <ListItem button key={text} component="a" href={text.toLowerCase().replace(/\s/g, '-')}>
                        <ListItemIcon>{index % 2 === 0 ? <SettingsApplications /> : <SettingsApplications />}</ListItemIcon>
                        <ListItemText primary={text} />
                        </ListItem>
                    ))}
                    </List>
                </Drawer>

                <main
                    className={clsx(classes.content, {
                    [classes.contentShift]: open,
                    })}
                ></main>

                <Container className={classes.main}>
                    {children}
                </Container>

                <footer className={classes.footer}>
                    <Typography>All rights reserved. Next Project.</Typography>
                </footer> 
            </ThemeProvider>

            
        </div>
    )
}
