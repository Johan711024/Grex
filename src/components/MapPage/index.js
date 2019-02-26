import React, { Component } from "react";
import { compose } from "recompose";

import { AuthUserContext, withAuthorization } from "../Session";
import { withFirebase } from "../Firebase";
//import Located from "../Geolocated";
import LocatedTwo from "../Geolocated";
import Modal from '../Modal';


class MapPage extends Component {

  state = {
    showModal : true,
  }
  onBackdropClicked = () => {
    const { showModal } = this.state;
    this.setState({showModal : false})
  }

  render() {
    return (
      <div>

      <Modal show={this.state.showModal} modalClosed={this.onBackdropClicked}>hello</Modal>
      
        <h1>Map</h1>
        <AuthUserContext.Consumer>
          {authUser => (
            <LocatedTwo userId={authUser.uid} />
          )}
        </AuthUserContext.Consumer>
      </div>
    );
  }
}


const condition = authUser => !!authUser;

export default compose(
  withFirebase,
  withAuthorization(condition)
)(MapPage);
