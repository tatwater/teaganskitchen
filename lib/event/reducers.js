import { actionTypes } from './actions'

export const initialState = {
  response: '',
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.RESPOND:
      return {
        ...state,
        ...{ response: action.response === state.response ? '' : action.response },
      };
    default:
      return state;
  }
}

export default reducer;
