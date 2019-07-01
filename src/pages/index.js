import React, { Component } from "react";
import PropTypes from "prop-types";
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
  static propTypes = {
    getListRequest: PropTypes.func.isRequired,
    tools: PropTypes.shape({
      message: PropTypes.string,
      error: PropTypes.string,
      data: PropTypes.arrayOf(
        PropTypes.shape({
          description: PropTypes.string,
          id: PropTypes.number.isRequired,
          link: PropTypes.string,
          title: PropTypes.string,
          tags: PropTypes.array
        })
      ).isRequired
    }).isRequired,
    searchToolRequest: PropTypes.func.isRequired,
    openModalAdd: PropTypes.func.isRequired
  };

  state = {
    searchType: "q",
    text: ""
  };

  componentWillMount() {
    this.props.getListRequest();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.text !== this.state.text) {
      this.handleSearch();
    }

    if (this.props.tools.message !== null) {
      toast.success(this.props.tools.message);
      this.props.getListRequest();
    } else if (this.props.tools.error !== null) {
      toast.error(this.props.tools.error);
      this.props.getListRequest();
    }
  }

  handleChekboxChange = () => {
    if (this.state.searchType === "q") {
      this.setState({ ...this.state, searchType: "tags_like" });
    } else {
      this.setState({ ...this.state, searchType: "q" });
    }
  };

  handleSearch = event => {
    if (typeof event !== "undefined") event.preventDefault();
    this.props.searchToolRequest(this.state.searchType, this.state.text);
  };

  render() {
    return (
      <div id="container">
        <div id="main">
          <div id="header">
            <h1>VUTTR</h1>
            <p id="subtitle">Very Useful Tools to Remember</p>
          </div>
          <div id="tools">
            <form
              onSubmit={e => {
                this.handleSearch(e);
              }}
            >
              <input
                type="text"
                id="search"
                placeholder="search"
                onChange={e => {
                  this.setState({ text: e.target.value });
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

        {this.props.tools.data.map(tool => (
          <List key={tool.id} tool={tool} />
        ))}

        <AddTool />
        <RemoveTool />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tools: state.lists
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...ListsActions, ...ModalActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
