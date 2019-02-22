import { actions } from './actions';

const initialState = { translation: '', translationLoading: false };

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_TRANSLATION:
      return {
        ...state,
        translationLoading: true
      };
    case actions.GET_TRANSLATION_SUCCESS:
      return {
        ...state,
        translation: action.payload,
        translationLoading: false
      };
    case actions.GET_TRANSLATION_FAILURE:
      return {
        ...state,
        translationLoading: false
      };
    default:
      return state;
  }
}

export default reducer;