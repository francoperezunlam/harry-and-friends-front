import * as TranslationService from '../../services/TranslationService';

export const actions = {
  GET_TRANSLATION: '@@TRANSLATION/GET_TRANSLATION',
  GET_TRANSLATION_SUCCESS: '@@TRANSLATION/GET_TRANSLATION_SUCCESS',
  GET_TRANSLATION_FAILURE: '@@TRANSLATION/GET_TRANSLATION_FAILURE'
};

const actionCreators = {
  getTranslation: (text, textLanguage, translationLanguage) => {
    return async dispatch => {
      dispatch({ type: actions.GET_TRANSLATION });
      const response = await TranslationService.getTranslation(text, textLanguage, translationLanguage);
      if (response.ok) {
        dispatch({
          type: actions.GET_TRANSLATION_SUCCESS,
          payload: response.data.text
        });
      } else {
        dispatch({
          type: actions.GET_TRANSLATION_FAILURE,
          payload: response.error
        });
      }
    }
  }
};

export default actionCreators;