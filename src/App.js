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
    menuArr: [{ name: "Deserts", title: "Life is Uncertain, Eat Desert FIRST!", num: 18},
      { name: "Appetizers", title: "Appetizers and Hors d'oeuvres", num: 8},
      { name: "Entrees", title: "Entrees", num: 9 },
      { name: "Seafood", title: "Seafood Main Courses", num: 12 },
      ],
      subMenu: [],
    }
  }

  async getMenuItems ( location, num){
    Axios.get("https://entree-f18.herokuapp.com/v1/menu/" + num)
      .then(
        (result) => { 
          let tempMenuArr = result.data.menu_items.map((item, idx) => {
            item.price = ((Math.random() * 12) + 4).toFixed(2);
            return item
          });
          // i is the index
          // copies the submenu
          let subMenuArr = this.state.subMenu; // includes subMenu[0], subMenu[1]
          if(subMenuArr[location] === undefined){
            subMenuArr.push(tempMenuArr);
          } else {
            subMenuArr[location] = tempMenuArr;
          }

          this.setState({
            subMenu: subMenuArr,
          }); 
        }
      )
  }

  fillMenus = async () => {            // still needed for "specials"
    try {
      for (let i=0 ; i < this.state.menuArr.length ; i++) {  // loop here menuArr
        await this.getMenuItems(i, this.state.menuArr[i].num);
        // check to make sure we have the right number of items
        if(this.state.menuArr[i].num != this.state.subMenu[i].length){
          await this.getMenuItems(i, this.state.menuArr[i].num - this.state.subMenu[i].length);
          // console.log('i=',i);
        }
      }
      this.setState({
        isLoaded: true,
      });
    }
    catch (error) {
      console.log(error)
      console.error(error)  //todo more better error handling
    }
  }

  async componentDidMount () {
    
    await this.fillMenus();
      
  }

  render() {
    // {console.log("building menus, dessertMenu", DesertMenu);}
    if(this.state.isLoaded){
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

            {/* <div id="googleMap" className="pr-3 pb-3">
              <ShowMap />
            </div> */}

          </div>
        </div>

        <AccordianMenu items={this.state.subMenu[0]} 
            name={this.state.menuArr[0].name}/>
        <AccordianMenu items={this.state.subMenu[1]} 
            name={this.state.menuArr[1].name} />

      </div>
    );
    } else {
      return (
        <>
        <h1>Loading...TODO place spinner here</h1>
        </>
      );
    }
  }
}

export default App;
