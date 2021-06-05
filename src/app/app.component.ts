import { Component } from '@angular/core';
import { ElectronService } from 'ngx-electron';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-elec-process';

  constructor(private _electronService: ElectronService) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.playPingPong();

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


  public playPingPong() {
    if (this._electronService.isElectronApp) {
      let pong: string = this._electronService.ipcRenderer.sendSync('ping', 'Hi');
      console.log(pong);
    }
  }
}
