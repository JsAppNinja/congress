import { Action } from 'types/Redux';
import { ContentfulGlobalSettings } from 'types/ContentfulGlobalSettings';

export interface ContentReducer {
  global: ContentfulGlobalSettings;
}

const initialState: ContentReducer = {
  global: {
    sections: [],
    mainHeader: '',
    mainSubheader: '',
    mainParagraph: '',
    mainPhoto: null,
    mainSlogan: null,
    donateUrl: '',
    facebookUrl: '',
    instagramUrl: '',
    twitterUrl: ''
  }
};

export default (
  state: ContentReducer = initialState,
  action: Action
): ContentReducer => {
  switch (action.type) {
    case 'FETCH_GLOBAL_CONTENT_FULFILLED':
      return { ...state, global: action.payload };

    default:
      return state;
  }
};
