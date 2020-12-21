import React from 'react';

export interface MessageDialogObject {
  typeMessage: 'success' | 'warning' | 'info' | 'danger';
  typeTitle: string;
  typeContent?: string;
  onConfirm?: () => void;
}

export interface MessageDialogList {
  list: MessageDialogObject[];
}

export interface MessageConfirmObject {
  typeMessage: 'success' | 'warning' | 'info' | 'danger';
  typeTitle: string;
  typeContent: string | React.ReactElement;
  onConfirm?: () => void;
  onCancel?: () => void;
}

export interface MessageConfirmList {
  list: MessageConfirmObject[];
}
