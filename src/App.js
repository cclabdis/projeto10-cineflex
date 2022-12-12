import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./App.styles";

import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Success from "./pages/Success/Success";
import Seats from "./pages/Seats/Seats";
import Sessoes from "./pages/Sessoes/Sessoes";

function App() {

  //exemplo (rota "/sessoes/:idFilme")
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/sessoes/:id" element={<Sessoes />}></Route>
        <Route path="/assentos/:id" element={<Seats />}></Route>
        <Route path="/sucesso" element={<Success />}></Route>
      </Routes>
    </BrowserRouter>
  );
  
}

export default App;