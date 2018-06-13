import { CHAT_UPDATED } from './types';

export const addChatText = (name, message) => async (dispatch) => {
  dispatch({
    type: CHAT_UPDATED,
    payload: { name, message },
  });
  dispatch({
    type: CHAT_UPDATED,
    payload: { name: 'foo', message: 'bar' },
  });
};
