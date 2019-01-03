import { Component, OnInit } from '@angular/core';
import { VgControlsModule } from 'videogular2/controls';
import { VgAPI, VgPlayer } from 'videogular2/core';
import { anchorDef } from '@angular/core/src/view';
import { viewParentEl } from '@angular/core/src/view/util';


@Component({
  selector: 'app-video-display',
  templateUrl: './video-display.component.html',
  styleUrls: ['./video-display.component.scss']
})
export class VideoDisplayComponent implements OnInit {
  preload: string = 'auto';
  api: VgAPI;
  initialStartExecuted: boolean = true;
  vp: any;
  props: Array<any> = new Array();
  checkTimer: any = null;

  constructor() { }

  ngOnInit() {
    this.updateProps();
  }


  onPlayerReady(api: VgAPI) {
    console.log('onPlayerReady: event: ', api);
    this.api = api;
    this.anchorPlayer(this.api);
  }

  anchorPlayer(api) {
    console.log('anchorPlayer');
    this.vp = api.getDefaultMedia();
    console.log(this.vp);
    console.log(typeof (this.vp));

  }

  updateProps() {
    setTimeout (()=> {
      this.props = [
        {
          name: 'canPlay',
          value: this.vp.canPlay
        }, 
        {
          name: 'state',
          value: this.vp.state
        }, 
        {
          name: 'isWaiting',
          value: this.vp.isWaiting
        }, 
        
      ];
      this.updateProps();
    }, 1000);

  }

  


}
