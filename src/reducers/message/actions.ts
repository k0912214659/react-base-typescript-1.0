import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { StoreState } from '@Reducers/types';
import MESSAGE_ACTION from '@Reducers/_Constants/Message';
import {
  ActionMessageDialogObject,
  ActionMessageConfirmObject,
  SetMessageDialogAction,
  SetMessageConfirmAction,
  RemoveMessageDialogAction,
  RemoveMessageConfirmAction,
} from './types';

/* Dialog */
export const SET_MESSAGE_DIALOG = ({ dialog }: { dialog: ActionMessageDialogObject }): SetMessageDialogAction => ({
  type: MESSAGE_ACTION.SET_MESSAGE_DIALOG,
  dialog,
});
export const REMOVE_MESSAGE_DIALOG = (): RemoveMessageDialogAction => ({
  type: MESSAGE_ACTION.REMOVE_MESSAGE_DIALOG,
});

/* Confirm */
export const SET_MESSAGE_CONFIRM = ({ confirm }: { confirm: ActionMessageConfirmObject }): SetMessageConfirmAction => ({
  type: MESSAGE_ACTION.SET_MESSAGE_CONFIRM,
  confirm,
});
export const REMOVE_MESSAGE_CONFIRM = (): RemoveMessageConfirmAction => ({
  type: MESSAGE_ACTION.REMOVE_MESSAGE_CONFIRM,
});

/* Dialog Action */
export const postMessageDialog = (data: ActionMessageDialogObject): ThunkAction<Promise<void>, StoreState, unknown, {type: string}> => async (
  dispatch: Dispatch,
): Promise<void> => {
  dispatch(SET_MESSAGE_DIALOG({
    dialog: data,
  }));
};
export const removeMessageDialog = (): ThunkAction<Promise<void>, StoreState, unknown, {type: string}> => async (
  dispatch: Dispatch,
): Promise<void> => {
  dispatch(REMOVE_MESSAGE_DIALOG());
};

/* Confirm Action */
export const postMessageConfirm = (data: ActionMessageConfirmObject): ThunkAction<Promise<void>, StoreState, unknown, {type: string}> => async (
  dispatch: Dispatch,
): Promise<void> => {
  dispatch(SET_MESSAGE_CONFIRM({
    confirm: data,
  }));
};
export const removeMessageConfirm = (): ThunkAction<Promise<void>, StoreState, unknown, {type: string}> => async (
  dispatch: Dispatch,
): Promise<void> => {
  dispatch(REMOVE_MESSAGE_CONFIRM());
};
