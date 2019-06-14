import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Server } from '../shared/server.model';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<Server>();
  @Output() blueprintCreated = new EventEmitter<Server>();
  newServerName = '';
  newServerContent = '';

  onAddServer() {
    this.serverCreated.emit(new Server('server', this.newServerName, this.newServerContent));
  }

  onAddBlueprint() {
    this.blueprintCreated.emit(new Server('blueprint', this.newServerName, this.newServerContent));
  }

  constructor() { }

  ngOnInit() {
  }

}
