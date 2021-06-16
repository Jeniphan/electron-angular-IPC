import { Component } from '@angular/core';
import { ElectronService } from 'ngx-electron';
import { FileService } from './service/file.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-elec-process';

  constructor(private _electronService: ElectronService, private _fileService: FileService) { }

  ngOnInit(): void {

    this._electronService.ipcRenderer.on('resAlltasks', (error, arg) => {
      console.log(typeof arg);
    })
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // this.playPingPong();
    this.goToSettingsWindow()
  }


  // public playPingPong() {
  //   if (this._electronService.isElectronApp) {
  //     this._electronService.ipcRenderer.send('ping', 'Hi');
  //     console.log('Hi');
  //   }
  // }

  goToSettingsWindow() {
    console.log("ready");
    this._electronService.ipcRenderer.send('allTasks', 'win');

  }
}
