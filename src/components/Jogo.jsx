import React, {useContext, useState, useEffect} from 'react';
import { Box } from '@mui/system';
import { makeStyles } from '@material-ui/styles';
import MyContext from '../context';
import { Button, Container, CssBaseline } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Grid } from '@mui/material';
import {decode} from 'html-entities'
import RightIcon from '@mui/icons-material/Check';
import WrongIcon from '@mui/icons-material/Clear';

const useStyles = makeStyles({
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

function Jogo() {
  const { questions, storage, setStorage } = useContext(MyContext);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [perguntas, setPerguntas] = useState([]);
  const [score, setScore] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [certo, setCerto] = useState(false);
  const [errou, setErrou] = useState(false);
  const [choose, setChoose] = useState('');
  const navigate = useNavigate();
  const classes = useStyles();

  useEffect(() => {
    const array = [...questions[currentQuestion].incorrect_answers, questions[currentQuestion].correct_answer];
    setPerguntas(shuffle(array));
  }, [currentQuestion, questions]);

  async function proximaPergunta() {
    await setStorage([...storage, {
      pergunta: questions[currentQuestion].question,
      resposta: choose,
      correta: questions[currentQuestion].correct_answer,
      alternativa: [...perguntas],
      respostaCorreta: questions[currentQuestion].correct_answer === choose ? true : false
    }]);
    if (currentQuestion < questions.length - 1) {
      setShowAnswer(false);
      setCerto(false);
      setErrou(false);
      setCurrentQuestion(currentQuestion + 1);
    } else {
      localStorage.setItem('score', score);
      navigate('/relatorio');
    }
  }

  function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
  }

  return (
    <Container maxWidth="md">
      {console.log(questions)}
      <CssBaseline />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Box className={classes.card}>
            <h3 style={{marginBottom: '0', marginTop: '10px'}}>{`Score: ${score}/${questions.length}`}</h3>
            <h1 style={{marginBottom: '0'}}>{`Pergunta ${currentQuestion +1} de ${questions.length}`}</h1>
            <p>{decode(questions[currentQuestion].question)}</p>
            {perguntas.map((pergunta, index) => {
              if(pergunta === questions[currentQuestion].correct_answer) {
                return (
                  <Button
                    key={index}
                    onClick={() => {
                      setScore(score + 1);
                      setShowAnswer(true);
                      setCerto(true);
                      setChoose(pergunta);
                    }}
                    disabled={showAnswer}
                    variant="contained"
                    color="primary"
                    fullWidth
                    style={{marginBottom: '10px'}}
                    {...(showAnswer && {style: {backgroundColor: '#4caf50', color: 'black', marginBottom: '10px'}})}
                    {...(showAnswer && choose === pergunta && {startIcon: <RightIcon />})}
                  >
                    {decode(pergunta)}
                  </Button>
                )
              } else {
                return (
                  <Button
                    key={index}
                    onClick={() => {
                      setShowAnswer(true);
                      setErrou(true);
                      setChoose(pergunta);
                    }}
                    disabled={showAnswer}
                    variant="contained"
                    color="primary"
                    fullWidth
                    style={{marginBottom: '10px'}}
                    {...(showAnswer && {style: {backgroundColor: '#f44336', color: 'black', marginBottom: '10px'}})}
                    {...(showAnswer && choose === pergunta && {startIcon: <WrongIcon />})}
                  >
                    {decode(pergunta)}
                  </Button>
                )
              }
              }
            )}
            {showAnswer && certo && <p style={{marginTop: '0'}}>Resposta correta!</p>}
            {showAnswer && errou && <p style={{marginTop: '0'}}>Resposta errada!</p>}
            {showAnswer && <Button onClick={proximaPergunta} variant='contained'>{currentQuestion === questions.length -1 ? 'Ver Relat??rio' : 'Pr??xima Pergunta'}</Button>}
          </Box>
        </Grid>
      </Grid>

    </Container>
  )
}

export default Jogo
