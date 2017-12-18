export class LoggingService {
	count = 0;
	logStatusChange(status: string) {
		console.log(status);
		console.log(this.count++);
	}
}