import { Component, OnInit } from '@angular/core';
import { profile } from '../profile';
import { ProfileServiceService } from '../profile-service.service';
@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  constructor(private profileService: ProfileServiceService) {
    this.userProfile = this.profileService.getUserProfile();
   }
  userProfile:profile;

  ngOnInit(): void {
    
  }
  edit(): void {
    let name = (<HTMLInputElement>document.getElementById("name")).value;
    let contactInfo = (<HTMLInputElement>document.getElementById("contactInfo")).value;
    let bio = (<HTMLInputElement>document.getElementById("bio")).value;
    this.profileService.setUserProfile(name, contactInfo, bio);
    this.userProfile = this.profileService.getUserProfile();
  }


}
