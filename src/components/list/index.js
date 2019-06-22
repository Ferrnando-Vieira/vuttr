import React from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as ModalActions } from "../../store/ducks/modalActions";

import "./styles.css";

const List = ({ tool, openModalRemove }) => (
  <div id="listBox" key={tool.id}>
    <div className="listHeader">
      <a href={tool.link} target="_blank" rel="noopener noreferrer">
        {tool.title}
      </a>
      <button
        className="remove"
        onClick={() => openModalRemove(tool.id, tool.title)}
      >
        remove
      </button>
    </div>
    <p className="description">{tool.description}</p>
    <p className="tags">{tool.tags.map(tag => `#${tag} `)}</p>
  </div>
);

const mapDispatchToProps = dispatch =>
  bindActionCreators(ModalActions, dispatch);

export default connect(mapDispatchToProps)(List);
