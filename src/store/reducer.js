import { CHANGE_USERINFO, CHANGE_USER_ID, CLEAR_USERINFO } from "./actionTypes";

import { setUserInfo } from "@/utils/cookies";

const defaultState = {
  user_id: null,
  userInfo: null,
};

export default (state = defaultState, action) => {
  let newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case CHANGE_USERINFO:
      setUserInfo(action.userInfo);
      newState.userInfo = action.userInfo;
    case CHANGE_USER_ID:
      newState.user_id = action.id;
    case CLEAR_USERINFO:
      newState.user_id = null;
      newState.userInfo =null;
    default:
      return newState;
  }
  return newState;
};