import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';

const routes: Routes = [
  {path:'profile-page', component:ProfilePageComponent},
  {path:'edit-profile', component:EditProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
