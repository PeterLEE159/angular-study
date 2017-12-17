import { Component, OnInit, EventEmitter, Output, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
  
})
export class CockpitComponent implements OnInit {
	  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
	  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();

    @ViewChild('inputContent') serverContent: ElementRef;

  	
  	constructor() { }

    ngOnInit() {
    }
  
  	onAddServer(name, content) {
      
      // this.serverCreated.emit({serverName: name.value, serverContent: content.value});
  		this.serverCreated.emit({serverName: name.value, serverContent: this.serverContent.nativeElement.value});
  	}

    onAddBlueprint(name, content) {
      	this.blueprintCreated.emit({serverName: name.value, serverContent: content.value});
    }
}
