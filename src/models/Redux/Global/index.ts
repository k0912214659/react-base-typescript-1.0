import Immerable from '@Models/GeneralImmer';

class Global extends Immerable {
  public globalLoading: boolean;

  public constructor() {
    super();
    this.globalLoading = false;
  }

  public initialize(): void {
    this.globalLoading = false;
  }

  public updateGlobalLoading(newGlobalLoading: boolean): void {
    this.globalLoading = newGlobalLoading;
  }
}

export default Global;
