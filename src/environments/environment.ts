import {domain} from '../../auth_config.json';

export const environment = {
  production: false,
  auth:{
    redirectUri:window.location.origin 
  }
};

