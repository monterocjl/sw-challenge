import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Layout } from "./components";
import { HomePage, PeoplePage, PersonPage } from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='/people' element={<PeoplePage />} />
          <Route path='/planets' element={<div>Planets page</div>} />
          <Route path='/starships' element={<div>Starships page</div>} />
          <Route path='/people/:id' element={<PersonPage />} />
          <Route path='/planets/:id' element={<div>Planet page</div>} />
          <Route path='/starship/:id' element={<div>Starship page</div>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
