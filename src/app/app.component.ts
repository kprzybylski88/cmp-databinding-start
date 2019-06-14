import { Component } from '@angular/core';
import { Server } from './shared/server.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements: Server[] = [];
  onServerAdded(serverData: Server) {
         this.serverElements.push({
          type: 'server',
          name: serverData.name,
          content: serverData.content
        });
      }

      onBlueprintAdded(serverData: Server) {
         this.serverElements.push({
          type: 'blueprint',
          name: serverData.name,
          content: serverData.content
        });
      }
}
