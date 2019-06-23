/*
 * Types
 */

export const Types = {
  GET_REQUEST: "lists/GET_REQUEST",
  GET_SUCCESS: "lists/GET_SUCCESS",
  GET_FAILURE: "lists/GET_FAILURE",
  ADD_TOOL_REQUEST: "lists/ADD_TOOL_REQUEST",
  ADD_TOOL_SUCCESS: "lists/ADD_TOOL_SUCCESS",
  ADD_TOOL_FAILURE: "lists/ADD_TOOL_FAILURE",
  REMOVE_REQUEST: "lists/REMOVE_REQUEST",
  REMOVE_SUCCESS: "lists/REMOVE_SUCCESS",
  REMOVE_FAILURE: "lists/REMOVE_FAILURE",
  SEARCH_REQUEST: "lists/SEARCH_REQUEST",
  SEARCH_RESULT: "lists/SEARCH_RESULT"
};

const INITIAL_STATE = {
  data: [],
  error: null,
  message: null
};

export default function lists(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_SUCCESS:
      return {
        data: action.payload.data,
        error: null,
        message: null
      };
    case Types.GET_FAILURE:
      return { ...state, error: action.payload.error };
    case Types.REMOVE_SUCCESS:
      return { ...state, error: null, message: "Tool removed successfully" };
    case Types.REMOVE_FAILURE:
      return {
        ...state,
        message: null,
        error: `Error: ${action.payload.error.message}`
      };
    case Types.SEARCH_RESULT:
      return { ...state, data: action.payload.data };
    case Types.ADD_TOOL_SUCCESS:
      return {
        error: null,
        message: "Tool added successfully",
        data: [...state.data, action.payload.data]
      };
    case Types.ADD_TOOL_FAILURE:
      return { ...state, message: null, error: action.payload.error };
    default:
      return state;
  }
}

export const Creators = {
  getListRequest: () => ({ type: Types.GET_REQUEST }),

  getListSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: { data }
  }),

  getListFailure: error => ({
    type: Types.GET_FAILURE,
    payload: { error }
  }),

  addNewToolRequest: data => ({
    type: Types.ADD_TOOL_REQUEST,
    payload: { data }
  }),

  addNewToolSuccess: data => ({
    type: Types.ADD_TOOL_SUCCESS,
    payload: { data }
  }),

  addNewToolFailure: error => ({
    type: Types.ADD_TOOL_FAILURE,
    payload: { error }
  }),

  removeToolRequest: id => ({
    type: Types.REMOVE_REQUEST,
    payload: { id }
  }),

  removeToolSuccess: () => ({
    type: Types.REMOVE_SUCCESS
  }),

  removeToolFailure: error => ({
    type: Types.REMOVE_FAILURE,
    payload: { error }
  }),

  searchToolRequest: (seachType, text) => ({
    type: Types.SEARCH_REQUEST,
    payload: { seachType, text }
  }),

  searchToolResult: data => ({
    type: Types.SEARCH_RESULT,
    payload: { data }
  })
};
