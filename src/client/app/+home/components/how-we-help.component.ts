import { Component } from 'angular2/core';
import { HowWeHelpService } from '../../shared/services/how-we-help.service';
import { HelpMethod } from '../../shared/help-method.interface';
import {PageScroll} from 'ng2-page-scroll';

@Component({
	selector: 'how-we-help',
	viewProviders: [HowWeHelpService],
	templateUrl: 'app/+home/components/how-we-help.component.html',
	directives: [PageScroll],
	styleUrls: ['app/+home/components/how-we-help.component.css']
})
export class HowWeHelpComponent {
	helpMethods: HelpMethod[];
	visibleMethod: HelpMethod;

	constructor(private _howWeHelpService : HowWeHelpService) {
		this.helpMethods = this._howWeHelpService.get();

	}

	openMethod(method : HelpMethod) {
		this.visibleMethod = method;
	}
}
