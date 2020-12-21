import { useDispatch as BaseUseDispatch } from 'react-redux';
import { Action, AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { StoreState } from '@Reducers/types';

export type UseDispatch<T extends Action = AnyAction> = () => ThunkDispatch<StoreState, {}, T>;
const useDispatch: UseDispatch = BaseUseDispatch;

export default useDispatch;
