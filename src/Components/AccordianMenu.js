import React, { Component } from "react";
import { faTrademark, faCocktail, faLungsVirus, faCloudMeatball, faFlushed } from "@fortawesome/free-solid-svg-icons";
// import { faGrav } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class AccordianMenu extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      // {/* Accordian Below! */ }
      <div id="accordion">
        <div className="card">
          <div className="card-header" id="headingOne">
            <h5 className="mb-0">
              <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Life is Uncertain, Eat Desert FIRST!<FontAwesomeIcon icon={faTrademark} /></button>
            </h5>
          </div>
          <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
            <div className="card-body">
              <div>
                <table className="table table-striped">
                  <tbody>
                  {/* //this.props.menuItems.map <tr> item.description item.price</tbody> */}

                    <tr key={ index }>
                      {this.props.menuItems.map((value, index) => {
                        return <td key={index}>{value}</td>
                      })}
                    </tr>

                    {/* <tr key={index}>
                      <td align="left">{item.description}</td>
                      <td align="right">$14.95</td>
                    </tr>
                    <tr>
                      <td align="left">description that is really, really longer than the others</td>
                      <td align="right">$964.95</td>
                    </tr>
                    <tr>
                      <td align="left">description 2</td>
                      <td align="right">$4.95</td>
                    </tr> */}
                  </tbody>
                </table>
              </div>
              Temp text of menu for test. Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.


              {/* Call function to display subMenu (  subMenuName ) */}


              {/* <DisplaySubmenu />    //todo somehow tell it which menu: subMenuName. . . */}
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header" id="headingTwo">
            <h5 className="mb-0">
              <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Hors d&#39;oeuvres and Appetizers</button>
            </h5>
          </div>
          <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
            <div className="card-body">

            {/* call submenu function here */}
              <div>
                <table>
                  <tr>
                    <td align="left">description 0</td>
                    <td align="right">$14.95</td>
                  </tr>
                  <tr>
                    <td>description that is really, really longer than the others</td>
                    <td align="right">$964.95</td>
                  </tr>
                  <tr>
                    <td align="left">description 2</td>
                    <td align="right">$4.95</td>
                  </tr>
                </table>
              </div>
              {/* call submenu function here */}

              </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header" id="headingThree">
            <h5 className="mb-0">
              <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Main Courses</button>
            </h5>
          </div>
          <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
            <div className="card-body">
              {/* call submenu function here */}
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AccordianMenu;