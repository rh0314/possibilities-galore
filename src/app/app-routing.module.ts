import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { IconsTestComponent } from './icons-test/icons-test.component';
import { HomeComponent } from './shared/home/home.component';
import { VideoDisplayComponent } from './video-display/video-display.component';
import { VideoSampleComponent } from './video-sample/video-sample.component';

const routes: Routes = [
  {
    path: '',
    children: [],
    component: HomeComponent
  },
  { path: 'icons-test', component: IconsTestComponent },
  { path: 'video-display', component: VideoDisplayComponent },
  { path: 'video-sample', component: VideoSampleComponent },
  // { path: '**', component: null }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes), 
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
