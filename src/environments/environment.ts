//import {domain, clientId} from '../../auth_config.json';
import * as auth from '../../auth_config.json';
//This should be imported from the authConfig file, however it throws

//Should not import the named export 'domain' (imported as 'domain') from
//default -exporting module(only default export is available soon) angular

//Stack overflow says to change it to something like
//import * as packageInfo from '../../package.json';
//But that will throw the same error. And tsconfig already has
//"resolveJsonModule": true,
// "esModuleInterop": true,
// "allowSyntheticDefaultImports": true,
//So that's not the issue either.
//If anyone finds a fix for this, please remove the hardcoded values


export const environment = {
  production: false,
  apiURL: 'http://localhost:5000',
  auth: {
    "domain": "dev-beazcaxy.us.auth0.com",
    "clientId": "6Iewy037OUNolNG9Q7oS1pZCIZ6DakAs",
    // domain,
    // clientId,
    // domain: auth.domain,
    // clientId: auth.clientId,
    redirectUri: window.location.origin
  }
};


