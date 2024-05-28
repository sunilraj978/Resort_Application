import React from 'react'
import '../src/files/App.css';
import Navbar from './component/navbar'
import Home from './page/home'
import Error from './page/error'
import Room from './page/room'
import SingleRoom from './page/single'


import {Switch,Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <div style={{paddingTop:"30px"}}>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route  path='/room/:slug' component={SingleRoom} />
          <Route path='/room' component={Room} />
          
          <Route component={Error} />
        </Switch>
      </div>
      <Navbar />
    </div>
  );
}

export default App;
