import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/nav";
import RickAndMorty from './Morty.jsx';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<RickAndMorty />} />
      </Routes>
    </Router>
  );
}

export default App;
