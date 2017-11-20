import { combineReducers } from 'redux';
import ComicsReducer from './reducer_comics';
import SearchReducer from './reducer_search';
import LoadingReducer from './reducer_loading';
import UpVotesReducer from './reducer_upvotes';
import DetailsReducer from './reducer_details';
import ModalReducer from './reducer_modal';

const rootReducer = combineReducers({
  comics: ComicsReducer,
  search_term: SearchReducer,
  up_votes: UpVotesReducer,
  loading: LoadingReducer,
  details: DetailsReducer,
  show_modal: ModalReducer,
});

export default rootReducer;