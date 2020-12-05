import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row title='Top Rates' fetchUrl={requests('').getTopRates}/>
      <Row title='Action & Adventure' fetchUrl={requests('').getAcrionsMovie}/>
      <Row title='TV Sci-Fi & Horror' fetchUrl={requests('').getHorrorMovie}/>
    </div>
  );
}

export default App;
