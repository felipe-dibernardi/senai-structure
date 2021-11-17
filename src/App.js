
import './App.css';
import Company from './views/Company';
import Map from './views/Map';
import Product from './views/Product'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './views/Home';

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/map">
            <Map/>
          </Route>
          <Route exact path="/company">
            <Company/>
          </Route>
          <Route exact path="/product">
            <Product/>
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
        </Switch>
    </BrowserRouter>
    
  );
}

export default App;
