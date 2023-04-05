import { Injectable } from '@angular/core';
import { OAuthService,AuthConfig  } from 'angular-oauth2-oidc';
import { Subject } from 'rxjs';

const oAuthConfig: AuthConfig = {
  issuer: 'https://accounts.google.com',
  strictDiscoveryDocumentValidation: false,
  redirectUri: window.location.origin,
  clientId: '475117923463-dsdc2drm2rieuvnpkgb4same5mdco1ii.apps.googleusercontent.com',
  scope: 'openid profile email'
}

export interface UserInfo{
  info:{
    sub:string,
    name:string,
    email:string,
    picture:string
  }
}

@Injectable({
  providedIn: 'root'
})

export class GoogleApiService {

  userProfileSubject? = new Subject<UserInfo>()

  constructor(private readonly oAuthService: OAuthService) {
    oAuthService.configure(oAuthConfig)
    oAuthService.logoutUrl = 'https://www.google.com/accounts/Logout'
    oAuthService.loadDiscoveryDocument().then( ()=> {
      oAuthService.tryLoginImplicitFlow().then ( ()=> {
        if(!oAuthService.hasValidAccessToken()){
          oAuthService.initLoginFlow()
        } else {
            oAuthService.loadUserProfile().then( (userProfile)=>{
             this.userProfileSubject?.next(userProfile as UserInfo)
            })
        }
      })
    })
   }

   signOut(){
    return this.oAuthService.logOut()
   }
   isLoggedIn(){
    return this.oAuthService.hasValidAccessToken()
   }
}
