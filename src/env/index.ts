import Default from './Config/Default';
import Stage from './Config/Stage';
import Production from './Config/Production';
import { EnvConfig } from './types';

class Config {
  constructor() {
    this.initialize();
  }

  public env: EnvConfig = Default;

  initialize() {
    if (process.env.APP_ENV) {
      this.setEnv(process.env.APP_ENV);
    }
  }

  setEnv(env: string) {
    switch (env) {
      case 'prod':
      case 'production':
      case 'product':
        this.env = Production;
        break;
      case 'stage':
        this.env = Stage;
        break;
      default:
        this.env = Default;
        break;
    }
  }

  getEnv() {
    return this.env;
  }

  get HostApiUrl() {
    return this.env.APIUrl;
  }

  get HostUrl() {
    return this.env.EnvUrl;
  }

  get TokenLocalStorageName() {
    return this.env.JwtTokenLocalName;
  }

  get I18nLocalStorageName() {
    return this.env.I18nLocalName;
  }
}

export default Config;
