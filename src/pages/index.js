import React, { Component } from "react";
import List from "../components/list";
import AddTool from "../components/modals/addTool";
import RemoveTool from "../components/modals/removeTool";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as ListsActions } from "../store/ducks/lists";
import { Creators as ModalActions } from "../store/ducks/modalActions";

import "./styles.css";

//Mensagens de erro/sucesso
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class Main extends Component {
  state = {
    searchType: "q",
    text: ""
  };

  componentWillMount() {
    this.props.getListRequest();
    console.log("request");
  }

  componentWillUpdate() {
    if (this.props.tools.message !== null) {
      toast.success(this.props.tools.message);
    } else if (this.props.tools.message !== null) {
      toast.error(this.props.tools.error);
    }
  }

  handleChekboxChange = () => {
    if (this.state.searchType === "q") {
      this.setState({ ...this.state, searchType: "tags_like" });
    } else {
      this.setState({ ...this.state, searchType: "q" });
    }
  };

  handleSearch = () => {
    this.props.searchToolRequest(this.state.searchType, this.state.text);
  };

  render() {
    return (
      <div id="container">
        <div id="main">
          <div id="header">
            <h1>VUTTR</h1>
            <p id="subtitle">Very Useful Tools to Remenber</p>
          </div>
          <div id="tools">
            <form onSubmit={this.handleSearch}>
              <input
                type="text"
                id="search"
                placeholder="search"
                onChange={e => {
                  this.setState({
                    text: e.target.value
                  });
                }}
              />
            </form>
            <div id="check">
              <input
                type="checkbox"
                id="chkTag"
                onClick={this.handleChekboxChange}
              />
              <label htmlFor="chkTag" id="chkDescription">
                search in tags only
              </label>
            </div>
            <button
              type="submit"
              id="btnNewTool"
              onClick={this.props.openModalAdd}
            >
              <span>Add</span>
            </button>
          </div>
        </div>
        {this.props.data.map(tool => (
          <List key={tool.id} tool={tool} />
        ))}

        <AddTool />
        <RemoveTool />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.data
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...ListsActions, ...ModalActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
