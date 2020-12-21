import {
  Store,
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import { createGlobalReducer } from '@Reducers/global';
import { createMessageReducer } from '@Reducers/message';
import { CreateStoreParams } from './types';

function createAppStore(params: CreateStoreParams): Store {
  const { initialState } = params;
  return reduxCreateStore(
    combineReducers({
      global: createGlobalReducer({
        initialState: initialState.global,
      }),
      message: createMessageReducer({
        initialState: initialState.message,
      }),
    }),
    applyMiddleware(thunk),
  );
}

export default createAppStore;
