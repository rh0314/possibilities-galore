import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { IconsTestComponent } from './icons-test/icons-test.component';
import { HomeComponent } from './shared/home/home.component';


const routes: Routes = [
  {
    path: '',
    children: [],
    component: HomeComponent
  },
  { path: 'icons-test', component: IconsTestComponent },
  // { path: '**', component: null }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes), 
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
