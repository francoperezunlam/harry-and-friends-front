import api from '../config/api';

export const getTranslation =  (text, textLanguage, translationLanguage) =>
  api.get('v1/translations/', {
    text,
    textLanguage,
    translationLanguage
  });
