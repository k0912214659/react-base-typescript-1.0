import { useEffect, EffectCallback } from 'react';

export default function useDidMount(effect: EffectCallback): void {
  return useEffect(effect, []);
}
