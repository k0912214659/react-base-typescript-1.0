import { Reducer } from 'redux';
import produce from 'immer';
import MESSAGE_ACTION from '@Reducers/_Constants/Message';
import { CreateMessageReducerParams, MessageActionTypes, MessageState } from './types';

export function createMessageReducer(params: CreateMessageReducerParams): Reducer<MessageState, MessageActionTypes> {
  return (
    state = params.initialState,
    action: MessageActionTypes,
  ): MessageState => produce(state, (_draft) => {
    const draft = _draft;
    switch (action.type) {
      case MESSAGE_ACTION.SET_MESSAGE_INITIALIZE:
        draft.initialize();
        break;
      case MESSAGE_ACTION.SET_MESSAGE_DIALOG:
        draft.updateMessageDialogList(action.dialog);
        break;
      case MESSAGE_ACTION.REMOVE_MESSAGE_DIALOG:
        draft.removeMessageDialog();
        break;
      case MESSAGE_ACTION.SET_MESSAGE_CONFIRM:
        draft.updateMessageConfirmList(action.confirm);
        break;
      case MESSAGE_ACTION.REMOVE_MESSAGE_CONFIRM:
        draft.removeMessageConfirm();
        break;
      default:
        break;
    }
  });
}
