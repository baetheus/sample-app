import * as pkg from '../../package.json';
import { environment as def } from './default.env';
import { environment as dev } from './development.env';
import { Environment } from './environment';
import { environment as prod } from './production.env';
import { environment as stage } from './staging.env';

let environment!: Environment;
const version = pkg.version || 'unknown';

switch (process.env.REACT_APP_BUILD_ENV) {
  case 'dev':
    environment = dev;
    break;
  case 'prod':
    environment = prod;
    break;
  case 'stage':
    environment = stage;
    break;
  default:
    environment = def;
}

export { environment, version };
