/*
 * Types
 */

export const Types = {
  GET_REQUEST: "lists/GET_REQUEST",
  GET_SUCCESS: "lists/GET_SUCCESS",
  GET_FAILURE: "lists/GET_FAILURE",
  OPEN_MODAL_ADD: "lists/OPEN_MODAL_ADD",
  OPEN_MODAL_REMOVE: "lists/OPEN_MODAL_REMOVE",
  CLOSE_MODAL_REMOVE: "lists/CLOSE_MODAL_REMOVE",
  REMOVE_REQUEST: "lists/REMOVE_REQUEST",
  REMOVE_SUCCESS: "lists/REMOVE_SUCCESS",
  REMOVE_FAILURE: "lists/REMOVE_FAILURE",
  SEARCH_REQUEST: "lists/SEARCH_REQUEST"
};

const INITIAL_STATE = {
  data: [],
  error: null,
  loading: false,
  openModalAdd: false,
  openModalRemove: false,
  toolID: null,
  toolName: null
};

export default function lists(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return {
        ...state,
        loading: true,
        erro: null,
        openModalAdd: false,
        openModalRemove: false
      };
    case Types.GET_SUCCESS:
      return {
        ...state,
        loading: false,
        data: [...action.payload.data],
        error: null
      };
    case Types.GET_FAILURE:
      return {
        ...state,
        openModalAdd: false,
        loading: false,
        error: action.payload.error
      };
    case Types.OPEN_MODAL_ADD:
      return { ...state, openModalAdd: true };
    case Types.OPEN_MODAL_REMOVE:
      return {
        ...state,
        openModalRemove: true,
        toolID: action.payload.id,
        toolName: action.payload.title
      };
    case Types.CLOSE_MODAL_REMOVE:
      return {
        ...state,
        openModalRemove: false,
        loading: false,
        toolID: null,
        toolName: null
      };
    case Types.REMOVE_REQUEST:
      return { ...state, loading: true, openModalRemove: true };
    case Types.REMOVE_SUCCESS:
      return {
        ...state,
        loading: false,
        openModalRemove: false,
        error: null
      };
    case Types.REMOVE_FAILURE:
      return {
        ...state,
        loading: false,
        openModalRemove: true,
        error: action.payload.error
      };
    case Types.SEARCH_REQUEST:
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload.data
      };
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

  openModalAdd: () => ({
    type: Types.OPEN_MODAL_ADD
  }),

  openModalRemove: (id, title) => ({
    type: Types.OPEN_MODAL_REMOVE,
    payload: { id, title }
  }),

  closeModalRemove: () => ({
    type: Types.CLOSE_MODAL_REMOVE
  }),

  searchToolRequest: (seachType, text) => ({
    type: Types.SEARCH_REQUEST,
    payload: { seachType, text }
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
  })
};
