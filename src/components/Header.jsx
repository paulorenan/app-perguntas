import React, {useContext} from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MyContext from '../context'
import perguntas from '../images/perguntas.png'
import { getUser } from '../services/storage';

function Header() {
  const user = getUser()
  return (
      <AppBar>
        <Toolbar>
          <img src={perguntas} alt="perguntas" style={{height: '50px'}}/>
          <Box sx={{ flexGrow: 1 }} />
          <Typography variant="h6" component="div">
            {`Olá ${user === null ? 'Jogador' : user }`}
          </Typography>
        </Toolbar>
      </AppBar>
  )
}

export default Header
