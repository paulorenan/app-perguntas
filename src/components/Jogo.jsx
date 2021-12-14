import React, {useContext, useState, useEffect} from 'react';
import { Box } from '@mui/system';
import { makeStyles } from '@material-ui/styles';
import MyContext from '../context';
import { Button, Container, CssBaseline } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Grid } from '@mui/material';
import {decode} from 'html-entities'

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
  const { questions } = useContext(MyContext);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [perguntas, setPerguntas] = useState([]);
  const [score, setScore] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [certo, setCerto] = useState(false);
  const [errou, setErrou] = useState(false);
  const navigate = useNavigate();
  const classes = useStyles();

  useEffect(() => {
    const array = [...questions[currentQuestion].incorrect_answers, questions[currentQuestion].correct_answer];
    setPerguntas(shuffle(array));
  }, [currentQuestion, questions]);

  function proximaPergunta() {
    if (currentQuestion < questions.length - 1) {
      setShowAnswer(false);
      setCerto(false);
      setErrou(false);
      setCurrentQuestion(currentQuestion + 1);
    }
  }

  function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
    while (currentIndex != 0) {
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
            <h3>{`Score: ${score}/${questions.length}`}</h3>
            <h1>{`Pergunta ${currentQuestion +1} de ${questions.length}`}</h1>
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
                    }}
                    variant="contained"
                    color="primary"
                    fullWidth
                    {...(showAnswer && {style: {backgroundColor: '#4caf50'}})}
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
                    }}
                    variant="contained"
                    color="primary"
                    fullWidth
                    {...(showAnswer && {style: {backgroundColor: '#f44336'}})}
                  >
                    {decode(pergunta)}
                  </Button>
                )
              }
              }
            )}
            {showAnswer && certo && <p>Resposta correta!</p>}
            {showAnswer && errou && <p>Resposta errada!</p>}
            {showAnswer && <Button onClick={proximaPergunta} variant='contained'>Próxima pergunta</Button>}
          </Box>
        </Grid>
      </Grid>

    </Container>
  )
}

export default Jogo
