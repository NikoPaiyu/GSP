import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GspLoginComponent } from 'src/app/gsp-login/gsp-login.component';
import { GspHomeComponent } from 'src/app/gsp-home/gsp-home.component';

const routes: Routes = [
{
  path : '',
  component: GspHomeComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
