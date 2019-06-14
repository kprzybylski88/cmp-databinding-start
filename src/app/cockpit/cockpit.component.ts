import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { Server } from '../shared/server.model';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<Server>();
  @Output() blueprintCreated = new EventEmitter<Server>();
  // newServerName = '';
  newServerContent = '';
  @ViewChild('serverNameInput', {static: true}) serverName: ElementRef;

  onAddServer(serverNameInput: HTMLInputElement) {
    // console.log(serverNameInput.value);
    this.serverCreated.emit(new Server('server', serverNameInput.value, this.newServerContent));
  }

  onAddBlueprint() {
    this.blueprintCreated.emit(new Server('blueprint', this.serverName.nativeElement.value, this.newServerContent));
  }

  constructor() { }

  ngOnInit() {
  }

}
