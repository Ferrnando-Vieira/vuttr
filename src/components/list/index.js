import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as ModalActions } from "../../store/ducks/modalActions";

import "./styles.css";

const List = ({ tool, openModalRemove }) => (
  <div id="listBox">
    <div className="listHeader">
      <a href={tool.link} target="_blank" rel="noopener noreferrer">
        {tool.title}
      </a>
      <button
        className="remove"
        onClick={() => {
          openModalRemove(tool.id, tool.title);
        }}
      >
        remove
      </button>
    </div>
    <p className="description">{tool.description}</p>
    <p className="tags">
      {tool.tags.length > 1 && tool.tags.map(tag => `#${tag} `)}
    </p>
  </div>
);

List.propTypes = {
  tool: PropTypes.shape({
    description: PropTypes.string,
    id: PropTypes.number.isRequired,
    link: PropTypes.string,
    title: PropTypes.string,
    tags: PropTypes.array
  }).isRequired,
  openModalRemove: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(ModalActions, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(List);
