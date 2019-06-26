import { Section } from 'types/Section';

export interface FetchMainContentAction {
  type: 'FETCH_MAIN_CONTENT';
}

export interface FetchMainContentPendingAction {
  type: 'FETCH_MAIN_CONTENT_PENDING';
}

export interface FetchMainContentRejectedAction {
  type: 'FETCH_MAIN_CONTENT_REJECTED';
  payload: Error;
}

export interface FetchMainContentFulfilledAction {
  type: 'FETCH_MAIN_CONTENT_FULFILLED';
  payload: Section[];
}

export type ContentAction =
  | FetchMainContentAction
  | FetchMainContentPendingAction
  | FetchMainContentRejectedAction
  | FetchMainContentFulfilledAction;
