import Global from '@Models/Redux/Global';
import Message from '@Models/Redux/Message';
import { StoreState } from '../_InitializeStore/types';

function createInitial(): StoreState {
  return {
    global: new Global(),
    message: new Message(),
  };
}

export default createInitial;
