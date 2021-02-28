import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import ColorPickerPage from './pages/ColorPicker/ColorPickerPage';
import CountPage from './pages/CountPage/CountPage';
import Home from './pages/Home/Home';
import Weather from './pages/WeatherPage/WeatherPage';

function App() {
  return (
    <div className="App" data-testid="app">
      <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/counter" component={CountPage}></Route>
          <Route path="/color-picker" component={ColorPickerPage}></Route>
          <Route path="/weather" component={Weather}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
