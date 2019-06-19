import React, { Component } from "react";
import ReactModal from "react-modal";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as ListsActions } from "../../../store/ducks/lists";

import "./styles.css";
import removeIcn from "../../../images/remove.svg";

const customStyles = {
  overlay: {
    backgroundColor: "rgb(153,153,153, 0.5)"
  },
  content: {
    margin: "auto",
    width: "30%",
    height: "20%",
    backgroundColor: "#F5F4F6",
    borderColor: "#170C3A"
  }
};

class RemoveTool extends Component {
  render() {
    return (
      <ReactModal
        appElement={document.getElementById("root")}
        isOpen={this.props.state.openModalRemove}
        style={customStyles}
      >
        <div id="removeModal">
          <div id="modalTitle">
            <img src={removeIcn} alt="Remove Tool" id="removeToolIcn" />
            <h1 id="title">Remove Tool</h1>
          </div>

          <p id="confirmText">
            {`Are you sure you want to remove ${this.props.state.toolName} ?`}
          </p>

          <div id="rmvModalButtons">
            <button
              id="btnRemoveTool"
              onClick={() =>
                this.props.removeToolRequest(this.props.state.toolID)
              }
            >
              Yes, remove
            </button>
            <button id="btnCancel" onClick={this.props.closeModalRemove}>
              Cancel
            </button>
          </div>
        </div>
      </ReactModal>
    );
  }
}

const mapStateToProps = state => ({
  state: state.lists
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(ListsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RemoveTool);
