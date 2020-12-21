import Message from '@Models/Redux/Message';
import MESSAGE_ACTION from '@Reducers/_Constants/Message';
import {
  MessageDialogObject,
  MessageConfirmObject,
} from '@Models/Redux/Message/types';

export type MessageState = Message;

export type ActionMessageDialogObject = MessageDialogObject;

export type ActionMessageConfirmObject = MessageConfirmObject;

export interface CreateMessageReducerParams {
  initialState: MessageState;
}

export interface SetMessageContentInitialAction {
  type: MESSAGE_ACTION.SET_MESSAGE_INITIALIZE;
}

export interface SetMessageDialogAction {
  type: MESSAGE_ACTION.SET_MESSAGE_DIALOG;
  dialog: ActionMessageDialogObject;
}

export interface RemoveMessageDialogAction {
  type: MESSAGE_ACTION.REMOVE_MESSAGE_DIALOG;
}

export interface SetMessageConfirmAction {
  type: MESSAGE_ACTION.SET_MESSAGE_CONFIRM;
  confirm: ActionMessageConfirmObject;
}

export interface RemoveMessageConfirmAction {
  type: MESSAGE_ACTION.REMOVE_MESSAGE_CONFIRM;
}

export type MessageActionTypes = (
  SetMessageContentInitialAction |
  SetMessageDialogAction |
  RemoveMessageDialogAction |
  SetMessageConfirmAction |
  RemoveMessageConfirmAction
)
