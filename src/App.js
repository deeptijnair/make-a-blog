import Navbar from './NavBar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
import { ChakraProvider } from '@chakra-ui/react';
import system from './theme';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar bg="red.200"/>
        <div className='content'>
          <Switch>
            <Route exact path='/'>
             <Home />
            </Route>
            <Route path = '/create'>
              <Create />
            </Route>
            <Route path = '/blogs/:id'>
              <BlogDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router> 
  );
}

export default App;
