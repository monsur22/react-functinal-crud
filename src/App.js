import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header';
import List from './components/List';
import Test from './components/Test';
import Add from './components/Add';
function App() {
  return (
    <Router>
      <Header/>
      <Route path="/" component={List} exact></Route>
      <Route path="/Test" component={Test} exact></Route>
      <Route path="/add" component={Add} exact></Route>

    </Router>
  );
}

export default App;
