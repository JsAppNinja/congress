import { Action } from 'types/Redux';
import { Section } from 'types/Section';

export interface ContentReducer {
  sections: Section[] | null;
}

const initialState: ContentReducer = {
  sections: null
};

export default (
  state: ContentReducer = initialState,
  action: Action
): ContentReducer => {
  switch (action.type) {
    case 'FETCH_MAIN_CONTENT_FULFILLED':
      return { ...state, sections: action.payload };

    default:
      return state;
  }
};
