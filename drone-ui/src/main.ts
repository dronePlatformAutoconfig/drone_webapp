import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import Amplify, { Auth } from 'aws-amplify';
import amplify from './aws-exports';

console.log(amplify);

Amplify.configure({
  Auth: {

    // REQUIRED - Amazon Cognito Region
    region: 'eu-west-1',

    // OPTIONAL - Amazon Cognito Federated Identity Pool Region
    // Required only if it's different from Amazon Cognito Region
    identityPoolRegion: 'XX-XXXX-X',

    // OPTIONAL - Amazon Cognito User Pool ID
    userPoolId: 'eu-west-1_Szxvmp0m1',

    // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
    userPoolWebClientId: '276f3j5n0aj89hodvudai6jbgh',

    // OPTIONAL - Manually set the authentication flow type. Default is 'USER_SRP_AUTH'
    authenticationFlowType: 'USER_PASSWORD_AUTH',

    // OPTIONAL - Hosted UI configuration
    oauth: {
      domain: 'egor-os.auth.eu-west-1.amazoncognito.com',
      scope: ['phone', 'email', 'profile', 'openid', 'aws.cognito.signin.user.admin'],
      redirectSignIn: 'http://localhost:4200/',
      redirectSignOut: 'http://localhost:4200/',
      responseType: 'code' // or 'token', note that REFRESH token will only be generated when the responseType is code
    }
  }
});

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
