import React, { Component } from "react";
import { faTrademark, faCocktail, faLungsVirus, faCloudMeatball, faFlushed } from "@fortawesome/free-solid-svg-icons";
import { faGrav } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class NavMenu extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="text-center">
        <a href="#" type="button" className="btn btn-info">Special A</a>
        <button type="button" className="btn btn-success">Special B</button>
        
        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li className="nav-item">
            <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">
              Drink Special<FontAwesomeIcon icon={faCocktail} /></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">
              Daily Special<FontAwesomeIcon icon={faLungsVirus} /></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">
              Normal Special
              <FontAwesomeIcon icon={faCloudMeatball} /></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="pills-haggis-tab" data-toggle="pill" href="#pills-haggis" role="tab" aria-controls="pills-haggis" aria-selected="false">
              Haggis
              <FontAwesomeIcon icon={faLungsVirus} /></a>
          </li>
        </ul>
        <div className="tab-content" id="pills-tabContent">
          <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">Drink special content</div>
          <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">Special Special content</div>
          <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">totally unspecial special content.</div>
          <div className="tab-pane fade" id="pills-haggis" role="tabpanel" aria-labelledby="pills-haggis-tab">Content: sheep's offal stuffed in its stomach.</div>
        </div>
      </div>
    );
  }
}

export default NavMenu;