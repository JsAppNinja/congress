import { Section } from 'types/Section';
import { ContentfulGlobalSettings } from 'types/ContentfulGlobalSettings';

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
  | FetchMainContentAction
  | FetchMainContentPendingAction
  | FetchMainContentRejectedAction
  | FetchMainContentFulfilledAction
  | FetchGlobalContentAction
  | FetchGlobalContentPendingAction
  | FetchGlobalContentRejectedAction
  | FetchGlobalContentFulfilledAction;
