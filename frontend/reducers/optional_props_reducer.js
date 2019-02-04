import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions'

const optionalPropsReducer = (state = null, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return action.optional_props;
    case CLOSE_MODAL:
      return null;
    default:
      return state;
  }
}

export default optionalPropsReducer