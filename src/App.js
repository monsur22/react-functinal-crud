import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header';
import List from './components/List';
function App() {
  return (
    <Router>
      <Header/>
      <Route path="/" component={List} exact></Route>

    </Router>
  );
}

export default App;
