import { Component, OnInit } from 'angular2/core';
import { HowWeHelpService } from '../../shared/services/how-we-help.service';
@Component({
	selector: 'how-we-help',
	viewProviders: [HowWeHelpService],
	templateUrl: 'app/+home/how-we-help.component.html'
})
export class HowWeHelpComponent implements OnInit {
	constructor() { }

	ngOnInit() { }


}