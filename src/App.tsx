import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Counter from './examples/counter/Counter';
const BASE_NAME = window.__POWERED_BY_QIANKUN__ ? '/react' : '';

function App() {
  return (
    <Router basename={BASE_NAME}>
      <Switch>
        <Route>
          <Counter />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
