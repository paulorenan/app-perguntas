import Provider from "./context/Provider";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./pages/Login";
import Home from "./pages/Home";
import Game from "./pages/Game";

function App() {
  return (
    <Provider>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
