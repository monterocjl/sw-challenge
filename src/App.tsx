import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<div>Home page</div>} />
        <Route path='/people' element={<div>People page</div>} />
        <Route path='/planets' element={<div>Planets page</div>} />
        <Route path='/starships' element={<div>Starships page</div>} />
        <Route path='/personas/:id' element={<div>Person page</div>} />
        <Route path='/planets/:id' element={<div>Planet page</div>} />
        <Route path='/starship/:id' element={<div>Starship page</div>} />
      </Routes>
    </Router>
  );
}

export default App;
