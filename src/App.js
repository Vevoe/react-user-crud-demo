import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { configureStore } from './config'
// import configureStore from './configureStore'
import Header from './components/header'
import UsersIndex from './components/usersIndex'
import CreateUser from './components/createUser'
import EditUser from './components/editUser'

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
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
      </Provider>
    );
  }
}

export default App;
