import { Component, OnInit } from 'angular2/core';
import { WorkListService } from '../../shared/services/work-list.service';
import {Work} from '../../shared/work.interface';
import {RouteParams} from 'angular2/router';

@Component({
	selector: 'work-details',
	viewProviders: [WorkListService],
	templateUrl: 'app/+work/components/work-detail.component.html',
	styleUrls: ['app/+work/components/work-detail.component.css']
})
export class WorkDetailComponent implements OnInit {
	public work: Work;

	constructor(private workListService : WorkListService, private _params : RouteParams) {
	}

	ngOnInit() {
		this.work = this.workListService.get(this._params.get('slug'))[0];
	 }
}
