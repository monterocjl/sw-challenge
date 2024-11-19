import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Layout } from "./components";
import {
  HomePage,
  PeoplePage,
  PersonPage,
  PlanetsPage,
  PlanetPage,
  StarshipsPage,
  StarshipPage,
} from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='/people' element={<PeoplePage />} />
          <Route path='/people/:id' element={<PersonPage />} />
          <Route path='/planets' element={<PlanetsPage />} />
          <Route path='/planets/:id' element={<PlanetPage />} />
          <Route path='/starships' element={<StarshipsPage />} />
          <Route path='/starships/:id' element={<StarshipPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
