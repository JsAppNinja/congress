import { Action } from 'types/Redux';
import { Status } from 'types/Status';

export interface StatusReducer {
  initializeApplication: Status;
}

const initialState: StatusReducer = {
  initializeApplication: Status.IDLE
};

export default (
  state: StatusReducer = initialState,
  action: Action
): StatusReducer => {
  switch (action.type) {
    case 'INITIALIZE_APPLICATION_PENDING':
      return { ...state, initializeApplication: Status.PENDING };
    case 'INITIALIZE_APPLICATION_FULFILLED':
      return { ...state, initializeApplication: Status.FULFILLED };
    case 'INITIALIZE_APPLICATION_REJECTED':
      return { ...state, initializeApplication: Status.REJECTED };

    default:
      return state;
  }
};
