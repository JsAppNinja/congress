import { ApplicationAction } from 'state/actions/types/applicationActionTypes';
import { ContentAction } from 'state/actions/types/contentActionTypes';
import { SignupAction } from 'state/actions/types/signupActionTypes';

export type Action = ApplicationAction | ContentAction | SignupAction;
