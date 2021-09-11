import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header';
import List from './components/List';
import Test from './components/Test';
import Add from './components/Add';
import Edit from './components/Edit';
import Validation from './components/Validation';
import Register from './components/Register';
import Login from './components/Login';
import Protected from './components/Protected';
function App() {
  return (
    <Router>
      <Header/>
      <Route path="/" component={List} exact></Route>
      <Route path="/Test" component={Test} exact></Route>
      {/* <Route path="/add" component={Add} exact></Route> */}
      <Route path="/edit/:id" component={Edit} exact></Route>
      <Route path="/add"  exact> <Protected Cmp={Add}/> </Route>
      {/* <Route path="/edit/:id"  exact> <Protected Cmp={Edit}/> </Route> */}
      <Route path="/Validation" component={Validation} exact></Route>
      <Route path="/register" component={Register} exact></Route>
      <Route path="/login" component={Login} exact></Route>

    </Router>
  );
}

export default App;
