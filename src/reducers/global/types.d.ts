import GLOBAL_ACTION from '@Reducers/_Constants/Global';
import Global from '@Models/Redux/Global';

export type GlobalState = Global;

export interface CreateGlobalReducerParams {
  initialState: GlobalState;
}

export interface SetGlobalContentInitialAction {
  type: GLOBAL_ACTION.SET_GLOBAL_INITIALIZE;
}

export interface SetGlobalLoadingAction {
  type: GLOBAL_ACTION.SET_GLOBAL_LOADING;
  loading: boolean;
}

export type GlobalActionTypes = (
  SetGlobalContentInitialAction |
  SetGlobalLoadingAction
);
