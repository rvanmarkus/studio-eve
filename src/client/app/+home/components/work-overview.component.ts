import { Component } from 'angular2/core';
import { WorkListService } from '../../shared/services/work-list.service';
import {Router} from 'angular2/router';
import { Work } from '../../shared/work.interface';
@Component({
	selector: 'work-overview',
	viewProviders: [WorkListService],
	templateUrl: 'app/+home/components/work-overview.component.html'
})
export class WorkOverviewComponent {
	rows: Object[][] = new Array();

	constructor(nameListService : WorkListService, private _router: Router) {
		let allWorkItems = nameListService.getAll();
		for (var x=0; x < allWorkItems.length; x=x++) {
			this.rows.push(allWorkItems.splice(0,3));
		}
	}

	getRows() {
		return this.rows;
	}
	openWork(work: Work) {
		this._router.navigate( ['WorkDetail', { slug: work.slug }] );
	}
}