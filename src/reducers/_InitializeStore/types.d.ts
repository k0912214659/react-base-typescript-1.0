import { Store } from 'redux';
import { GlobalState } from '../global/types';
import { MessageState } from '../message/types';

export interface StoreState {
  global: GlobalState;
  message: MessageState;
}

export interface CreateStoreParams {
  initialState: StoreState;
}

export type GetState = Store<StoreState>['getState'];
