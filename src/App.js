import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from "./_components/home";
import './_assets/main.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Switch>
            {/* <Route exact path="/login" component={LoginPage} /> */}
            <Route path="/" component={HomePage} />
            {/* <Route path="**" component={PageNotFoundPage} /> */}
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
