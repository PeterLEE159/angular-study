import { LoggingService } from './loggin.service';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class AccountsService {
	accounts = [
	    {
	      name: 'Master Account',
	      status: 'active'
	    },
	    {
	      name: 'Testaccount',
	      status: 'inactive'
	    },
	    {
	      name: 'Hidden Account',
	      status: 'unknown'
	    }
	];

	statusUpdated = new EventEmitter<string>();

	constructor(private loggingService: LoggingService) { }
	
	addAccount(name: string, status: string) {
		this.accounts.push({name, status});
		this.loggingService.logStatusChange('called from account.service#addAcount ' + status);
	}


	updateStatus(id: number, status: string) {
		this.accounts[id].status = status;
		this.loggingService.logStatusChange('called from account.service#updateStatus ' + status);
	}
}