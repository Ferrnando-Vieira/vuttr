/*
 * Types
 */

export const Types = {
  OPEN_MODAL_ADD: "modals/OPEN_MODAL_ADD",
  CLOSE_MODAL_ADD: "modals/CLOSE_MODAL_ADD",
  OPEN_MODAL_REMOVE: "modals/OPEN_MODAL_REMOVE",
  CLOSE_MODAL_REMOVE: "modals/CLOSE_MODAL_REMOVE"
};

/*
 * State
 */
const INITIAL_STATE = {
  openModalAdd: false,
  openModalRemove: false,
  toolID: null,
  toolName: null
};

export default function modals(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.OPEN_MODAL_ADD:
      console.log("OPEN_MODAL_ADD");
      return { ...state, openModalAdd: true };
    case Types.CLOSE_MODAL_ADD:
      console.log("OPEN_MODAL_ADD");
      return { ...state, openModalAdd: false };
    case Types.OPEN_MODAL_REMOVE:
      console.log("OPEN_MODAL_REMOVE");
      return {
        ...state,
        openModalRemove: true,
        toolID: action.payload.id,
        toolName: action.payload.title
      };
    case Types.CLOSE_MODAL_REMOVE:
      console.log("CLOSE_MODAL_REMOVE");
      return { ...state, openModalRemove: false };
    default:
      return state;
  }
}

/*
 * Creators
 */

export const Creators = {
  openModalAdd: () => ({
    type: Types.OPEN_MODAL_ADD
  }),

  closeModalAdd: () => ({
    type: Types.CLOSE_MODAL_ADD
  }),

  openModalRemove: (id, title) => ({
    type: Types.OPEN_MODAL_REMOVE,
    payload: { id, title }
  }),

  closeModalRemove: () => ({
    type: Types.CLOSE_MODAL_REMOVE
  })
};
