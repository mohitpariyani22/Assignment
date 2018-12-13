import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Screen1Component } from './screen1/screen1.component';
import { Screen2Component } from './screen2/screen2.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/screen1',
    pathMatch: 'full',
  },
  {
    path: 'screen1',
    component: Screen1Component
  },
  {
    path: 'screen2',
    component: Screen2Component
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
