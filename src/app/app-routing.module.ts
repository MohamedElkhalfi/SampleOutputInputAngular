import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayComponent } from './display/display.component';
import { VoterComponent } from './voter/voter.component';

const routes: Routes = [   { path : "voter", component : VoterComponent},
{ path : "display", component : DisplayComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
