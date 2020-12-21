import { Reducer } from 'redux';
import produce from 'immer';
import GLOBAL_ACTION from '@Reducers/_Constants/Global';
import { CreateGlobalReducerParams, GlobalActionTypes, GlobalState } from './types';

export function createGlobalReducer(params: CreateGlobalReducerParams): Reducer<GlobalState, GlobalActionTypes> {
  return (
    state = params.initialState,
    action: GlobalActionTypes,
  ): GlobalState => produce(state, (_draft) => {
    const draft = _draft;
    switch (action.type) {
      case GLOBAL_ACTION.SET_GLOBAL_INITIALIZE:
        draft.initialize();
        break;
      case GLOBAL_ACTION.SET_GLOBAL_LOADING:
        draft.updateGlobalLoading(action.loading);
        break;
      default:
        break;
    }
  });
}
