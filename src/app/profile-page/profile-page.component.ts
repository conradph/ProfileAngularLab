import { Component, OnInit } from '@angular/core';
import { profile } from '../profile';
import { ProfileServiceService } from '../profile-service.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  constructor(private profileService:ProfileServiceService) { }
  profile:profile = this.profileService.getUserProfile();

  ngOnInit(): void {
  }

}
