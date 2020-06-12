import React, { Component } from "react";
class AccordionMenu extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.items == undefined 
          || this.props.items.length == 0 
          || this.props.items == null ) {
      return null;
    } else {
      let items = this.props.items.map(( item, idx ) => {
        return (
          <tr key={ idx }>
            <td key={ 0 }>{item.description}</td><td className="text-right"> ${item.price}</td>
          </tr>
        )
      });
      return (
        // {/* Accordion Below! */ }
        <div id="accordion">
          <div className="card">

            <div className="card-header" id="headingOne">
              <button className="btn btn-link" data-toggle="collapse" data-target={"#collapse"+this.props.name} aria-expanded="true" aria-controls={"collapse"+this.props.name}>
                {this.props.title}</button>
            </div>

            <div id={"collapse"+this.props.name} className="collapse" aria-labelledby="headingOne" data-parent="#accordion">

              <div className="card-body">
                <div>
                  <table className="table table-striped p-5">
                    {/* <table className="table table-striped w-50 p-3"> */}
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
    }
  }
}

export default AccordionMenu;
