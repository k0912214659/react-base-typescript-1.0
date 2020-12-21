import { immerable } from 'immer';

export default class Immerable {
  protected [immerable] = true;
}
