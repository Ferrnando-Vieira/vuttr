import React from "react";
import PropTypes from "prop-types";
import Highlighter from "react-highlight-words";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as ModalActions } from "../../store/ducks/modalActions";

import "./styles.css";

const List = ({ tool, search, openModalRemove }) => (
  <div id="listBox">
    <div className="listHeader">
      <a href={tool.link} target="_blank" rel="noopener noreferrer">
        <Highlighter
          searchWords={[search]}
          autoEscape={true}
          textToHighlight={tool.title}
        />
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
    <p className="description">
      <Highlighter
        searchWords={[search]}
        autoEscape={true}
        textToHighlight={tool.description}
      />
    </p>
    <p className="tagList">
      {tool.tags.length > 1 &&
        tool.tags.map(tag => (
          <Highlighter
            key={tag}
            className="tag"
            searchWords={[search]}
            autoEscape={true}
            textToHighlight={`#${tag}`}
          />
        ))}
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
  openModalRemove: PropTypes.func.isRequired,
  search: PropTypes.string
};

const mapStateToProps = state => ({
  search: state.lists.searchText
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(ModalActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
