import { SHOW_MODAL, HIDE_MODAL } from '../actions/index';

export default function(state = null, action) {
  switch(action.type) {
    case SHOW_MODAL:
      return true;
    case HIDE_MODAL:
      return false;
    default:
      return state;
  }
}