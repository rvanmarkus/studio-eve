import { Component, OnInit } from 'angular2/core';
import {FORM_PROVIDERS, FormBuilder, Validators, ControlGroup} from 'angular2/common';
import {Http, HTTP_PROVIDERS, Headers} from 'angular2/http';

@Component({
	selector: 'contact-form',
	viewProviders: [HTTP_PROVIDERS],
	templateUrl: 'app/+home/components/contact-form.component.html'
})
export class ContactFormComponent implements OnInit {
	contactForm : ControlGroup;
	submitted: boolean = false;

	constructor(private _formBuilder : FormBuilder, private http : Http) {
		this.contactForm = this._formBuilder.group({
        'name': ['', Validators.required],
        'email': ['', Validators.required],
        'message': ['', Validators.required],
        'phone': ['', Validators.nullValidator]
   	 });
	}

	submitContactForm() {
		this.sendMail();
		this.submitted = true;
		event.preventDefault();
	}

	sendMail() {
		const formSpreeUrl = 'https://formspree.io/rvanmarkus@xebia.com';
		const formDataJSON = JSON.stringify(this.contactForm.value);

		const headers = new Headers();
		headers.append('Content-Type', 'application/json');

		this.http.post(formSpreeUrl, formDataJSON, { headers : headers}).subscribe(event => {
			console.log('posted', event);
		});
	}

	ngOnInit() { }

}