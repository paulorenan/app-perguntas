import React, {useContext, useEffect} from 'react'
import Header from '../components/Header';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/system';
import { makeStyles } from '@material-ui/styles';
import MyContext from '../context';
import Confirmação from '../components/Confirmação';
import { getQuestions } from '../services';

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
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    maxWidth: '550px',
    margin: 'auto',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
  },
});

function Game() {
  const { quantidade, setQuestions } = useContext(MyContext);
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

  useEffect(() => {
    getQuestions(quantidade).then(response => {
      setQuestions(response);
    });
  }, [quantidade, setQuestions]);

  return (
    <ThemeProvider theme={theme}>
      <Box className={classes.fullPage}>
        <Header />
        <Confirmação />
      </Box>
    </ThemeProvider>
  )
}

export default Game;
