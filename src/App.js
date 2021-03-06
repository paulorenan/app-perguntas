import Provider from "./context/Provider";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./pages/Login";
import Home from "./pages/Home";
import Game from "./pages/Game";
import Relatorio from "./pages/Relatorio";

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/game" element={<Game />} />
          <Route path="/relatorio" element={<Relatorio />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
