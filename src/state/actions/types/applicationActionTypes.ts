export interface InitializeApplicationAction {
  type: 'INITIALIZE_APPLICATION';
}

export interface InitializeApplicationPendingAction {
  type: 'INITIALIZE_APPLICATION_PENDING';
}

export interface InitializeApplicationRejectedAction {
  type: 'INITIALIZE_APPLICATION_REJECTED';
  payload: Error;
}

export interface InitializeApplicationFulfilledAction {
  type: 'INITIALIZE_APPLICATION_FULFILLED';
}

export type ApplicationAction =
  | InitializeApplicationAction
  | InitializeApplicationPendingAction
  | InitializeApplicationRejectedAction
  | InitializeApplicationFulfilledAction;
