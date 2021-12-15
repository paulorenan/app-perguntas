import React, {useContext, useState} from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/system';
import { makeStyles } from '@material-ui/styles';
import Header from '../components/Header';
import { Container, CssBaseline, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MyContext from '../context';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

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
  link: {
    color: 'black',
    marginTop: '10px',
  },
});

function Home() {
  const { setQuantidade, quantidade, storage } = useContext(MyContext);
  const [max, setMax] = useState(false);
  const [min, setMin] = useState(false);
  const classes = useStyles();
  const navigate = useNavigate();
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

  const onClick = () => {
    setMax(false);
    setMin(false);
    if (quantidade > 40) {
      setMax(true);
    } else if (quantidade < 1) {
      setMin(true);
    } else {
      navigate('/game');
    }
  }


  return (
    <ThemeProvider theme={theme}>
      <Box className={classes.fullPage}>
        <Header />
        <Container maxWidth="sm">
          <CssBaseline />
          <Box className={classes.card}>
            <h1>Bem vindo ao jogo de Perguntas</h1>
            <h2>Selecione a quantidade de perguntas</h2>
            <TextField
              id="outlined-number"
              label="Quantidade"
              type="number"
              min="1"
              max="40"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(e) => setQuantidade(e.target.value)}
            />
            {max && <p style={{color: 'red'}}>Quantidade máxima é 40</p>}
            {min && <p style={{color: 'red'}}>Quantidade mínima é 1</p>}
            <Button 
              variant="contained"
              color="primary"
              style={{marginTop: '20px'}}
              onClick={onClick}>
              Continuar
            </Button>
            {storage.length > 0 && <Typography ariant="body2" color="text.secondary" align="center" style={{marginTop: '20px'}}>
              <Link to="/relatorio" className={classes.link}>
                Ver relatório anterior.
              </Link>
              </Typography>}
            </Box>
        </Container>
      </Box>
    </ThemeProvider>
  )
}

export default Home
