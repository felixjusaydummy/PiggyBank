import React from 'react';
import { useMediaQuery } from 'react-responsive'
import { Container, CssBaseline, Grid, Paper, Button } from '@material-ui/core';
 
const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 })
  return isDesktop ? children : null
}
const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
  return isTablet ? children : null
}
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  return isMobile ? children : null
}
// const Default = ({ children }) => {
//   const isNotMobile = useMediaQuery({ minWidth: 768 })
//   return isNotMobile ? children : null
// }
 
const buildDesktopView = (template, titlePanel, generalPanel, detailPanel, footerPanel ) => {
    let mainpage = null
    if (template == "default"){
        mainpage = (
            <Container component="main" maxWidth="md">
                <CssBaseline />
        
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        {titlePanel}
                    </Grid>
                    <Grid item xs={6}>
                        {generalPanel}
                    </Grid>
                    <Grid item xs={6}>
                        {detailPanel}
                    </Grid>
                    <Grid item xs={12}>
                        {footerPanel}
                    </Grid>
                </Grid>
            </Container>
          );
    }else if (template == "template1"){
        mainpage = (
            <Container component="main" maxWidth="md">
                <CssBaseline />

                <Grid container spacing={3} >
                    <Grid item xs={12}>
                        {titlePanel}
                    </Grid>
                    <Grid item xs={3}>
                        {generalPanel}
                    </Grid>
                    <Grid item xs={9}>
                        {detailPanel}
                    </Grid>
                    <Grid item xs={12}>
                        {footerPanel}
                    </Grid>
                </Grid>
            </Container>
        );
    }
    return mainpage
}


const buildMobileView = (template, titlePanel, generalPanel, detailPanel, footerPanel ) => {
    let mainpage = null
    if (template == "default"){
        mainpage = (
            <Container component="main" maxWidth="lg" > 
                <CssBaseline />
        
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        {titlePanel}
                    </Grid>
                    <Grid item xs={12}>
                        {generalPanel}
                    </Grid>
                    <Grid item xs={12} >
                        {detailPanel}
                    </Grid>
                    <Grid item xs={12}>
                        {footerPanel}
                    </Grid>
                </Grid>
            </Container>
          );
    }else if (template == "template1"){
        mainpage = (
            <Container component="main" maxWidth="lg" >
                <CssBaseline />

                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        {titlePanel}
                    </Grid>
                    <Grid item xs={12}>
                    <Button>
                        {generalPanel}
                    </Button>
                    </Grid>
                    <Grid item xs={12}  >
                        {detailPanel}
                    </Grid>
                    <Grid item xs={12}>
                        {footerPanel}
                    </Grid>
                </Grid>
            </Container>
        );
    }
    return mainpage
}

export const getView = (template, titlePanel, generalPanel, detailPanel, footerPanel) => (
  <div>
    <Desktop>{buildDesktopView(template, titlePanel, generalPanel, detailPanel, footerPanel)}</Desktop>
    <Tablet>{buildDesktopView(template, titlePanel, generalPanel, detailPanel, footerPanel)}</Tablet>
    <Mobile>{buildMobileView(template, titlePanel, generalPanel, detailPanel, footerPanel)}</Mobile>
  </div>
)
