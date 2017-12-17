import { 
	Component, 
	ViewChild,
	ElementRef,
	OnInit, 
	Input, 
	ViewEncapsulation, 
	OnChanges, 
	DoCheck,
	AfterContentInit,
	AfterContentChecked,
	AfterViewInit,
	AfterViewChecked,
	OnDestroy,
	SimpleChanges

} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
	@Input() element: {type: string, name: string, content: string};
	@Input() name: string;
	@ViewChild('heading') header: ElementRef;

  	constructor() {
  		console.log('constructor called');
  	}

	ngOnInit() {
		console.log('ngOnInit called');
		console.log('text content: ' + this.header.nativeElement.textContent);
	}

	ngOnChanges(changes: SimpleChanges) {
		console.log('ngOnChanges called');	
		console.log(changes);
	}

	ngDoCheck() {
		console.log('ngDoCheck called');
	}

	ngAfterContentInit() {
		console.log('ngAfterContentInit called');	
	}
	ngAfterContentChecked() {
		console.log('ngAfterContentChecked called');		
	}
	ngAfterViewInit() {
		console.log('ngAfterViewInit called');
		console.log('text content: ' + this.header.nativeElement.textContent);
	}
	ngAfterViewChecked() {
		console.log('ngAfterViewChecked called');		
	}
	ngOnDestroy() {
		console.log('ngOnDestroy called');	
	}
}
