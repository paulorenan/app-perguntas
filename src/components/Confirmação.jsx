import React, {useContext} from 'react';
import { Box } from '@mui/system';
import { makeStyles } from '@material-ui/styles';
import MyContext from '../context';
import { Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

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

function Confirmação() {
  const { quantidade } = useContext(MyContext);
  const navigate = useNavigate();
  const classes = useStyles();
  return (
    <Container maxWidth="sm">
      <Box className={classes.card}>
        <h1>Bem vindo ao jogo de Perguntas</h1>
        <p>
          Você tem {quantidade} perguntas para responder.
        </p>
        <p>
          Clique no botão abaixo para começar.
        </p>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate('/perguntas')}
        >
          Começar
        </Button>
        <Button
          variant="contained"
          color="secondary"
          style={{marginTop: '20px'}}
          onClick={() => navigate('/home')}
        >
          Voltar
        </Button>
      </Box>
    </Container>
  )
}

export default Confirmação
