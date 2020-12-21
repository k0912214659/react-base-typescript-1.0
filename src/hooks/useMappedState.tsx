import { useSelector } from 'react-redux';
import { StoreState } from '@Reducers/types';

export default function useMappedState<T>(mapState: (state: StoreState) => T, equalityFn?: (left: T, right: T) => boolean): T {
  return useSelector<StoreState, T>(mapState, equalityFn);
}
