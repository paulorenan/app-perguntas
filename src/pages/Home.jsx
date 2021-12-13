import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/system';
import { makeStyles } from '@material-ui/styles';
import Header from '../components/Header';

const useStyles = makeStyles({
  fullPage: {
    height: '100vh',
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: 'linear-gradient(to right, #f6d365, #fda085)',
    paddingTop: '0',
  },
});

function Home() {
  const classes = useStyles();
  const theme = createTheme({
    palette: {
      primary: {
        main: '#00bcd4',
      },
      secondary: {
        main: '#f50057',
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Box className={classes.fullPage}>
        <Header />
      </Box>
    </ThemeProvider>
  )
}

export default Home
