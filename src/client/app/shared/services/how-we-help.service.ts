import { Injectable } from 'angular2/core';
import { HelpMethod } from '../help-method.interface';
@Injectable()
export class HowWeHelpService {
	services : HelpMethod[]  = [
		{
			title: 'Service Design',
			home: `Service design lends tools in which you can
			 learn more about your user then ever before. We help you listen to your users and use service design tools
			 to upgrade your service or product...`,
			content: `<div class="row">
			<div class="col-md-15">
				<div class="content">
				<h3>On the move</h3>
				<img src="assets/Service_design_Pagina_Foto1.jpg">
					<p>To be a creative company the two faces from exploration to exploitation of your service or product should be an ongoing spiral. Keep on questioning the value of your service or product. This is what service design brings and what it will strengthen.</p>
				</div>
			</div>
			<div class="row">
			<div class="col-md-15">
				<div class="content">
				<h3>Customer needs</h3>
				<img src="assets/Service_design_pagina_foto2.jpg">
					<p>Service design focuses on the customer and the if your offering is still in line with their needs in this fast changing society. This is essential to stay innovative. With Service design methods, customer needs are easily found and user.</p>
				</div>
			</div> 
			<div class="row">
			<div class="col-md-15">
				<div class="content">
				<h3>Design innovation</h3>
				<img src="assets/Service_design_pagina_foto3.jpg">
					<p>Innovation happens more easy when business and design come together in a company. On one side analysis based on facts and figures and on the other a more creative approach in which ideation and improvisation create new ways of thinking. These worlds combined bring new perspectives.</p>
				</div>
			</div>
			`,
			image: '/assets/service-design.jpg',
		},
		{
			title: 'Visual Design',
			home: `Technology and ways to
			 communicate have grown exponentially, and internet makes it
			 possible spreading information over the world everyday.. How to spread your story...`,
			content: `<div class="row">
			<div class="col-md-15">
				<div class="content">
					<p>Information overflow tranquilizes today’s society in a way. With as result they start filtering information that seems to be important for them and easy to digest. Therefor it is important to have a clear communication with your user.</p>
				</div>
			</div>
			<div class="row">
			<div class="col-md-15">
				<h3 class="circle">Visual identity</h3>
				<div class="content">
					<p>To communicate the message of your product or service to your user, we can help you create a clear visual identity. We will work as close as needed with you to have a good understanding about the values of your company towards the market.</p>
				</div>
			</div> 
			<div class="row">
			<div class="col-md-15">
				<h3 class="circle">Visual storytelling</h3>
				<div class="content">
					<p>When communicating your ideas and dreams towards potential users or even stakeholders, it is from great importance that the information you are spreading speaks for itself. We can help designing this story!</p>
				</div>
			</div>
		<div class="row">
			<div class="col-md-15">
				<h3 class="circle">Outcome visualization</h3>
				<div class="content">
					<p>After or even during design processes (prototype) outcomes have to be communicated towards (possible) stakeholders. it would be of great value to visualize ideas. At these moments we can empower your ideation team with visual thinkers.</p>
				</div>
			</div>
			`,
			image: '/assets/visual-design.jpg',
		},
		{
			title: 'Strategic Design',
			home: `We help you creating a company in which an  innovation in a natural outcome of a creative way of working. We learn design thinking in five different steps...`,
			content: `
				<div class="row">
			<div class="col-md-15">
				<h3 class="circle">Create to inovate</h3>
				<div class="content">
					<p>In the first step we will find the creative value of the teammembers within three different courses. The methods used to find the best way to generate innovation will be cus- tomised after getting to know the team.</p>
				</div>
			</div>
			<div class="col-md-15">
				<h3 class="circle">Creative process</h3>
				<div class="content">
					<p>Design-thinking powers strategic innovation. It can be used to unlock hidden value in existing products, services and assets. That means energizing without reinventing the whole business. A process based on this, can have compelling economic value creation, and improved customer experience. Design thinking is the key asset to innovation.</p>
				</div>
			</div>
			<div class="col-md-15">
				<h3 class="circle">Big data design analysis</h3>
				<div class="content">
					<p>How are they using your product/service, when are they using it and why are they using it. This all is to be found on the web. But how can you find the right information that leads you to valuable insight? Big data in this way can help you increase the value of the product/service or even the experience of it.. This is an important aspect in our courses</p>
				</div>
			</div>
			<div class="col-md-15">
				<h3 class="circle">Inhouse design schooling</h3>
				<div class="content">

					<p>To integrate design within the core of the company there has to be a solid factor of creative thinking. The chance of not following up on learning new ways of approaching old habits is big.  To ensure creativity will be incorporated within the working processes of employees, this step will be valuable for the route closer to a creative business.</p>
				</div>
			</div>
			<div class="col-md-15">
				<h3 class="circle">Cultural changes </h3>
				<div class="content">
					<p>To integrate design within the core of the company there has to be a solid factor of creative thinking. The chance of not following up on learning new ways of approaching old habits is big.  To ensure creativity will be incorporated within the working processes of employees, this step will be valuable for the route closer to a creative business.</p>
				</div>
			</div>
		</div>


			`,
			image: '/assets/strategic-design.jpg',
		}
	];
		get() {
			return this.services;
		}
}
