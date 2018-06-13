import _ from 'lodash';
import { CHAT_UPDATED } from '../actions/types';

export const CHAT_INITIAL_STATE = {
  chatList: [],
};

export default (state = CHAT_INITIAL_STATE, action) => {
  switch (action.type) {
    case CHAT_UPDATED:
      const copy = _.map(state.chatList, _.clone);
      copy.push(action.payload);
      return { ...state, chatList: copy };
    default:
      return state;
  }
};
