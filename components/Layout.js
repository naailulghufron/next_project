import { createTheme, AppBar, Container, ThemeProvider, Toolbar, Typography, Link, List, ListItem, Divider, Button, SwipeableDrawer, Drawer, IconButton } from '@material-ui/core'
import { green } from '@material-ui/core/colors'
import Head from 'next/head'
import React from 'react'
import useStyles from '../utils/styles'
import NextLink from 'next/link';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import CssBaseline from '@material-ui/core/CssBaseline';

export default function Layout({children}) {
    const drawerWidth = 240;
    const theme = createTheme({
        palette: {
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
    
    return (
        <div className={classes.root}>
            <Head>
                <title>Next Project</title>
            </Head>
            <CssBaseline />

            <ThemeProvider theme={theme}>
                <AppBar position="static" className={classes.navbar}>
                <Toolbar>
                    <NextLink href="/" passHref>
                        <Link>
                            <Typography>Next Project</Typography>
                        </Link>
                    </NextLink>
                    <div className={classes.grow}></div>
                    <NextLink href="/master/department" passHref>
                        <Link>
                            <Typography>Department</Typography>
                        </Link>
                    </NextLink>
                </Toolbar>
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
                    {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                        <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                        </ListItem>
                    ))}
                    </List>
                    <Divider />
                    <List>
                    {['All mail', 'Trash', 'Spam'].map((text, index) => (
                        <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                        </ListItem>
                    ))}
                    </List>
                </Drawer>
                {/* <Toolbar>
                    <NextLink href="/" passHref>
                        <Link>
                            <Typography>Next Project</Typography>
                        </Link>
                    </NextLink>
                    <div className={classes.grow}></div>
                    <NextLink href="/master/department" passHref>
                        <Link>
                            <Typography>Department</Typography>
                        </Link>
                    </NextLink>
                </Toolbar> */}
                </AppBar>

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
