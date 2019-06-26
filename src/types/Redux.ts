import { ApplicationAction } from 'state/actions/types/applicationActionTypes';
import { ContentAction } from 'state/actions/types/contentActionTypes';

export type Action = ApplicationAction | ContentAction;
