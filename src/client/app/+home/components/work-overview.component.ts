import { Component, OnInit } from 'angular2/core';
import { WorkListService } from '../../shared/services/work-list.service';
@Component({
	selector: 'work-overview',
	templateUrl: 'app/+home/components/work-overview.component.html'
})
export class WorkOverviewComponent implements OnInit {
	rows: Object[][] = new Array();

	constructor(nameListService : WorkListService) {
		let allWorkItems = nameListService.getAll();
		for (var x=0; x < allWorkItems.length; x=x++) {
			this.rows.push(allWorkItems.splice(0,3));
		}
	}

	ngOnInit() { }

	getRows() {
		return this.rows;
	}
}