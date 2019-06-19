/*
 * Types
 */

export const Types = {
  ADD_TOOL_REQUEST: "list/ADD_TOOL_REQUEST",
  ADD_TOOL_SUCCESS: "list/ADD_TOOL_SUCCESS",
  ADD_TOOL_FAILURE: "list/ADD_TOOL_FAILURE"
};

const INITIAL_STATE = {
  data: [],
  error: null,
  loading: false,
  openModal: false
};

export default function lists(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_TOOL_REQUEST:
      return { ...state, openModal: true, loading: true, erro: null };
    case Types.ADD_TOOL_SUCCESS:
      return {
        ...state,
        openModal: false,
        loading: false,
        erro: null,
        data: action.payload.data
      };
    case Types.ADD_TOOL_FAILURE:
      return {
        ...state,
        openModal: true,
        loading: false,
        erro: action.payload.error
      };
    default:
      return state;
  }
}

export const Creators = {
  addNewToolRequest: state => ({
    type: Types.ADD_TOOL_REQUEST,
    payload: { state }
  }),

  addNewToolSuccess: data => ({
    type: Types.ADD_TOOL_SUCCESS,
    payload: { data }
  }),

  addNewToolFailure: error => ({
    type: Types.ADD_TOOL_FAILURE,
    payload: { error }
  })
};
