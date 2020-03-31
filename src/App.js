import React, { Component } from "react";
import { faTrademark, faCocktail, faLungsVirus, faCloudMeatball, faFlushed } from "@fortawesome/free-solid-svg-icons";
import { faGrav } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Axios from "axios";
import './App.css';
import ShowMap from './Components/ShowMap.js';
import NavMenu from './Components/NavMenu.js';
import AccordianMenu from './Components/AccordianMenu.js';
// import RetrieveMenuItems from './Components/RetrieveMenuItems.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      menuSize: 0,
      subMenu: 
        [ 
          [
            {
              item: "",
              price: "",
              description: ""
            }, {
              item: "",
              price: "",
              description: ""
            }, {
              item: "",
              price: "",
              description: ""
            } 
          ] 
        ],
    }
  }

  fillMenus = async (props) => {
    try {
      return await Axios.get("https://entree-f18.herokuapp.com/v1/menu/" + tempmenuSize) 
    }
    catch (error) {
      console.error(error)  //todo more better error handling
    }
    this.setState (
      this.state.menuSize = [ Math.floor((Math.random() * 5) + 4) ],
    )
  }

  componentDidMount = (props) => {
    let tempmenuSize = Math.floor((Math.random() * 5) + 4);
    console.log('menuSize=', tempmenuSize);
    //currently zero
    Axios.get("https://entree-f18.herokuapp.com/v1/menu/" + tempmenuSize)
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.data.menu_items,       // append to previous items
            price: Math.floor((Math.random() * 12) + 4),
            // .toFixed(2) 
          });
          console.log('menuItems='+this.state.menuItems+' menuPrice='+this.state.menuPrice+ ' result.items='+result.items);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    // {console.log("building menus, dessertMenu", DesertMenu);}
    return (
      <div className="App">
        <div className="row mx-3">
          <div className="col-3">
            <h1>Camus&#39; Absurdist Dining</h1>
            <p>Even after your Fall don't be The Stranger!<FontAwesomeIcon icon={faGrav} /></p>
            <p>Hours:</p>
            <ul className="list-group mx-auto">
              <li className="list-group-item">Mon: Midnight - 8 AM</li>
              <li className="list-group-item">Tue: 9 pm - 8 AM</li>
              <li className="list-group-item">Wed: 3 am - 7 AM</li>
              <li className="list-group-item">Thr: 7 GMT - 8 AM</li>
              <li className="list-group-item">Fri: 3 am - 7 AM</li>
              <li className="list-group-item">Sat: 9 pm - 8 AM</li>
              <li className="list-group-item">Sun: Midnight - 8 AM</li>
            </ul>
          </div>
          <div className="col-6">
            <img src="./images/fleur-de-lis.jpeg" className="rounded-circle mt-1" alt="Our establishment" /><p>348 East Main Street<br />Lexington, KY</p>
            <NavMenu />
          </div>
          <div className="col-3 text-center">
            <h1>Visit our old location!</h1>

            <div id="googleMap" className="pr-3 pb-3">
              <ShowMap />
            </div>

          </div>
        </div>

        <AccordianMenu />
      </div>
    );
  }
}

export default App;