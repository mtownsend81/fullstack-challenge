import { SHOW_MODAL } from '../actions/index';

export default function(state = null, action) {
  switch(action.type) {
    case SHOW_MODAL:
      return action.payload.data[0];
    default:
      return state;
  }
}