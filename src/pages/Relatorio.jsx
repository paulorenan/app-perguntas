import React, {useContext, useEffect, useState} from 'react'
import Header from '../components/Header';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/system';
import { makeStyles } from '@material-ui/styles';
import { getRelatorio } from '../services/storage';
import {decode} from 'html-entities'
import { CssBaseline, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles({
  fullPage: {
    height: 'auto',
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
    // alignItems: 'center',
    // justifyContent: 'center',
    width: '100%',
    maxWidth: '550px',
    margin: 'auto',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    marginTop: '90px',
  },
  full: {
    height: '100vh',
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: 'linear-gradient(to right, #f6d365, #fda085)',
    paddingTop: '0',
  }
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
      <Box className={classes.fullPage}>
        <Header />
        <CssBaseline />
        {perguntas.length === 0 ? 
        <Box className={classes.full}>
          <Box className={classes.card}>
            <h1>Não tem Relatório</h1>
            <Button variant="contained" color="primary" onClick={() => navigate('/home')}>
              Voltar
            </Button>
          </Box>
        </Box>
        : 
        <Box className={classes.card}>
          <h1>Relatorio</h1>
          <h2>Pontuação: {score} de {perguntas.length}</h2>
          {perguntas.map((pergunta, index) => {
            return (
              <Box key={index}>
                <h1>Pergunta {index + 1} de {perguntas.length}</h1>
                <h3>{decode(pergunta.pergunta)}</h3>
                <h4>{decode(pergunta.resposta)}</h4>
              </Box>
            )
          }
          )}                
        </Box>} 
      </Box>
    </ThemeProvider>
  )
}

export default Relatorio
