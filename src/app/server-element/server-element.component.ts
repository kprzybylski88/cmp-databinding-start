import { Component, OnInit, OnDestroy, Input, EventEmitter, Output, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Server } from '../shared/server.model';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
})
export class ServerElementComponent implements OnInit, OnDestroy, AfterViewInit {

  @Input() serverElement: Server;
  @Output() deleteCalled = new EventEmitter<Server>();
  @ViewChild('heading', {static: true}) header: ElementRef;

  constructor() {
    console.log('constructor called!');
   }

   ngOnInit() {

   }

   ngAfterViewInit() {
    console.log('Text Content ' + this.header.nativeElement.textContent);
   }

   ngOnDestroy() {
    console.log('ngOnDestroy called!');
   }

   deleteThisServer() {
    this.deleteCalled.emit(this.serverElement);
   }
}
