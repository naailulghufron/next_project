import { createTheme, AppBar, Container, ThemeProvider, Toolbar, Typography } from '@material-ui/core'
import { green } from '@material-ui/core/colors'
import Head from 'next/head'
import React from 'react'
import useStyles from '../utils/styles'



export default function Layout({children}) {
    const theme = createTheme({
        palette: {
            primary: {
                main: green[500],
            },
            secondary: {
                main: '#f44336',
            },
        },
    })
    
    const classes = useStyles()
    return (
        <div>
            <Head>
                <title>Next Projet</title>
            </Head>

            <ThemeProvider theme={theme}>
                <AppBar position="static" className={classes.navbar}>
                <Toolbar>
                    <Typography>Next Project</Typography>
                </Toolbar>
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
