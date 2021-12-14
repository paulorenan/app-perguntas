import React, {useContext} from 'react';
import { Box } from '@mui/system';
import { makeStyles } from '@material-ui/styles';
import MyContext from '../context';
import { Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Grid } from '@mui/material';

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
  const classes = useStyles();
  return (
    <Container maxWidth="md">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Box className={classes.card}>
            
          </Box>
        </Grid>
      </Grid>

    </Container>
  )
}

export default Jogo
