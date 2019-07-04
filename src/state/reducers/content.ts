import { Action } from 'types/Redux';
import { Section } from 'types/Section';
import { ContentfulGlobalSettings } from 'types/ContentfulGlobalSettings';

export interface ContentReducer {
  sections: Section[] | null;
  global: ContentfulGlobalSettings;
}

const initialState: ContentReducer = {
  sections: null,
  global: {
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
    case 'FETCH_MAIN_CONTENT_FULFILLED':
      return { ...state, sections: action.payload };
    case 'FETCH_GLOBAL_CONTENT_FULFILLED':
      return { ...state, global: action.payload };

    default:
      return state;
  }
};
