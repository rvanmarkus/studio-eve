import {Component} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import { ContactFormComponent } from './contact-form.component';
import {WorkListService} from '../../shared/index';
import { WorkOverviewComponent } from './work-overview.component';

@Component({
  selector: 'sd-home',
  templateUrl: 'app/+home/components/home.component.html',
  styleUrls: ['app/+home/components/home.component.css'],
  directives: [FORM_DIRECTIVES, CORE_DIRECTIVES, ContactFormComponent, WorkOverviewComponent]
})
export class HomeComponent {
  newName: string;
  constructor(public nameListService: WorkListService) {}
}
