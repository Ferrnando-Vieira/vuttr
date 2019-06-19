import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as ListsActions } from "../../store/ducks/lists";

import "./styles.css";

class List extends Component {
  componentWillMount() {
    this.props.getListRequest();
  }

  render() {
    return (
      <div>
        {this.props.tools.map(tool => (
          <div id="listBox" key={tool.id}>
            <div className="listHeader">
              <a href={tool.link} target="_blank" rel="noopener noreferrer">
                {tool.title}
              </a>
              <button
                className="remove"
                onClick={() => this.props.openModalRemove(tool.id, tool.title)}
              >
                remove
              </button>
            </div>
            <p className="description">{tool.description}</p>
            <p className="tags">{tool.tags.map(tag => "#" + tag + " ")}</p>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tools: state.lists.data
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(ListsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
