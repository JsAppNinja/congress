import { ContentfulGlobalSettings } from 'types/ContentfulGlobalSettings';

export interface FetchGlobalContentAction {
  type: 'FETCH_GLOBAL_CONTENT';
}

export interface FetchGlobalContentPendingAction {
  type: 'FETCH_GLOBAL_CONTENT_PENDING';
}

export interface FetchGlobalContentRejectedAction {
  type: 'FETCH_GLOBAL_CONTENT_REJECTED';
  payload: Error;
}

export interface FetchGlobalContentFulfilledAction {
  type: 'FETCH_GLOBAL_CONTENT_FULFILLED';
  payload: ContentfulGlobalSettings;
}

export type ContentAction =
  | FetchGlobalContentAction
  | FetchGlobalContentPendingAction
  | FetchGlobalContentRejectedAction
  | FetchGlobalContentFulfilledAction;
