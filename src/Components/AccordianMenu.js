import React, { Component } from "react";
class AccordianMenu extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.isLoaded) {
      let items = this.props.items.map(( item, idx ) => {
        return (
          <tr key={ idx }>
            <td key={ 0 }>{item.description}</td><td className="text-right"> ${item.price}</td>
          </tr>
        )
      });
      return (
        // {/* Accordian Below! */ }
        <div id="accordion">
          <div className="card">

            <div className="card-header" id="headingOne">
              <button className="btn btn-link" data-toggle="collapse" data-target={"#collapse"+this.props.name} aria-expanded="true" aria-controls={"collapse"+this.props.name}>
                {this.props.title}</button>
            </div>

            <div id={"collapse"+this.props.name} className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">

              <div className="card-body">
                <div>
                  <table className="table table-striped w-50 p-3">
                    <tbody>
                      {items}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default AccordianMenu;
