import React, { Component } from 'react';
import './App.css';
import Router from './basic-react-router/Router';
import Route from './basic-react-router/Route';
import Link from './basic-react-router/Link';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h2>
            Which body of water?
          </h2>

          <ul>
            <li>
              <Link to='/atlantic'>
                <code>/atlantic</code>
              </Link>
            </li>
            <li>
              <Link to='/pacific'>
                <code>/pacific</code>
              </Link>
            </li>
          </ul>
          <hr />
          <Route path='/atlantic' component={Atlantic} />
          <Route path='/pacific' component={Pacific} />
        </div>
      </Router>
    );
  }
}

const Atlantic = () => (
  <div>
    <h3>Atlantic Ocean</h3>
    <p>
      The Atlantic Ocean covers approximately 1/5th of the
      surface of the earth.
    </p>
  </div>
);

const Pacific = () => (
  <div>
    <h3>Pacific Ocean</h3>
    <p>
      Ferdinand Magellan, a Portuguese explorer, named the ocean
      'mar pacifico' in 1521, which means peaceful sea.
    </p>
  </div>
);

export default App;
