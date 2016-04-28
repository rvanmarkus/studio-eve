import { Component, OnInit } from 'angular2/core';
import { HowWeHelpService } from '../../shared/services/how-we-help.service';
import { HelpMethod } from '../../shared/help-method.interface';
@Component({
	selector: 'how-we-help',
	viewProviders: [HowWeHelpService],
	templateUrl: 'app/+home/components/how-we-help.component.html',
	styleUrls: ['app/+home/components/how-we-help.component.css']
})
export class HowWeHelpComponent implements OnInit {
	helpMethods: HelpMethod[];
	visibleMethod: HelpMethod;

	constructor(private _howWeHelpService : HowWeHelpService) {
		this.helpMethods = this._howWeHelpService.get();

	}

	ngOnInit() { }

	openMethod(method : HelpMethod) {
		this.visibleMethod = method;
	}
}
