import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter/Counter';
import TechnologiesList from './components/TechnologiesList/TechnologiesList';
import StaticMoviesList from './components/StaticMoviesList/StaticMoviesList';
import DynamicMovieList from './components/DynamicMovieList/DynamicMovieList';

function App() {
  return (
    <div className="App">
      <Counter />
      <TechnologiesList className="technlogies-list" />
      <hr />
      <StaticMoviesList />

      <hr />

      <DynamicMovieList />
    </div>
  );
}

export default App;
