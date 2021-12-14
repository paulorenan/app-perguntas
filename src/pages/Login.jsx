import React, {useContext, useState} from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import perguntas from '../images/perguntas.png';
import { Grid } from '@mui/material';
import MyContext from '../context';
import { useNavigate } from 'react-router';
import { createUser } from '../services/storage';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        App Perguntas
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

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
    backgroundColor: 'white',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.2)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  image: {
    maxWidth: '100%',
  },
});

const theme = createTheme();

export default function Login() {
  const classes = useStyles();
  const { setUser, setData, user } = useContext(MyContext);
  const [usuario, setUsuario] = useState('');
  const [tem, setTem] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (usuario === '') {
      setTem(true);
    } else {
      const data = new FormData(event.currentTarget);
      setData(data);
      setUser(usuario);
      createUser(usuario);
      navigate('/home');
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Box className={classes.fullPage} size="xl">
        <Container maxWidth="xs">
          <CssBaseline />
          <Box
            className={classes.card}
          >
            <Grid container>
              <Grid item xs={12} lg={12} md={12} sm={12}>
                <Box style={{ width: '100%' }}>
                  <img src={perguntas} alt="perguntas" className={classes.image}/>
                </Box>
              </Grid>
            </Grid>
            <Typography component="h1" variant="h5">
              Entrar
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="nome"
                label="Nome"
                name="nome"
                autoComplete="nome"
                autoFocus
                onChange={ (e) => { setUsuario(e.target.value) } }
              />
              {tem && <p style={{ color: 'red' }}>Preencha o campo nome</p>}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Entrar
              </Button>
            </Box>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
      </Box>
    </ThemeProvider>
  );
}