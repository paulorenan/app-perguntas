import Provider from "./context/Provider";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./pages/Login";

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
