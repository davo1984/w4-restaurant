import React, { Component } from "react"

class NavMenu extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <a href="#" type="button" className="btn btn-info">Special A</a>
        <button type="button" className="btn btn-success">Special B</button>
        
        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li class="nav-item">
            <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">
              Drink Special<FontAwesomeIcon icon={faCocktail} /></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">
              Daily Special<FontAwesomeIcon icon={faLungsVirus} /></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">
              Normal Special
              <FontAwesomeIcon icon={faCloudMeatball} /></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">
              Haggis, not allowed to be sold in America for human consumption
              <FontAwesomeIcon icon={faLungsVirus} /></a>
          </li>
        </ul>
        <div class="tab-content" id="pills-tabContent">
          <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">Drink special content</div>
          <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">Special Special content</div>
          <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">totally unspecial special content.</div>
          <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">Content: sheep's offal stuffed in its stomach.</div>
        </div>
      </div>
    );
  }
}

export default NavMenu;