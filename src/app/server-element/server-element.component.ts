import { Component, OnInit, OnDestroy, Input, EventEmitter, Output } from '@angular/core';
import { Server } from '../shared/server.model';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
})
export class ServerElementComponent implements OnInit, OnDestroy {

  @Input() serverElement: Server;
  @Output() deleteCalled = new EventEmitter<Server>();

  constructor() {
    console.log('constructor called!');
   }

   ngOnInit() {
     console.log('ngOnInint called!');

   }

   ngOnDestroy() {
    console.log('ngOnDestroy called!');
   }

   deleteThisServer() {
    this.deleteCalled.emit(this.serverElement);
   }
}
