import { Store } from 'redux';

export interface StoreState {

}

export interface CreateStoreParams {
  initialStates: StoreState;
}

export type GetState = Store<StoreState>['getState'];
