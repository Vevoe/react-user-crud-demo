import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from './components/header'
import UsersIndex from './components/usersIndex'
import CreateUser from './components/createUser'
import EditUser from './components/editUser'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route path="/users/create" component={CreateUser}  />
            <Route path="/users/:id" component={EditUser}  />
            <Route path="/" component={UsersIndex}  />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
