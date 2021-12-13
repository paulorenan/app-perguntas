import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/system';
import { makeStyles } from '@material-ui/styles';
import Header from '../components/Header';
import { Container, CssBaseline } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

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
    maxWidth: '450px',
    margin: 'auto',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
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
        <Container maxWidth="sm">
          <CssBaseline />
          <Box className={classes.card}>
            <h1>Selecione a quantidade de perguntas</h1>
            <TextField
              id="outlined-number"
              label="Quantidade"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <Button variant="contained" color="primary" style={{marginTop: '20px'}}>
              Continuar
            </Button>
            </Box>
        </Container>
      </Box>
    </ThemeProvider>
  )
}

export default Home
