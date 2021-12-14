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
  const navigate = useNavigate();
  const classes = useStyles();

  useEffect(() => {
    const array = [...questions[currentQuestion].incorrect_answers, questions[currentQuestion].correct_answer];
    setPerguntas(shuffle(array));
  }, [currentQuestion, questions]);

  function proximaPergunta() {
    if (currentQuestion < questions.length - 1) {
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
            <h1>{`Pergunta ${currentQuestion +1} de ${questions.length}`}</h1>
            <p>{decode(questions[currentQuestion].question)}</p>
            {perguntas.map((pergunta, index) => (
              <Button
                key={index}
                onClick={() => {
                  if (pergunta === questions[currentQuestion].correct_answer) {
                    setScore(score + 1);
                  }
                  setShowAnswer(true);
                }}
              >
                {decode(pergunta)}
              </Button>
            ))}
          </Box>
        </Grid>
      </Grid>

    </Container>
  )
}

export default Jogo
