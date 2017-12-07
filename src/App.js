import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import { configureStore } from './config'
import Header from './components/header'
import UsersIndex from './containers/usersIndex'
import CreateUser from './containers/createUser'
import EditUser from './containers/editUser'

const history = createHistory()
const store = configureStore(history);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <div>
            <Header />
            <Switch>
              <Route path="/users/create" component={CreateUser}  />
              <Route path="/users/:id" component={EditUser}  />
              <Route path="/" component={UsersIndex}  />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
