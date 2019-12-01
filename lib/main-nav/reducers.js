import { actionTypes } from './actions'

export const initialState = {
  visible: false,
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.OPEN_MAIN_NAV:
      return {
        ...state,
        ...{ visible: true },
      };
    case actionTypes.CLOSE_MAIN_NAV:
      return {
        ...state,
        ...{ visible: false },
      };
    default:
      return state;
  }
}

export default reducer;
