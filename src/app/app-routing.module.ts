import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AppBodyComponent } from './components/app-body/app-body.component';



const routes: Routes = [
{path: 'user', component: UserComponent},
{path: 'app-profile/:id', component: ProfileComponent},
{path: '', component: AppBodyComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes),HttpClientModule],
  exports: [RouterModule]

})
export class AppRoutingModule { }
