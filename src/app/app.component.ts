import { Component } from '@angular/core';
import { ElectronService } from 'ngx-electron';
import { FileService } from './service/file.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-elec-process';

  constructor(private _electronService: ElectronService, private _fileService: FileService) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // this.playPingPong();


    if (this._electronService.isElectronApp) {
      this._electronService.ipcRenderer.on('pong', (event, arg) => {
        console.log(
          'RECEIVED RESPONSE FROM ELECTRON TO ANGULAR APP',
          event,
          arg
        );
      });
    }
  }


  // public playPingPong() {
  //   if (this._electronService.isElectronApp) {
  //     this._electronService.ipcRenderer.send('ping', 'Hi');
  //     console.log('Hi');
  //   }
  // }

  goToSettingsWindow() {
    console.log("ready");

    if (this._electronService.isElectronApp) {
      this._electronService.ipcRenderer.send('win', 'win');
      console.log('Hi');
    }

  }
}
