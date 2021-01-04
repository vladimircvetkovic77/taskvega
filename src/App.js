import { Route, Switch } from 'react-router-dom';

import DailyTasks from './pages/daily-tasks'
import NotFound from './pages/not-found'

import './App.css';

import { Provider } from 'react-redux';
import configureStore from './store/configureStore'

const store = configureStore();

function App() {
  return (
    <div className="App">
      <Provider store={store} >
        <Switch>
          <Route path="/not-found" component={NotFound}></Route>
          <Route path="/:date" component={DailyTasks}></Route>
        </Switch>
      </Provider>
    </div>
  );
}

export default App;
