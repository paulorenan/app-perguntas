import React, {useContext} from 'react';
import { Box } from '@mui/system';
import { makeStyles } from '@material-ui/styles';
import MyContext from '../context';
import { Button, Container, CssBaseline } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles({
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    maxWidth: '500px',
    margin: 'auto',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
  },
});

// function to get the date in the format DD--MM--YYYY
function getDate() {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

function Confirmação({loading}) {
  const { quantidade, setStart, setStorage } = useContext(MyContext);
  const navigate = useNavigate();
  const classes = useStyles();
  return (
    <Container maxWidth="sm">
      <CssBaseline />
      <Box className={classes.card}>
        <h2 style={{marginBottom: '0'}}>Você escolheu responder {quantidade} {quantidade > 1 ? 'perguntas' : 'pergunta'}</h2>
        <p>
          Clique no botão abaixo para começar.
        </p>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {setStorage([]);setStart(true)}}
          disabled={loading}
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
