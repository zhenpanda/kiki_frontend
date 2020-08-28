import { APP } from '../actions/utility/types';

export default (state={}, action) => {
  switch (action.type) {
    case APP:
      return {...state, data: action.payload.app};
    default: return state;
  }
}