import React, { Component } from "react";
// import { faTrademark, faCocktail, faLungsVirus, faCloudMeatball, faFlushed } from "@fortawesome/free-solid-svg-icons";
// import { faGrav } from "@fortawesome/free-brands-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Axios from "axios";
import './App.css';
import ShowMap from './Components/ShowMap.js';
// import NavMenu from './Components/NavMenu.js';
import AccordionMenu from './Components/AccordionMenu.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      menuSize: 0,
    menuArr: [
      { name: "Deserts", title: "Life is Uncertain, Eat Desert FIRST!", num: 18},
      { name: "Appetizers", title: "Appetizers and Hors d'oeuvres", num: 8},
      { name: "Entrees", title: "Entrees", num: 9 },
      { name: "Seafood", title: "Seafood Main Courses", num: 14 },
      { name: "Meat", title: "Beef, Veil, Lamb and Goat", num: 7 },
      { name: "Vegan", title: "Vegan and Vegetarian Courses", num: 9 },
      { name: "Haggis", title: "Haggis and other abominations", num: 3 },
      ],
      subMenu: [],
      isLoaded: false,
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
        if (this.state.subMenu.length > 0) {
          if(this.state.menuArr[i].num != this.state.subMenu[i].length){
            await this.getMenuItems(i, this.state.menuArr[i].num - this.state.subMenu[i].length);
            // console.log('i=',i);
          }
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
    
    for (let i = 0; i < this.state.menuArr.length; i++) {  // loop here menuArr
      await this.fillMenus();
      // check to make sure we have the right number of items
      if (this.state.subMenu.length > 0) {
        if (this.state.menuArr[i].num != this.state.subMenu[i].length) {
          await this.getMenuItems(i, this.state.menuArr[i].num - this.state.subMenu[i].length);
        }
      }
    } 
  }

  render() {
    // {console.log("building menus, dessertMenu", DesertMenu);}
    if(this.state.isLoaded){
    return (
      <div className="App">
        <div className="row mx-3">
          <div className="col-3 py-3">
            <h1>Camus&#39; Absurdist Dining</h1>
            <p>Even after your Fall don't be The Stranger!</p>
            {/* <p>Even after your Fall don't be The Stranger!<FontAwesomeIcon icon={faGrav} /></p> */}
            <p>Hours:</p>
            <ul className="list-group mx-auto"> 
                                  {/* // todo read hours from array */}
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
            <img src={process.env.PUBLIC_URL + '/images/fleur-de-lis.jpg'}
              className="rounded-circle mt-1" alt="Our establishment" />
              <p>348 East Main Street<br />Lexington, KY</p>
            {/* <NavMenu /> */}
          </div>
          <div className="col-3 text-center">
            <h1>Visit our old location!</h1>

            <div id="googleMap" className="pr-3 pb-3">
              <ShowMap />
            </div>

          </div>
        </div>

        { this.state.menuArr.map ((item,ndx) => {

            return <AccordionMenu items={this.state.subMenu[ndx]}
              key={ndx}
              title={this.state.menuArr[ndx].title} 
              name={this.state.menuArr[ndx].name} /> 

          })
        }

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
