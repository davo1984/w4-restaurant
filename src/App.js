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
        [ "",
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

  // fillMenus = async (tempMenuSize) => {            // still needed for "specials"
  //   try {
  //     tempMenuSize = Math.floor((Math.random() * 5) + 4);
  //     return await Axios.get("https://entree-f18.herokuapp.com/v1/menu/" + tempMenuSize) 
  //   }
  //   catch (error) {
  //     console.error(error)  //todo more better error handling
  //   }
  //   this.setState (
  //     this.state.menuSize = [ Math.floor((Math.random() * 5) + 4) ],
  //   )
  // }

  componentDidMount = (props) => {
    let tempMenuSize = Math.floor((Math.random() * 5) + 4);
    console.log('menuSize=', tempMenuSize);
    
    Axios.get("https://entree-f18.herokuapp.com/v1/menu/" + tempMenuSize)
      .then(
        (result) => {          // is fill Menu above better way to call axios?
          Axios.get("https://entree-f18.herokuapp.com/v1/menu/"+tempMenuSize);
          // let proxySubMenu = this.state.subMenu;           //  ???
          // let proxySubMenu[0] = result.data.menu_items;    //  ???

          // set subMenuName

          // while more descriptions in result.data.menu_items;
          //    get next item
          //    name = item.split('with');  //drop this
          //    description = item;
          //    price = ((Math.random() * 12) + 4).toFixed(2);  // random price
          //    price = price.toFixed(2);                       // 2 decimals
          //    
          //    If the subMenu is filled do this:
          //        create JSON string
          //        write to local storage
          //        change to next subMenuName    ?? key
          //        clear the array data

          this.setState({ 
            isLoaded: true,   // needed?
          });


          console.log('menuItems='+this.state.item+' menuPrice='+this.state.price);
        },
        // todo more better handle errors here
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

// function displaySubMenu (subMenuName) {

//   {/* get localstorage for subMenuName 
//                        Alternatively loop through #s x-y below **
//               map(?) localstorage into subMenuArray
//               <div>
//                 <table>
//                   <tr>
//                     loop through subMenuArray           **
//                         <td>descripton</td>
//                         <td>price</td>
//                   </tr>
//                 </table>
//               </div> */}
// }

export default App;