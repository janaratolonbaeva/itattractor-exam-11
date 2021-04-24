import React from 'react';
import {Route, Switch} from 'react-router-dom';
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import AppToolbar from "./components/UI/AppToolbar/AppToolbar";
import Goods from "./containers/Goods/Goods";
import NewGoods from "./containers/NewGoods/NewGoods";
import OneGoods from "./containers/OneGoods/OneGoods";
import Register from "./containers/Register/Register";
import Login from "./containers/Login/Login";

const App = () => (
  <>
    <CssBaseline/>
    <header>
      <AppToolbar/>
    </header>
    <main>
      <Container maxWidth="xl">
        <Switch>
          <Route path="/" exact component={Goods} />
          <Route path="/new-goods" component={NewGoods} />
          <Route path="/goods/:id" component={OneGoods} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
        </Switch>
      </Container>
    </main>
  </>
);

export default App;
