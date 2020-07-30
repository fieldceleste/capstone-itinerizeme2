import React, {Component} from 'react';
import './App.scss';
import BackgroundSlider from 'react-background-slider'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";


//Nav and Card
import  Navbar from "./Header/Navbar";
import {Card}  from './Header/Card';

//background images
import rome from './Header/img/rome.jpg'
import amsterdam from './Header/img/amsterdam.jpg'
import austin from './Header/img/austin.jpg'
import australia from './Header/img/australia.jpg'
import costa from './Header/img/costa.jpg'
import dubi from './Header/img/dubi.jpg'
import effiel from './Header/img/effiel.jpg'
import egypt from './Header/img/egypt.jpg'
import iceland from './Header/img/iceland.jpg'
import italy from './Header/img/italy.jpg'
import japan from './Header/img/japan.jpg'
import japan2 from './Header/img/japan2.jpg'
import london from './Header/img/london.jpg'
import moscow from './Header/img/moscow.jpg'
import paris from './Header/img/paris.jpg'
import peru from './Header/img/peru.jpg'
import peters from './Header/img/peters.jpg'
import petra from './Header/img/petra.jpg'
import portland from './Header/img/portland.jpg'
import santorini from './Header/img/santorini.jpg'
import rio from './Header/img/rio.jpg'
import york from './Header/img/york.jpg'


import AddTrip from './Itinerary/AddTrip';


class App extends Component{
    state = {
      navbarOpen: false
    }
  
    handleNavbar = () => {
      this.setState({ navbarOpen: !this.state.navbarOpen });
    }
  
render() {

  return (
  
       <Router>
        <React.Fragment>
       <BackgroundSlider
  images={[rome,amsterdam,austin,australia,costa,dubi,effiel,egypt,iceland,italy,japan,japan2, london, moscow,paris,peru, peters, petra, portland,york,rio,santorini]}
  duration={4} 
  transition={2} />
         <Navbar 
          navbarState={this.state.navbarOpen} 
          handleNavbar={this.handleNavbar}
        />
          <Card />
          <Switch>
          <Route exact path="/addtrip" render={() => <ConfigController store={this.state.store} />} />
        </Switch>
        </React.Fragment>
       </Router>
      
   
    
  
  );
 }
}


export default App;
