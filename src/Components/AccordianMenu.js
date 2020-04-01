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
                  {/* //this.props.menuItems.map <tr> item.description item.price</tr> */}

                    <tr key={ 0 }>
                      { this.props.menuItems.map(( menu_items, idx ) => {
                        return <td key={ 0 }>menu_items.description, menu_items.price</td>
                      })}
                    </tr>

                  </tbody>
                </table>
              </div>
              Temp text of menu for test. Properly rendered menu should appear above! 
              accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AccordianMenu;