import React, {  Component} from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/Navbar'
import Home from './components/homepage/Home';
import Footer from './components/Footer';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div className="App">
        <NavBar />
      {/* Routing method */}
        <div className="content">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/home' component={Home} />
          </Switch>
        </div>
        <Footer className="footer"/>
      </div>
     );
  }
}

export default App;
