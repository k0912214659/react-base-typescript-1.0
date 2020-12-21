import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { StoreState } from '@Reducers/types';
import GLOBAL_ACTION from '@Reducers/_Constants/Global';
import {
  SetGlobalLoadingAction,
} from './types';

/* Global */
export const SET_GLOBAL_LOADING = ({ loading }: { loading: boolean }): SetGlobalLoadingAction => ({
  type: GLOBAL_ACTION.SET_GLOBAL_LOADING,
  loading,
});

/* Global Action */
export const postGlobalLoading = (loading: boolean): ThunkAction<Promise<void>, StoreState, unknown, {type: string}> => async (
  dispatch: Dispatch,
): Promise<void> => {
  dispatch(SET_GLOBAL_LOADING({
    loading,
  }));
};
