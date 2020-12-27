import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MovieDetails from './MovieDetails';
import EditMovie from './EditMovie';


function App() {
  return (
    <Router>
    <div className="app">
    <Switch>
    <Route path='/title'>
        <Nav />
        <MovieDetails />
      </Route>
      <Route path='/edit'>
        <Nav />
        <EditMovie />
      </Route>
      <Route path="/">
      <Nav />
      <Banner />
      <Row title='Top Rates' fetchUrl={requests('').getTopRates}/>
      <Row title='Action & Adventure' fetchUrl={requests('').getAcrionsMovie}/>
      <Row title='TV Sci-Fi & Horror' fetchUrl={requests('').getHorrorMovie}/>
      </Route>
      
      </Switch>
    </div>
    </Router>
  );
}

export default App;
