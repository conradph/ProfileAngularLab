import { Injectable } from '@angular/core';
import { profile } from './profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileServiceService {

  constructor() { 
    this.userProfile = new profile("Default Guy", "123-456-7890", "Info info Info info")
  }

  userProfile: profile;
  getUserProfile(){
    return this.userProfile;
  }
  setUserProfile(name:string, contactInfo:string, bio:string){
    this.userProfile = new profile(name, contactInfo, bio);
  }
}
