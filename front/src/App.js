import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import propostasPage from './pages/propostasPage'
function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to='/propostas' />
      </Route>
      <Route exact path='/propostas' component={propostasPage} />
    </Switch>
  )
}

export default App;
