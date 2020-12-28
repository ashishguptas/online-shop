import './App.css';
import { BrowserRouter as Router,  Route } from "react-router-dom";
import { Provider } from 'react-redux'
import store from './store'
import Nav from './components/Nav';
import Home from './components/Home';
import Cart from './components/Cart';
import ProductDetail from './components/ProductDetail';

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Nav />
        <Route path='/' exact component={Home} />
        <Route path='/cart' exact component={Cart} />
        <Route path='/details/:id' exact component={ProductDetail} />
      </Provider>
    </Router>
  );
}

export default App;
