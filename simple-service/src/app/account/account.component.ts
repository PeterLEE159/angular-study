import { Component, Input, Output } from '@angular/core';
import { LoggingService } from '../loggin.service';
import { AccountsService } from '../accounts.service';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  


  constructor(private loggingService: LoggingService, private accountsService: AccountsService) { }

  onSetTo(status: string) {
    
    // this.loggingService.logStatusChange('A server status changed, new status: ' + status);
    
    this.accountsService.updateStatus( this.id, status );
  }
}
