import { createTheme, AppBar, Container, ThemeProvider, Toolbar, Typography, Link } from '@material-ui/core'
import { green } from '@material-ui/core/colors'
import Head from 'next/head'
import React from 'react'
import useStyles from '../utils/styles'
import NextLink from 'next/link';



export default function Layout({children}) {
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
    
    const classes = useStyles()
    return (
        <div>
            <Head>
                <title>Next Project</title>
            </Head>

            <ThemeProvider theme={theme}>
                <AppBar position="static" className={classes.navbar}>
                <Toolbar>
                    <NextLink href="/" passHref>
                        <Link>
                            <Typography>Next Project</Typography>
                        </Link>
                    </NextLink>
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
