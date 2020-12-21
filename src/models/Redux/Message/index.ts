import Immerable from '@Models/GeneralImmer';
import cloneDeep from 'lodash/cloneDeep';
import {
  MessageDialogObject,
  MessageDialogList,
  MessageConfirmObject,
  MessageConfirmList,
} from './types';

class Message extends Immerable {
  public messageDialogList: MessageDialogList;

  public messageConfirmList: MessageConfirmList;

  public constructor() {
    super();
    this.messageDialogList = {
      list: [],
    };
    this.messageConfirmList = {
      list: [],
    };
    this.initialize();
  }

  public initialize(): void {
    this.messageDialogList = {
      list: [],
    };
    this.messageConfirmList = {
      list: [],
    };
  }

  public updateMessageDialogList(newMessageDialogObject: MessageDialogObject): void {
    const newCloneMessageDialogObject = cloneDeep(newMessageDialogObject);
    const newCloneMessageDialogList = cloneDeep(this.messageDialogList);
    newCloneMessageDialogList.list.push(newCloneMessageDialogObject);
    this.messageDialogList = newCloneMessageDialogList;
  }

  public removeMessageDialog(): void {
    const newCloneMessageDialogList = cloneDeep(this.messageDialogList.list);
    const newSliceDialogList = newCloneMessageDialogList.slice(1);
    this.messageDialogList.list = newSliceDialogList;
  }

  public updateMessageConfirmList(newMessageConfirmObject: MessageConfirmObject): void {
    const newCloneMessageConfirmObject = cloneDeep(newMessageConfirmObject);
    const newCloneMessageConfirmList = cloneDeep(this.messageConfirmList);
    newCloneMessageConfirmList.list.push(newCloneMessageConfirmObject);
    this.messageConfirmList = newCloneMessageConfirmList;
  }

  public removeMessageConfirm(): void {
    const newCloneMessageConfirmList = cloneDeep(this.messageConfirmList.list);
    const newSliceConfirmList = newCloneMessageConfirmList.slice(1);
    this.messageConfirmList.list = newSliceConfirmList;
  }
}

export default Message;
