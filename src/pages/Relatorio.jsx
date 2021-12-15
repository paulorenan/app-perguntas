import React, {useContext, useEffect, useState} from 'react'
import Header from '../components/Header';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/system';
import { makeStyles } from '@material-ui/styles';
import { getRelatorio } from '../services/storage';
import {decode} from 'html-entities'
import { CssBaseline, Button, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import RightIcon from '@mui/icons-material/Check';
import WrongIcon from '@mui/icons-material/Clear';

const useStyles = makeStyles({
  fullPage: {
    height: 'auto',
    width: '100%',
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
    maxWidth: '550px',
    margin: 'auto',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
  },
  grid: {
    padding: '20px',
  },
  cardRelatorio: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '550px',
    margin: 'auto',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    marginTop: '85px',
  },
});

function Relatorio() {
  const [perguntas, setPerguntas] = useState([]);
  const [score, setScore] = useState(0);
  const navigate = useNavigate();
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
    const relatorio = getRelatorio();
    if (relatorio) {
      setPerguntas(relatorio);
    }
    const score = localStorage.getItem('score');
    if (score) {
      setScore(score);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box className={classes.fullPage}>
        <Header />
        {perguntas.length === 0 ? 
          <Box className={classes.cardRelatorio}>
            <h1>Não tem Relatório</h1>
            <Button variant="contained" color="primary" onClick={() => navigate('/home')}>
              Voltar
            </Button>
          </Box>
        : 
        <>
          <Box className={classes.cardRelatorio}>
            <h1 style={{marginBottom: '0'}}>Relatório</h1>
            <p>Voce acertou {score} de {perguntas.length} {perguntas.length > 1 ? 'perguntas' : 'pergunta'}.</p>
          </Box>
          <Grid container spacing={2} className={classes.grid}>
          <CssBaseline />
            {perguntas.map((pergunta, index) => (
              <Grid item xs={12} lg={4} md={4} sm={6} key={index}>
                <CssBaseline />
                <Box className={classes.card}>
                  <h1>Pergunta {index + 1} de {perguntas.length}</h1>
                  <p>{decode(pergunta.pergunta)}</p>
                  {pergunta.alternativa.map((alt, index) => {
              if(alt === pergunta.correta) {
                return (
                  <Button
                    key={index}
                    disabled='true'
                    variant="contained"
                    color="primary"
                    fullWidth
                    style={{marginBottom: '10px', backgroundColor: '#4caf50', color: 'black' }}
                    startIcon={alt === pergunta.resposta && <RightIcon />}
                  >
                    {decode(alt)}
                  </Button>
                )
              } else {
                return (
                  <Button
                    key={index}
                    disabled='true'
                    variant="contained"
                    color="primary"
                    fullWidth
                    style={{marginBottom: '10px', backgroundColor: '#f44336', color: 'black',}}
                    startIcon={alt === pergunta.resposta && <WrongIcon />}
                  >
                    {decode(alt)}
                  </Button>
                )
              }
              }
            )}
                </Box>
              </Grid>
            ))}
          </Grid>
          <Button variant="contained" color="primary" onClick={() => navigate('/home')} style={{marginBottom: '30px'}}>
            Voltar
          </Button>
        </>
        }
      </Box>
    </ThemeProvider>
  )
}

export default Relatorio
