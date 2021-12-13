import React, {useContext} from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MyContext from '../context'
import perguntas from '../images/perguntas.png'

function Header() {
  const { user } = useContext(MyContext)
  return (
      <AppBar>
        <Toolbar>
          <img src={perguntas} alt="perguntas" style={{height: '50px'}}/>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          </Typography>
          <Typography variant="h6" component="div">
            {`Olá ${user}`}
          </Typography>
        </Toolbar>
      </AppBar>
  )
}

export default Header
